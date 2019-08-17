<template>
  <div id="app" class="admin">
    <router-view class="admin-wrap" />
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  path: '/',
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.admin {
  background: black;
  color: #fff;
  padding: 40px;
  min-height: 100vh;
}

.admin-wrap {
  width: 100%;
  max-width: 1200px;
  margin: auto;
}
</style>
