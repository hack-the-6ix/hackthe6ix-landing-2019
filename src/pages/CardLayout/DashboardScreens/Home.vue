<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Home</h2>
    <div v-if="!loading">
      <img
        class="dash__qr"
        src="https://i.ibb.co/Pgpxx43/Clipboard.jpg"
        @load="pageHeight"
        alt="QR Code"
      />
      <p class="dash__name">{{ user.name }} {{ user.lname }}</p>
      <p class="dash__role">Hacker</p>
    </div>
    <div class="dash__controls">
      <Button class="dash__button" :click="() => to(1)" icon="compass"
        >Application Status</Button
      >
      <Button class="dash__button" :click="() => to(2)" icon="calendar"
        >Schedule</Button
      >
      <Button
        class="dash__button"
        :click="() => to(3)"
        :icon="['fab', 'slack']"
        disabled
        >Slack Channel</Button
      >
      <Button class="dash__button" :click="() => to(4)" icon="award" disabled
        >Challenges/Prizes</Button
      >
    </div>
  </div>
</template>

<script>
import {Button} from '@components';

export default {
  name: 'Home',
  components: {
    Button,
  },
  props: {
    user: Object,
    loading: Boolean,
    pageHeight: Function,
    to: Function,
  },
};
</script>
