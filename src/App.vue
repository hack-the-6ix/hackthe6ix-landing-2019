<template>
  <router-view />
</template>

<script>
export default {
  name: 'app',
  beforeCreate() {
    const redirect = window.location.search.match(/redirect=([^&]*)/);
    if (redirect) this.$router.push(`/${decodeURIComponent(redirect[1])}`);
  },
};
</script>

<style lang="scss">
@import '~@styles/index.scss';
</style>
