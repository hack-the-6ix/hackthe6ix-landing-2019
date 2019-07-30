<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Schedule</h2>
    <div v-if="!loading">
      <center>Coming Soon</center>
    </div>
    <div class="dash__controls">
      <Button class="dash__button dash__button--full" :click="() => to(0)"
        >Back to Home</Button
      >
    </div>
  </div>
</template>

<script>
import {Button} from '@components';

export default {
  name: 'Schedule',
  components: {
    Button,
  },
  props: {
    user: Object,
    loading: Boolean,
    to: Function,
  },
};
</script>
