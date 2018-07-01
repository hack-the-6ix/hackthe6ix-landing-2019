<template>
  <div id="app">
    <header-section></header-section>
    <div class="hero"></div>
    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>
<!--     <social></social> -->
    <a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=gray" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-gray.svg" alt="Major League Hacking 2019 Hackathon Season" style="width:100%"></a>
    
  </div>
</template>

<script>
import Social from './Social'
import HeaderSection from './Header'
export default {
  components: {
    Social,
    HeaderSection
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  name: 'app'
}
</script>

<style>
html, body {
  margin:0;
  padding:0;
  background:#eee;
  font-family: 'Nunito Sans', sans-serif;
}
body {
  overflow-y:scroll;
  overflow-x:hidden;
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
  position: relative;
  text-align: center;
}
.section {
  max-width: 900px;
  padding:20px;
  margin:auto;
}
.hero {
  background-image: url(../assets/city.png);
  background-repeat: no-repeat;
  background-position: center top -60px;
  background-size: 1440px 1024px;
  height:1024px;
  width:100%;
  max-width:1440px;
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
.btn.teal {
  background: #23b5af;
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
