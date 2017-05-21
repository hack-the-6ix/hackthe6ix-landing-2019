<template>
  <div id="app">
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from './components/Header'
import FooterSection from './components/Footer'
export default {
  components: {
    HeaderSection,
    FooterSection
  },
  name: 'app'
}
</script>

<style>
html, body {
  margin:0;
  padding:0;
  background:#efefef;
  font-family: 'Montserrat', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
.section {
  color:#333;
  max-width: 820px;
  margin:auto;
}
p {
  margin-bottom:24px;
}
a {
  color:#555;
}
a:hover {
  color:#000;
}
</style>
