<template>
  <div id="app">
    <!-- <header-section></header-section> -->
    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>
    <social></social>
    <a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/na-2018/events" target="_blank"><img src="../assets/MLH White 2018.svg" alt="Major League Hacking 2018 Hackathon Season" style="width:100%" class="mCS_img_loaded"></a>
  </div>
</template>

<script>
import Social from './Social'

export default {
  components: {
    Social
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
    ]
  },
  name: 'app'
}
</script>

<style>
html, body {
  margin:0;
  padding:0;
  background:#FFFFFF;
  font-family: 'Montserrat', sans-serif;
}
body {
  overflow-y:scroll;
}
.main {

  /* padding-top:64px; */
/*  background:#273355;*/
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  text-align: center;

  background-image: url("../assets/city.svg");
  background-repeat: no-repeat;
  background-position: center bottom -200px;
  background-size: cover;
  height: 100vh;
}
.section {
  max-width: 900px;
  padding:20px;
  margin:auto;
}
.wrap {
  max-width:1024px;
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
.section {
  margin: auto;
  text-align:left;
  color:#fff;
}
.card {
  border:1px solid #fff;
  border-radius:8px;
  background-color: rgba(17, 26, 52, 0.6);
  padding:24px 40px;
  margin-bottom:24px;
  line-height:140%;
  overflow:hidden;
}
.btn {
  background: #E3493B;
  border:0;
  border-radius:12px;
  padding:4px 10px;
  color:#fff;
  display:inline-block;
  cursor:pointer;
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

/* transitions */
.fade-enter-active, .fade-leave-active {
  transition: all .4s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
