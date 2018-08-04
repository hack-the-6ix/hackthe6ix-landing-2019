<template>
  <div class="header">
    <div class="overlay">
      <div class="logo">
        <img src="../assets/logo.png" class="icon"/>
      </div>

      <div class="navigation">
        <router-link to="/" v-smooth-scroll>HOME</router-link>
        <router-link to="/#about" v-smooth-scroll>ABOUT</router-link>
        <router-link to="/#faq" v-smooth-scroll>FAQ</router-link>
        <router-link to="/#sponsors" v-smooth-scroll>SPONSORS</router-link>
        <router-link to="/#contact" v-smooth-scroll>CONTACT</router-link>
        <!-- <router-link to="/apply">APPLY</router-link> -->
      </div>
      <!-- <router-link to="/">

      </router-link> -->
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
  transition:all 0.2s ease-in;
  text-decoration:none;
  margin:0 25px;
}
a:hover {
  transform: translateY(-2px);
}
.navigation {
  display:flex;
  align-items:center;
  justify-content: center;
  margin: auto;
  max-width: 1028px;
}
.logo {
  display: block;
  position: absolute;
  left: 50px;
}
.icon {
  height: 25px;
  margin:0;
  transform: scale(1.4);
}
.overlay {
	background: rgba(0,0,0,0.0);
  padding: 25px;
  height: 20px;
}
.placeholder {
  width:100px;
  /* right:50px;
  top:0;
  width:10%;
  z-index:10000; */
}
@media screen and (max-width: 580px){
  a {
    font-size: 12px;
    margin: 0;
    padding: 5px;
  }
  .logo {
    display: none;
  }
  .navigation {
    justify-content: space-around;
    margin-right: 30px;
  }
}
@media (min-width: 581px) and (max-width: 768px) { 
  a {
    margin-left: 5px;
    margin-right:5px;
  }
}
</style>
