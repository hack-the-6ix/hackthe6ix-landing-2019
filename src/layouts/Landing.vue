<template>
  <div id='app'>
    <Navigation/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

  import { Navigation, Footer } from '../components';

  export default {
    name: 'Landing',
    components: {
      Navigation,
      Footer
    }
  }
</script>
