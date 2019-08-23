<template>
  <div id="scanner">
    <Scanner />
  </div>
</template>
<script>
import {Scanner} from '@components';
import {auth} from '@utils';
export default {
  name: 'scanner',
  path: '/scan',
  components: {
    Scanner,
  },
  created() {
    const auth_user = auth.fetch_user();
    if (!auth.has_volunteer_access(auth_user)) this.$router.push('/login');
  },
};
</script>
<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.wrap {
  padding: 0px;
  margin: auto;
}
#response {
  padding: 10px;
  color: black;
}
</style>
