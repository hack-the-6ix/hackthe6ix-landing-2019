<template>
	<div id="admin-dashboard">
		<h1 class="title">Admin</h1>
    <admin-stats :applicants="applicants"></admin-stats>
    <div class="applicants">
      <applicant v-for="applicant in applicants" :applicant="applicant" v-bind:key="applicant.id"></applicant>
    </div>
	</div>
</template>
<script>
import {Applicant, AdminStats} from '@components';
import {query, auth} from '@utils';
import {APPLICANTS, AUTH_ADMIN} from '@graphql';
export default {
  name: 'admin',
  path: '/admin',
  components: {
    Applicant,
    AdminStats
  },
  data () {
    return {
    	applicants: [],
    }
  },
  methods: {

  },
  async created() {
    const auth_user = auth.fetch_user()
    if(!auth.has_admin_access(auth_user)) this.$router.push('/login')
    await query(APPLICANTS, {}, auth_user.token).then((result) => {
      console.log(result)
      this.applicants = result
    })
  },
}	
</script>
<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.wrap {
  padding:40px;
  margin: auto;
}
</style>