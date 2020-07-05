<template>
  <div id="app">
    <div class="background" />
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

.background {
  background-image: url('~@assets/background.svg?file');
  background-position: center center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  height: 100vh;
  width: 100vw;
}

.dashboard {
  @include flex(center, flex-start);
  background: none;
  box-sizing: border-box;
  padding: 10vh 0 60px;
  min-height: 100vh;
  width: 100%;
}
</style>
