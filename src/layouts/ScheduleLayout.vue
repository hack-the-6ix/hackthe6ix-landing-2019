<template>
  <div id="app">
    <div class="schedule-layout">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleLayout',
  path: '/',
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.schedule-layout {
  @include flex(flex-start);
  padding: 30px 40px;
  box-sizing: border-box;
  min-height: 100vh;
  max-width: 100vw;
}
</style>
