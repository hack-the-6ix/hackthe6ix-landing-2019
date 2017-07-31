<template>
  <div id="app">
    <header-section></header-section>
    <transition name="fade" mode="out-in">
      <router-view class="main"></router-view>
    </transition>
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
@media screen 
  and (max-device-width: 900px){
    .space {
        display:none;
    }
    .svg {
        display:none;
    }
}

@media screen and (max-width: 900px){
    .space {
        display:none;
    }
    .svg {
        display:none;
    }
}
html, body {
  margin:0;
  padding:0;
  background:#273355;
  font-family: 'Montserrat', sans-serif;
}
body {
  overflow-y:scroll;
}
.main {
  padding-top:64px;
/*  background:#273355;*/
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
  background-image:url("./assets/stars.svg");
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  min-height:100vh;
}
.section {
  max-width: 900px;
  padding:20px;
  margin:auto;
}
.wrap {
  max-width:1024px;
  margin:auto;
  margin-bottom:0;
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
