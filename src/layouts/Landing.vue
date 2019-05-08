<template>
  <div id='app'>
    <Navigation :items='items'/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import { Navigation, Footer } from '@components';
  import * as sections from '@pages/Landing/MainPage/sections';
  const items = Object.values(sections).map(
    ({ name, path }) => ({ name, path })
  );

  export default {
    name: 'Landing',
    path: '/',
    components: {
      Navigation,
      Footer
    },
    data() {
      return { items };
    }
  }
</script>
