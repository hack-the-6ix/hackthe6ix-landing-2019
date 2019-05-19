<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'CardLayout',
    path: '/'
  }
</script>

<style lang="scss">
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  #app {
  }
</style>
