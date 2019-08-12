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
import {query} from '@utils';
import {APPLICANTS} from '@graphql';
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
  created() {
    console.log('admin')
    let token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbm5pc0BoYWNrdGhlNml4LmNvbSIsImFjY2Vzc19zY29wZXMiOlsiYXBwbGljYW50IiwiYWRtaW4iXSwiaWF0IjoxNTY1NTU5MzM3LCJleHAiOjE1NjU3MzIxMzcsImF1ZCI6Imh0dHBzOi8vaGFja3RoZTZpeC5jb20iLCJpc3MiOiJIYWNrVGhlNml4Iiwic3ViIjoiZGVubmlzQGhhY2t0aGU2aXguY29tIn0.K3FecZFprU2_r_TIw9rIwTZjltaTiZrtfD8jNz-46YcKKO1sYzMrdslcdoXh7xdtG1pl7yL6qJK2x8VJGsNLdg"
    query(APPLICANTS, {}, token).then((result) => {
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