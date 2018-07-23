<template>
	<div id="status">
		<div class="wrap">
			{{message}}
			<div class="applicant" v-show="loaded">
				<h3 class="name">{{applicant.name}} {{applicant.lname}}</h3>
				<h2>Application Status: <div class="status">{{status}}</div></h2>
				<div class="sections">
					<div class="section" v-show="accepted">
			            <div class="label">Will you be attending the event?</div>
			            <select v-model="applicant.rsvp">
			              <option value="true">Yes. I will be there!</option>
			              <option value="false">No. I can no longer make it.</option>
			            </select>
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
    	status: 'accepted',
    	warning: ''
    }
  },
  created(){
  	this.id = this.$route.params.id
  	if (this.id) {
  		this.$http.get('https://ht6.lyninx.com/applicant/' + this.id).then((result)=>{
  			if (result.body.success){
  				this.applicant = result.body.applicant
  				//this.status = this.applicant.accepted_status
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
  			rsvp: this.applicant.rsvp
  		}
  		this.send(body)
  	},
  	send(body) {
  		console.log(this.applicant.rsvp)
  		return this.$http.post('https://ht6.lyninx.com/applicant/' + this.id, body).then((result)=>{
  			if(this.applicant.rsvp == 'true'){
  				this.warning = "Your information has been saved. See you at the event!"	
  			} else {
  				this.warning = "Your information has been saved."
  			}
		}, ()=>{
			this.warning = "There was an error saving your information."
		})
  	}
  },
  computed: {
  	statusMessage(){
  		return ""
  	},
  	accepted(){
  		return this.status === 'accepted'
  	}
  }
}	
</script>
<style scoped>
	.wrap {
		background:#caf0ee;
		color:#111;
		margin: auto;
		padding:20px;
		border-radius:12px;
	}
	.attendee-links {
		margin-top:12px;
	}
	.name {
		color:#E3493B;
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
	  padding:12px;
	  color:#000;
	  font-size:18px;
	}
	select {
	  height:47px;
	}
	a {
		padding:0;
		text-decoration: none;
		color:#E3493B;
	}
/*	a.mailto {
		color:#23b5af;
	}*/
	a.attendee {
		color:#23b5af;		
	}
	.btn {
	  transition:all 0.15s ease-in-out;
	}
	.btn:hover {
	  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);
	  transform: translateY(-8px);
	}
</style>