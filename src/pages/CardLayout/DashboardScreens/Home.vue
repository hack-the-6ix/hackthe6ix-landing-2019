<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Home</h2>
    <div v-if="!loading">
      <img class="dash__qr" :src="qr" @load="pageHeight" alt="QR Code" />
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
      <Button class="dash__button" :icon="['fab', 'slack']" :click="slackMe"
        >Slack Channel</Button
      >
      <Button class="dash__button" :click="() => to(4)" icon="award" disabled
        >Challenges/Prizes</Button
      >
    </div>
    <p class="dash__aside">
      Got Questions? 👋 <a :href="'mailto:' + email">{{ email }}</a>
    </p>
    <p class="dash__aside">Remember to bookmark this page!</p>
  </div>
</template>

<script>
import {Button} from '@components';
import {email} from '@data';

export default {
  name: 'Home',
  components: {
    Button,
  },
  data() {
    return {
      email,
    };
  },
  methods: {
    slackMe() {
      window.open('http://hackthe6ix2019.slack.com', '_blank');
    },
  },
  props: {
    user: Object,
    loading: Boolean,
    qr: String,
    pageHeight: Function,
    to: Function,
  },
};
</script>
