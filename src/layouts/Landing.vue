<template>
  <div id='app'>
    <Navigation :items='items' :canApply='apply'/>
    <router-view/>
    <Footer :items='items' :canApply='apply'/>
  </div>
</template>

<script>
  import { Navigation, Footer } from '@components';
  import * as sections from '@pages/Landing/MainPage/sections';
  const items = Object.values(sections);

  export default {
    name: 'Landing',
    path: '/',
    exact: true,
    components: {
      Navigation,
      Footer
    },
    data() {
      return {
        items,
        apply: true
      };
    }
  }
</script>
