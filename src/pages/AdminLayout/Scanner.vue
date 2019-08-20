<template>
  <div id="scanner">
    <Scanner />
  </div>
</template>
<script>
import {Scanner} from '@components';
export default {
  name: 'scanner',
  path: '/scan',
  components: {
    Scanner
  },
};
</script>
<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.wrap {
  padding: 40px;
  margin: auto;
}
</style>
