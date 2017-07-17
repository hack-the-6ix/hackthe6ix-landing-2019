<template>
  <div id="app">
    <header-section></header-section>
    <router-view></router-view>
    <social-section></social-section>
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from './components/Header'
import SocialSection from './components/Social'
import FooterSection from './components/Footer'
export default {
  components: {
    HeaderSection,
    SocialSection,
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
  padding:20px;
  margin:auto;
}

.row {
  display:flex;
  margin-bottom:8px;
}
.row .label {
  min-width:200px;
}
.row input {
  padding:6px;
  border:0;
  flex-grow:1;
}
p {
  margin-bottom:24px;
}
a {
  color:#555;
}
a:hover {
  color:#000;
  cursor:pointer;
}
</style>
