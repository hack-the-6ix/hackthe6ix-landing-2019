<template>
	<div id="status">
		<div class="wrap">
			{{message}}
			<div class="applicant" v-show="loaded">
				<h3 class="name">{{applicant.name}}</h3>
				<h2>Application Status: <div class="status">{{status}}</div></h2>
				<div class="sections">
					<div class="section">
						<div class="card">
							<div>{{statusMessage}}</div>
							<div class="attendee-links" v-show="accepted">
								<a class="attendee" href="https://www.facebook.com/groups/1416038748480243/">Facebook Group</a><br>
								<a class="attendee" href="https://hackthe6ix17.slack.com/join/shared_invite/MjI3NTI1NDAzMjIyLTE1MDI3Njk4MzAtYzMyNTM0ZWFjYg">Slack Channel</a>
							</div>
						</div>
					</div>
					<div class="section" v-show="accepted">
			            <div class="label">Will you be attending the event?</div>
			            <select v-model="applicant.rsvp" v-on:change="change">
			              <option value="true">Yes. I will be there!</option>
			              <option value="false">No. I can no longer make it.</option>
			            </select>
			        </div>
					<div class="section" v-show="accepted">
			            <div class="label">Please update us about any dietary restriction you may have.</div>
			            <input type="text" v-model="applicant.dietary" v-on:change="change"/>
					</div>
					<div class="section liability" v-show="accepted">
			            <input type="checkbox" v-model="liability" v-on:change="change"/>
			            <div class="liability-text">I have read and agree to the 
			            	<router-link to="/liability">liability waiver</router-link>.
			            </div>
					</div>
					<div class="section" v-show="accepted">
					<div>If you are under the age of 18, you must have <a href="https://drive.google.com/file/d/0B4fuapiLpLlsb3hxSWk0bnluV28/view">this form</a> signed by a parent or guardian, with you at the event, or else we cannot let you participate.</div><br>
					<div>If you have any questions, don't hesitate to email us at <a class="mailto" href="mailto:hello@hackthe6ix.com">hello@hackthe6ix.com</a></div>
					</div>
					<div class="section center" v-if="accepted">
						<div class="btn submit" v-on:click="submit()">SAVE</div>
					</div>
					<div class="section center">
						{{warning}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'status',
  data () {
    return {
    	id: null,
    	message: '',
    	applicant: {},
    	loaded: false,
    	status: '',
    	liability: false,
    	warning: ''
    }
  },
  created(){
  	this.id = this.$route.params.id
  	if (this.id) {
  		this.$http.get('https://ht6.lyninx.com/applicant/' + this.id).then((result)=>{
  			if (result.body.success){
  				this.applicant = result.body.applicant
  				this.status = this.applicant.acceptedStatus
  				this.applicant.dietary = this.applicant.dietaryRestriction
  				this.loaded = true
  			} else {
  				this.message = 'Error: Applicant ID not found. Please contact us for assistance.'
  			}
  		})
  	}
  },
  methods: {
  	submit() {
  		const body = {
  			id: this.id,
  			dietary: this.applicant.dietary,
  			rsvp: this.applicant.rsvp
  		}
  		if(this.liability){
  			this.send(body)
 		} else {
 			if(this.applicant.rsvp == "true"){
 				this.warning = "You must agree to the liability waiver in order to attend."
 			} else {
	  			this.send(body)
 			}
 		}
  	},
  	send(body) {
  		return this.$http.post('https://ht6.lyninx.com/applicant/' + this.id, body).then((result)=>{
  			this.warning = "Your information has been saved."
		}, ()=>{
			this.warning = "There was an error saving your information."
		})
  	},
  	change() {
  		this.warning = ''
  	}
  },
  computed: {
  	statusMessage(){
  		switch(this.status){
  			case "accepted":
  				return "We’re very excited to invite you to Hack the 6ix 2017! Get ready for a weekend of fun, food, and free swag. Join our Facebook group and Slack channel to meet other people, make teams, and find friends. We’ll be sending out further details and schedules closer to the event."
  			case "rejected":
  				return "Thank you for applying to Hack the 6ix! Due to the unexpected surplus of talented and impressive applicants this year, we aren’t able to extend an invitation right now. However, we’ve added you to the waitlist and will notify you as soon as more spots open up! If you’d like be a volunteer, we’re currently accepting applications! We’d love to keep in touch with you, so make sure to follow us on our social media pages and definitely apply again next year."
  			case "waitlist":
  				return "Thank you for applying to Hack the 6ix! Unfortunately, due to the unexpected surplus of talented and impressive applicants this year, we are unable to extend an invitation to you for Hack the 6ix 2017 at this time. Do not despair though! You can still get involved with our event. If you’d like be a volunteer, we’re currently accepting applications! We’d love to keep in touch with you, so make sure to follow us on our social media pages for upcoming contests and apply again next year!"
  		}
  	},
  	accepted(){
  		return this.status === 'accepted'
  	}
  }
}	
</script>
<style scoped>
	.wrap {
		max-width:600px;
	}
	.attendee-links {
		margin-top:12px;
	}
	.name {
		color:#ccc;
	}
	.status {
		display:inline-block;
		text-transform: capitalize;
	}
	.sections {
	  width:100%;
	  display:flex;
	  flex-direction:column;
	}
	.card {
		margin:0;
		padding:16px 32px;
	}
	.section.liability {
		flex-direction: row; 
	}
	.liability-text {
		font-size:18px;
		margin-left:10px;
	}
	.section {
	  padding:12px 0;
	  margin-bottom:12px;
	  width:500px;
	  max-width:600px;
	  display:flex;
	  flex-direction:column;
	}
	.section.center {
	  align-items:center;
	}
	.label {
	  line-height:140%;
	  font-size:20px;
	  color:#fff;
	  margin-bottom:12px;
	  font-weight:bold;
	}
	.submit {
	  font-size:20px;
	  font-weight:bold;
	  text-align:center;
	  padding: 8px 24px;
	}
	button, input, select, textarea {
	  border:1px solid #fff;
	  border-radius:8px;
	  background-color: rgba(17, 26, 52, 0.6);
	  padding:12px;
	  color:#fff;
	  font-size:18px;
	}
	select {
	  height:47px;
	}
	a {
		text-decoration: none;
		color:#E3493B;
	}
	a.mailto {
		color:#23b5af;
	}
	a.attendee {
		color:#23b5af;		
	}
	a:hover {
		color:#fff;
	}
	.btn {
	  transition:all 0.15s ease-in-out;
	}
	.btn:hover {
	  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);
	  transform: translateY(-8px);
	}
</style>