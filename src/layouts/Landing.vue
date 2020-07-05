<template>
  <div id="app">
    <Navigation
      :items="items"
      :disableApply="disableApply"
      :applyButtonMessage="applyButtonMessage"
    />
    <router-view
      :disableApply="disableApply"
      :applyButtonMessage="applyButtonMessage"
    />
    <Footer
      :items="items"
      :disableApply="disableApply"
      :applyButtonMessage="applyButtonMessage"
    />
  </div>
</template>

<script>
import {Navigation, Footer} from '@components';
import {Home, About, Faq, Contact} from '@pages/Landing/MainPage/sections';
const sections = [Home, About, Faq, Contact];
const items = Object.values(sections);
import {
  applyButtonMessages,
  overrideApplicationState,
  APPS_OPEN_TIME,
} from '@data';

export default {
  name: 'Landing',
  path: '/',
  exact: true,
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      items,
      applicationStage: 0,
      disableApply: true,
      applyButtonMessage: 'Apply Now',
      refreshTimer: null,
    };
  },
  mounted() {
    if (overrideApplicationState !== -1) {
      this.applicationStage = overrideApplicationState;
    } else {
      let diff = APPS_OPEN_TIME - new Date();
      // If the app open date is in the future
      this.applicationStage = diff > 0 ? 0 : 1;

      if (diff > 0) {
        this.refreshTimer = setTimeout(() => {
          location.reload();
        }, diff);
      }
    }

    // 0 = Applications not open yet
    // 1 = Applications open
    // 2 = Applications closed

    this.applyButtonMessage = applyButtonMessages[this.applicationStage];
    this.disableApply =
      this.applicationStage === 0 || this.applicationStage === 2;
  },
  destroyed() {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }
  },
};
</script>
