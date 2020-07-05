<template>
  <div id="app">
    <Navigation :items="items" :disableApply="disableApply" />
    <router-view />
    <Footer :items="items" :disableApply="disableApply" />
  </div>
</template>

<script>
import {Navigation, Footer} from '@components';
import {Home, About, Faq, Contact} from '@pages/Landing/MainPage/sections';
const sections = [Home, About, Faq, Contact];
const items = Object.values(sections);
import {disableApply} from '@data';

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
      disableApply: disableApply,
    };
  },
};
</script>
