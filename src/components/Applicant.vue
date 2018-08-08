<template>
	<div class="applicant" v-show="valid" v-bind:class="{ emailed: applicant.email_sent, rsvp: applicant.rsvp }">
		<div class="top pad" v-on:click="show = !show">
			<div class="col name">{{applicant.name}} {{applicant.lname}}</div>
			<div class="col email">{{applicant.email}}</div>
			<div class="col status">{{applicationStatus}}</div>
		</div>
		<div class="bottom pad" v-show="show">
			<div class="row"><b>Resume</b> <a target="_blank" :href="resumeLink">{{applicant.resume_key}}</a></div>
			<div class="row"><b>Gender</b> {{applicant.gender}}</div>
			<div class="row"><b>School</b> {{applicant.school}}</div>
			<div class="row"><b>Program</b> {{applicant.program}}</div>				
			<div class="row"><b>Grad Year</b> {{applicant.grad_year}}</div>
			<div class="row"><b>Hackathons Attended</b> {{applicant.hack_count}}</div>
			<div class="row"><b>Project</b> {{applicant.project}}</div>
			<div class="row"><b>Dietary Restriction</b> {{applicant.dietary_restriction}}</div>
			<div class="row"><b>Links</b> {{applicant.links}}</div>
			<div class="row"><b>Team</b> {{applicant.team}}</div>
			<div class="row"><b>RSVP Email Sent</b> {{applicant.email_sent}}</div>
			<div class="row"><b>RSVP</b> {{applicant.rsvp}}</div>
			<div class="controls">
				<div class="btn" v-on:click="email">SEND RSVP EMAIL</div>
				<select v-model="applicationStatus">
					<option value="waiting">waiting</option>
					<option value="accepted">accepted</option>
					<option value="rejected">rejected</option>
					<option value="waitlist">waitlist</option>
					<option value="invalid">invalid</option>
					<option value="signed-in">signed in</option>
				</select>
				<div class="btn" v-on:click="update">SAVE</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'applicant',
  props: [
	'applicant',
	'password'
  ],
  data () {
	return {
		show: false,
		applicationStatus: ""
	}
  },
  created() {
	this.applicationStatus = this.applicant.accepted_status
  },
  computed: {
	valid(){
		return this.applicant.accepted_status != 'invalid'
	},
	resumeLink(){
		return "https://ht6.lyninx.com/resumes/"+this.applicant.resume_key
	}
  },
  methods: {
	update() {
		let password = window.sessionStorage.getItem('ht6-token')
		let data = {
			password: password,
			id: this.applicant._id,
			status: this.applicationStatus
		}
		console.log('updating...')
		this.$http.post('https://ht6.lyninx.com/applicant_status', data).then((res) => {
			console.log(this.applicant.email + " updated to " + this.applicationStatus)
			this.applicant.accepted_status = this.applicationStatus
			this.show = false
		}, (err) => {
			console.warn('error updating applicant status')
			console.log(err)
		})
	},
	email() {
		let password = window.sessionStorage.getItem('ht6-token')
		let email = this.applicant.email
		console.log('emailing...')
		this.$http.post('https://ht6.lyninx.com/email_applicant/' + email, data).then((res) => {
			this.show = false
		}, (err) => {
			console.warn('error emailing applicant')
			console.log(err)
		})
	}
  }
}
</script>
<style scoped>
	a {
		margin:0;
		padding:0;
	}
	.applicant {
		margin-bottom:8px;
		background:rgba(255,255,255,0.2);
		border-left:4px solid rgba(255,255,255,0.4);
	}
	.emailed {
		border-left:4px solid #23b5af;
	}
	.rsvp {
		border-left:4px solid #E3493B;
	}
	.controls {
		width:100%;
		display:flex;
		justify-content: flex-end;
	}
	.controls select{
		padding:8px;
		height: 26px;
		margin:0 12px;
	}
	.pad {
		padding:4px 8px;
	}
	.top {
		display:flex;
		justify-content: space-between;
	}
	.top:hover {
		cursor:pointer;
	}
	.name {
		flex-basis:240px;
	}
	.bottom {
		background:#eee;
		color:#111;
	}
</style>