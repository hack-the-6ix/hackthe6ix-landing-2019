<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Home</h2>
    <div v-if="!loading">
      <p class="dash__name">{{ user.name }} {{ user.lname }}</p>
      <p class="dash__role">Hacker</p>
      <Application :user.sync="user" :token="token" :discord-me="discordMe" />
    </div>
    <div class="dash__controls">
      <Button
        class="dash__button"
        v-on:click.native="discordMe()"
        icon="calendar"
        v-if="user.application_status === 'attending'"
        >Join Discord</Button
      >
      <Button
        class="dash__button"
        v-on:click.native="liveMe()"
        icon="calendar"
        :disabled="true"
        v-if="user.application_status === 'attending'"
        >Live Site</Button
      >
      <Button
        class="dash__button"
        v-on:click.native="scheduleMe()"
        icon="calendar"
        :disabled="true"
        >Schedule</Button
      >
      <Button
        class="dash__button"
        v-on:click.native="prizeMe()"
        icon="award"
        :disabled="true"
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
import {default as Application} from './Application';
import Button from '@hackthe6ix/vue-ui/Button';
import {email} from '@data';

export default {
  name: 'Home',
  components: {
    Button,
    Application,
  },
  data() {
    return {
      email,
    };
  },
  methods: {
    prizeMe() {
      window.open('https://hackthe6ix2020.devpost.com/', '_blank');
    },
    scheduleMe() {
      window.open('/schedule', '_blank');
    },
    discordMe() {
      window.open('https://discord.gg/gSK62av', '_blank');
    },
    liveMe() {
      //window.open('', '_blank');
    },
  },
  props: {
    user: Object,
    loading: Boolean,
    pageHeight: Function,
    to: Function,
    token: String,
  },
};
</script>
