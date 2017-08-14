<template>
	<div class="applicant" v-show="valid">
		<div class="top pad" v-on:click="show = !show">
			<div class="col name">{{applicant.name}}</div>
			<div class="col email">{{applicant.email}}</div>
			<div class="col status">{{applicant.acceptedStatus}}</div>
		</div>
		<div class="bottom pad" v-show="show">
			<div class="row">Resume: {{applicant.resumeID}}</div>
			<div class="row">Gender: {{applicant.gender}}</div>
			<div class="row">School: {{applicant.school}}</div>			
			<div class="row">Grad Year: {{applicant.gradYear}}</div>
			<div class="row">Hackathons Attended: {{applicant.hackCount}}</div>
			<div class="row">Interests: {{applicant.interests}}</div>
			<div class="row">Hack Idea: {{applicant.ideas}}</div>
			<div class="row">Dietary Restriction: {{applicant.dietaryRestriction}}</div>
			<div class="controls">
				<select v-model="applicationStatus">
					<option value="waiting">waiting</option>
					<option value="accepted">accepted</option>
					<option value="rejected">rejected</option>
					<option value="waitlist">waitlist</option>
					<option value="invalid">invalid</option>
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
  	this.applicationStatus = this.applicant.acceptedStatus
  },
  computed: {
  	valid(){
  		return this.applicant.acceptedStatus != 'invalid'
  	}
  },
  methods: {
  	update() {
  		const body = {
  			password: this.password,
  			id: this.applicant.id,
  			status: this.applicationStatus
  		}
  		this.$http.post('https://ht6.lyninx.com/update_status', body).then((res)=> {
  			this.applicant.acceptedStatus = this.applicationStatus;
  			this.show = false;
  		})
  	}
  }
}
</script>
<style scoped>
	.applicant {
		margin-bottom:8px;
		background:rgba(0,0,0,0.2);
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