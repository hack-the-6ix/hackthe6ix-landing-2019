<template>
  <div class="schedule__page">
    <h2 class="apply__subtitle">Schedule</h2>
    <div v-if="!loading">
      <dynamic-schedule :signup_enabled="false"></dynamic-schedule>
      <Button :click="download">Download Schedule</Button>
    </div>
  </div>
</template>

<script>
import Button from '@hackthe6ix/vue-ui/Button';
import {DynamicSchedule} from '@components';

export default {
  name: 'Schedule',
  path: '/schedule',
  components: {
    Button,
    DynamicSchedule,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    download() {
      window.open('https://hackthe6ix.com/schedule.png', '_blank');
    },
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
  $self: &;

  &__page {
    width: 100%;
    & #{ $self } {
      margin-bottom: 20px;
    }
  }
}
</style>
