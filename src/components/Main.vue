<template>
  <div id="app">
    <header-section></header-section>

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
  script: [
    { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDDqavkK_L1ve3S9V3bBR0AfT8KXUqJAIw&callback=initMap', async: true, body: true},
  ],
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
  position: relative;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
  position: relative;
  text-align: center;
  background-color: #fff;
}
.section {
  max-width: 1200px;
  padding:20px;
  margin:auto;
}
.hero-image {
  background-image: url(../assets/city.png);
  background-repeat: no-repeat;
  background-position: center -120px top -60px;
  background-size: cover;
  height:1024px;
  width:100%;
  position: relative;
}
.anim {
  animation: float-in 1s cubic-bezier(0.25, 0.7, 0.5, 1) forwards;
}
.top-level {
  z-index:10;
}
.hero-wrap {
  position: absolute;
  right: 10%;
  bottom: 100px;
}
h1 {
  color: #47A2A9;
  font-size:35px;
  font-weight:bold;
  margin-bottom:0;
}
h2 {
  color: #47A2A9;
  margin-bottom:24px;
  margin-top: 5px;
}
.card {
  padding-right: 40px;
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
  text-align: left;
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
