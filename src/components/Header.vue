<template>
  <div class="header">
    <div class="overlay">
      <div class="nav">
        <div class="social-media">
          <a href="https://twitter.com/hackthe6ix"><img class="icon" src="../assets/twitter.svg"></a>
          <a href="https://www.facebook.com/HackThe6ix/"><img class="icon" src="../assets/facebook.svg"></a>
          <a href="https://www.instagram.com/hackthe6ix/"><img class="icon" src="../assets/instagram.svg"></a>
        </div>
        <div class="navigation">
          <router-link to="/">ABOUT</router-link>
          <router-link to="/">FAQ</router-link>
          <router-link to="/">SPONSORS</router-link>
          <router-link to="/">CONTACT</router-link>
          <router-link to="/"><div class="btn">APPLY</div></router-link>
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
  color:#fff;
  position:absolute;
  width:100%;
  text-align:center;
}
a {
  color:#fff;
  transition:all 0.1s ease-in;
}
a:hover {
  transform: translateY(-2px);
}
.nav {
  display:flex;
  max-width:1024px;
  margin:auto;
  align-items:center;
  justify-content: space-between;
}
.navigation {
  display:flex;
  align-items:center;
}
.icon {
  height:20px;
  margin:0 8px;
  transform: scale(1.2);
}
.navigation a {
  font-weight:bold;
  text-decoration:none;
  margin:0 16px;
}
.navigation a:hover {
  transition:all 0.2s ease-in-out;
}
.social-media{
  display:flex;
}
.overlay {
	background: rgba(0,0,0,0.0);
	padding:20px;
	height:20px;
}
</style>
