<template>
  <div id="app">
    <div class="dashboard">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardLayout',
  path: '/',
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.dashboard {
  @include flex(center, flex-start);
  background-image: url('~@assets/background.svg?file');
  background-position: right center;
  background-size: cover;
  box-sizing: border-box;
  padding: 10% 0 60px;
  min-height: 100vh;
  width: 100%;
}
</style>
