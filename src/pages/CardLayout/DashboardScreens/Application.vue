<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Application Status</h2>
    <div v-if="!loading" class="dash__app">
      <p class="dash__status">Current application status:</p>
      <p class="dash__large">{{ caps }}</p>
      <p>Check here later for updates.</p>
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
  name: 'Application',
  components: {
    Button,
  },
  props: {
    user: Object,
    loading: Boolean,
    to: Function,
  },
  computed: {
    caps() {
      const str = this.user.application_status;
      return (str.charAt(0).toUpperCase() + str.slice(1)).replace(/_/g, ' ');
    },
  },
};
</script>
