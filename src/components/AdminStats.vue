<template>
  <div>
    <div class="stats">
      <div class="stat">
        <label>Applicants</label>
        <div class="value">{{ validApplicants }}</div>
      </div>
      <div class="stat">
        <label>Attendees</label>
        <div class="value">{{ acceptedApplicants + rsvpApplicants }}</div>
      </div>
      <div class="stat">
        <label>Accepted</label>
        <div class="value">{{ acceptedApplicants }}</div>
      </div>
      <div class="stat">
        <label>Rejected</label>
        <div class="value">{{ rejectedApplicants }}</div>
      </div>
      <div class="stat">
        <label>Waitlist</label>
        <div class="value">{{ waitlistApplicants }}</div>
      </div>
      <div class="stat">
        <label>RSVP+</label>
        <div class="value">{{ rsvpApplicants }}</div>
      </div>
      <div class="stat">
        <label>RSVP-</label>
        <div class="value">{{ rsvpNotApplicants }}</div>
      </div>
      <div class="stat">
        <label>Signed In</label>
        <div class="value">{{ signedInApplicants }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminStats',
  props: {
    applicants: Array,
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  watch: {
    applicants: {
      handler: function() {},
      deep: true,
    },
  },
  computed: {
    validApplicants() {
      const valid = this.applicants.filter(applicant => {
        return applicant.application_status != 'invalid';
      });
      return valid.length;
    },
    acceptedApplicants() {
      const accepted = this.applicants.filter(applicant => {
        return applicant.application_status == 'accepted';
      });
      return accepted.length;
    },
    rejectedApplicants() {
      const rejected = this.applicants.filter(applicant => {
        return applicant.application_status == 'rejected';
      });
      return rejected.length;
    },
    signedInApplicants() {
      const signedIn = this.applicants.filter(applicant => {
        return applicant.checked_in == true;
      });
      return signedIn.length;
    },
    waitlistApplicants() {
      const waitlist = this.applicants.filter(applicant => {
        return applicant.application_status == 'waitlist';
      });
      return waitlist.length;
    },
    rsvpApplicants() {
      const rsvp = this.applicants.filter(applicant => {
        return applicant.application_status == 'attending';
      });
      return rsvp.length;
    },
    rsvpNotApplicants() {
      const rsvpNot = this.applicants.filter(applicant => {
        return applicant.application_status == 'not_attending';
      });
      return rsvpNot.length;
    },
  },
};
</script>
<style scoped>
.stats {
  display: flex;
  margin-bottom: 32px;
}

.stat {
  text-align: center;
  min-width: 100px;
  margin-right: 20px;
  padding: 12px;
  background: #eee;
  color: #111;
  font-weight: bold;
}
.value {
  font-size: 32px;
  font-weight: bold;
  color: #e3493b;
}
</style>
