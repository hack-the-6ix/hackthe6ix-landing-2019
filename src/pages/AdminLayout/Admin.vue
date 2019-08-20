<template>
  <div id="admin-dashboard">
    <Button :click="scanner">Scanner Component</Button>
    <h1 class="title">Admin</h1>
    <admin-stats :applicants="applicants"></admin-stats>
    <div class="applicants">
      <applicant
        v-for="(applicant, index) in applicants"
        :applicant="applicant"
        :index="index"
        v-bind:key="applicant.id"
      ></applicant>
    </div>
  </div>
</template>
<script>
import {Applicant, AdminStats, Button} from '@components';
import {query, auth} from '@utils';
import {APPLICANTS} from '@graphql';
export default {
  name: 'admin',
  path: '/admin',
  components: {
    Applicant,
    AdminStats,
    Button,
  },
  data() {
    return {
      applicants: [],
    };
  },
  methods: {
    scanner() {
      this.$router.push('/scan');
    },
  },
  async created() {
    const auth_user = auth.fetch_user();
    if (!auth.has_admin_access(auth_user)) this.$router.push('/login');
    await query(APPLICANTS, {}, auth_user.token).then(result => {
      this.applicants = result;
    });
  },
};
</script>
<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.wrap {
  padding: 40px;
  margin: auto;
}
</style>
