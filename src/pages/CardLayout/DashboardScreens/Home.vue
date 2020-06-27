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
      <Button class="dash__button" :click="scheduleMe" icon="calendar"
        >Schedule</Button
      >
      <Button
        class="dash__button"
        :icon="['fab', 'slack']"
        :click="slackMe"
        :disabled="canSlack"
        >Slack Channel</Button
      >
      <Button class="dash__button" :click="prizeMe" icon="award"
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
import Button from '@hackthe6ix/vue-ui/Button';
import {email} from '@data';
const whiteList = ['accepted', 'attending', 'not_attending'];

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
  computed: {
    canSlack() {
      return !whiteList.includes(this.user.application_status);
    },
  },
  methods: {
    slackMe() {
      window.open(
        'https://join.slack.com/t/hackthe6ix2019/shared_invite/enQtNzMyMTYzODU2NTUxLTljOTA4Y2Q5NTg0MzRlODFhMGVkMjcxZDg0Y2UwNjc5OTgwZDY0YTk3MjNhYWMwZWRkMzJjM2JiNzNjZjhlODk',
        '_blank',
      );
    },
    prizeMe() {
      window.open('https://hack-the-6ix-2019.devpost.com/', '_blank');
    },
    scheduleMe() {
      window.open('/schedule', '_blank');
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
