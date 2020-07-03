<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Schedule</h2>
    <div v-if="!loading">
      <dynamic-schedule :signup_enabled="false"></dynamic-schedule>
      <a href="https://hackthe6ix.com/schedule.png" target="_blank"
        >Download Schedule</a
      >
    </div>
    <div class="dash__controls">
      <Button class="dash__button dash__button--full" v-on:click.native="to(0)"
        >Back</Button
      >
    </div>
  </div>
</template>

<script>
import Button from '@hackthe6ix/vue-ui/Button';
import {DynamicSchedule} from '@components';

export default {
  name: 'Schedule',
  components: {
    Button,
    DynamicSchedule,
  },
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    user: Object,
    loading: Boolean,
    to: Function,
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.schedule {
  margin: 0;
}
.apply--schedule {
  max-width: 1000px;
}
</style>
