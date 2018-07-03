<template>
  <div class="header">
    <div class="overlay">
      <div class="logo">
        <img src="../assets/logo.png" class="icon"/>
      </div>
      <div class="nav">
        <div class="navigation">
          <router-link to="/" v-smooth-scroll>HOME</router-link>
          <router-link to="/#about" v-smooth-scroll>ABOUT</router-link>
          <router-link to="/#faq" v-smooth-scroll>FAQ</router-link>
          <router-link to="/#sponsors" v-smooth-scroll>SPONSORS</router-link>
<!--           <router-link to="#contact">CONTACT</router-link> -->
          <router-link to="/apply"><div class="btn teal">APPLY</div></router-link>
        </div>
      </div>
      <router-link to="/">

      </router-link>
<!--       <countdown></countdown> -->
    </div>
  </div>
</template>

<script>
import Countdown from './Countdown'
import MailingList from './MailingList'

export default {
  components: {
    Countdown,
    MailingList
  },
  data () {
    return {
    }
  },

}
</script>

<style scoped>

.header {
  color: #23b5af;
  width:100%;
  text-align:center;
  background:#fff;
  font-weight:600;
}
a {
  color: #23b5af;
  transition:all 0.1s ease-in;
}
a:hover {
  transform: translateY(-2px);
}
.nav {
  display:flex;
  max-width:1024px;
  margin:auto;
  justify-content: flex-end;
}
.navigation {
  display:flex;
  align-items:center;
}
.icon {
  height:32px;
  margin:0;
  transform: scale(1.4);
}
.navigation a {
  text-decoration:none;
  margin:0 25px;
}
.navigation a:hover {
  transition:all 0.2s ease-in-out;
}
.logo {
    display: block;
    position: fixed;
    left: 50px;
}
.overlay {
	background: rgba(0,0,0,0.0);
  padding:20px;
	height:20px;
  margin-bottom:10px;
}
</style>
