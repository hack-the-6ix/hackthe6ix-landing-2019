<template>
	<div class="applicant" v-show="valid" v-bind:class="{ accepted: accepted }">
		<div class="top pad" v-on:click="show = !show"  v-bind:class="{ active: show }">
			<div class="col name"><b>{{applicant.name}} {{applicant.lname}}</b> ({{applicant.email}})</div>
			<div class="col status">{{applicant.application_status}}</div>
		</div>
		<div class="bottom pad" v-show="show">
			<div class="row"><b>School</b>{{applicant.school}}</div>			
			<div class="row"><b>Year</b>{{applicant.year_of_study}}</div>
			<div class="row"><b>Gender</b>{{applicant.gender}}</div>
			<div class="row"><b>Hackathons Attended</b>{{applicant.hack_count}}</div>
			<div class="row"><b>Website</b> 
				<a :href="applicant.portfolio" v-show="applicant.portfolio" target="_blank">{{applicant.portfolio}}</a>
			</div>
			<div class="row"><b>Github</b>
				<a :href="applicant.github" v-show="applicant.github" target="_blank">{{applicant.github}}</a>
			</div>
			
			<div class="row"><b>Dietary Restriction</b>{{applicant.dietary_restrictions}}</div>
			<div class="row"><b>Team</b>{{applicant.team_members}}</div>
			<div class="row double"><b>Project</b>{{applicant.pitch}}</div>
			<div class="controls double">
				<div class="left">
					<Button class="btn" :click="dashboard">Dashboard</Button>
					<Button class="btn" :click="resume" :loading="resume_loading">Resume</Button>
				</div>
				<div class="right">
					<select v-model="application_status">
						<option v-for="status in application_statuses" :key="status">{{status}}</option>
					</select>
					<Button class="btn" :click="save">Save</Button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {Button, Input, Select} from '@components'
import {query, auth} from '@utils'
import {RESUME, STATUSES, UPDATE_APPLICANT} from '@graphql'
export default {
  name: 'Applicant',
  props: {
		applicant: Object,
	},
  components: {
		Button,
		Input,
		Select
  },
  data () {
		return {
			show: false,
			application_status: "",
			resume_loading: false,
			application_statuses: STATUSES,
		}
  },
  created() {
		this.application_status = this.applicant.application_status
  },
  computed: {
		valid(){
			return this.applicant.application_status != 'invalid'
		},
		accepted(){
			return this.applicant.application_status == 'accepted'
		}
  },
  methods: {
		dashboard() {
			window.open("https://hackthe6ix.com/dash/" + this.applicant.id, "_blank")
		},
		resume() {
			this.resume_loading = true
			query(RESUME, { query: { id: this.applicant.id }}, auth.fetch_user().token).then((result) => {
				window.open(result[0].resume, "_blank")
				this.resume_loading = false
			})
		},
		save() {
			query(
				UPDATE_APPLICANT, 
				{ id: this.applicant.id, applicant: { application_status: this.application_status } }, 
				auth.fetch_user().token
			).then((result) => {
				console.log(result)
				this.applicant.application_status = this.application_status
			})
			console.log('saving ' + this.applicant.email)
		}
  }
}
</script>
<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

	a {
		margin:0;
		padding:0;
	}
	select {
		margin: 0;
		padding:4px 8px;
		display:block;
	}
	.applicant {
		margin-bottom:8px;
		border-left:4px solid rgba(255,255,255,0.4);
		font-size:110%;
		line-height: 150%;
	}
	.accepted {
		border-left:4px solid #23b5af;
	}
	.rsvp {
		border-left:4px solid #E3493B;
	}
	.no_rsvp {
		border-left: 4px solid #f6d049;
	}
	.controls {
		width:100%;
		display:flex;
		justify-content: space-between;
		margin: 8px 0;
		.left {
			display:flex;
			flex-grow: 1;
			* {
				margin-right: 10px;
			}
		}
		.right {
			display: flex;
			justify-content: flex-end;
			flex-grow: 1;
		}
		.btn {
			padding: 4px 8px;
			min-width: 80px;
			&.red {
				background:#E3493B;
			}
			&.blue {
				background: #23b5af;
			}
		}
	}
	.pad {
		padding:4px 8px;
	}
	.top {
		display:flex;
		justify-content: space-between;
		&:hover {
			background:rgba(255,255,255,0.2);
		}
		&.active {
			background:rgba(255,255,255,0.2);
		}
	}
	.top:hover {
		cursor:pointer;
	}
	.name {
		flex-basis:50%;
	}
	.row {
		b {
			margin-right: 8px;
		}
	}
	.double {
		grid-column-start: 1;
		grid-column-end: span 2;
	}
	.bottom {
		color:#fff;
		display: grid;
		grid-template-columns: 50% 50%;
		background:rgba(255,255,255,0.1);
	}
</style>

