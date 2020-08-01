<template>
  <div>
    Redirecting...
  </div>
</template>

<script>
export default {
  name: 'ApplyStub',
  path: '/apply',
  components: {},
  data() {
    return {};
  },
  created() {
    window.location.href = '/';
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';
</style>
