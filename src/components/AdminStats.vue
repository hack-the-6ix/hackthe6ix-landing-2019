<template>
	<div>
	    <div class="stats">
	    	<div class="stat">
	    		<label>Applicants</label>
	    		<div class="value">{{validApplicants}}</div>
	    	</div>
	    	<div class="stat">
	    		<label>Accepted</label>
	    		<div class="value">{{acceptedApplicants}}</div>
	    	</div>
	    	<div class="stat">
	    		<label>Rejected</label>
	    		<div class="value">{{rejectedApplicants}}</div>
	    	</div>
	    	<div class="stat">
	    		<label>Waitlist</label>
	    		<div class="value">{{waitlistApplicants}}</div>
	    	</div>
	    	<div class="stat">
	    		<label>RSVP</label>
	    		<div class="value">{{rsvpApplicants}}</div>
	    	</div>
	    	<div class="stat">
	    		<label>Signed In</label>
	    		<div class="value">{{signedInApplicants}}</div>
	    	</div>
	    </div>
	</div>
</template>
<script>
export default {
  name: 'AdminStats',
  props: [
	'applicants'
  ],
  data () {
    return {}
  },
  methods: {},
  created() {
  	console.log('dashboard')
  },
  watch: {
    applicants: {
      handler: function() {
        console.log('dashboard update')
      },
      deep: true
    }
  },
  computed: {
    validApplicants() {
      const valid = this.applicants.filter((applicant) => {
        return applicant.accepted_status != 'invalid'
      })
      return valid.length
    },
    acceptedApplicants() {
      const accepted = this.applicants.filter((applicant) => {
        return applicant.accepted_status == 'accepted'
      })
      return accepted.length
    },
    rejectedApplicants() {
      const rejected = this.applicants.filter((applicant) => {
        return applicant.accepted_status == 'rejected'
      })
      return rejected.length
    },
    signedInApplicants() {
      const signedIn = this.applicants.filter((applicant) => {
        return applicant.accepted_status == 'signed-in'
      })
      return signedIn.length
    },
    waitlistApplicants() {
      const waitlist = this.applicants.filter((applicant) => {
        return applicant.accepted_status == 'waitlist'
      })
      return waitlist.length
    },
    rsvpApplicants() {
      const rsvp = this.applicants.filter((applicant) => {
        return applicant.rsvp
      })
      return rsvp.length
    }
  }
}	
</script>
<style scoped>

.stats {
	display:flex;
	margin-bottom:32px;
}

.stat {
	text-align: center;
	min-width:100px;
	margin-right: 20px;
	padding:12px;
	background: #eee;
	color:#111;
	font-weight:bold;
}
.value {
	font-size:32px;
	font-weight:bold;
	color:#E3493B;
}
</style>
