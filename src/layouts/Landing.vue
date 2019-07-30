<template>
  <div id="app">
    <Navigation :items="items" :disableApply="disableApply" />
    <router-view />
    <Footer :items="items" :disableApply="disableApply" />
  </div>
</template>

<script>
import {Navigation, Footer} from '@components';
import * as sections from '@pages/Landing/MainPage/sections';
const items = Object.values(sections);

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
      disableApply: false,
    };
  },
};
</script>
