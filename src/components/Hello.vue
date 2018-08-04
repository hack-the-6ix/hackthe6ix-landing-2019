<template>
  <div class="hello">
      <!-- <email></email> -->
      <div class="hero-image">
        <div class="hero-wrap">
          <div class="hero-logo"><img class="anim" src="../assets/logo.png" height="280px"></div>
          <h1 class="ht6">HACK THE 6IX</h1>
          <h2 class="red">Presented by <img src="../assets/stdlib.png" alt="stdlib" class="stdlib-small"/></h2>
          <h2>August 24-26, 2018</h2>
          <h2>TopHat HQ</h2>
          <countdown></countdown>
          <!-- <router-link to="/apply"><div class="btn apply">APPLY</div></router-link> -->
          <div class="apps-closed">Applications are now closed!</div>
        </div>

        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,100 0, 100" style="fill:#23b5af"/>
        </svg>
      </div>

      <about></about>
      <FAQ></FAQ>
      <sponsors></sponsors>
      <contact></contact>
      <hr>
      <foot></foot>
  </div>
</template>

<script>
// import Email from './Email'
import About from './About'
import FAQ from './FAQ'
import Sponsors from './Sponsors'
import Countdown from './Countdown'
import Contact from './Contact'
import Foot from './Footer'
export default {
  name: 'hello',
  components: {
    // Email,
    About,
    FAQ,
    Sponsors,
    Countdown,
    Contact,
    Foot
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>

@keyframes float-in {
  from {
    opacity: 0;
    transform: translateY(-60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-wrap {
  position: absolute;
  right: 10%;
  bottom: 100px;
}
h1 {
  margin-bottom:0;
}
h3 {
  margin-top:0;
  color:rgba(255,255,255,0.7);
}
h2 {
  margin-bottom:8px;
}
.red {
  color: #E3493B;
}
.apps-closed {
  color: rgb(35, 181, 175);
  font-weight:bold;
}
hr {
  border:1px solid rgba(0,0,0,0.05);
}
p {
  padding:0 8px;
}
a {
  color:#fff;
  text-decoration:none;
}
svg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 30vw;
}
.ht6 { 
  color:#2d2f30;
}
.apply {
  font-size:30px;
  border-radius:36px;
  padding:12px 24px;
  font-weight:bold;
  transition: 0.1s ease-in-out;
}
.apply:hover {
  transform: scale(1.1);
  background:rgba(227, 73, 59, 0.9);
}
.btn.large {
  font-size:28px;
  font-weight:bold;
  border-radius:50px;
  padding:8px 32px;
  box-shadow: 8px 12px 6px 0 rgba(0, 0, 0, 0.3);
  transition:all 0.15s ease-in-out;
}
.stdlib-small {
  width:100px;
  margin:0 2px;
  transform:translateY(3px);
}
.btn.large:hover {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 2px 10px 12px 0 rgba(0, 0, 0, 0.3);
}
hr {
  color: #ccc;
  border-style: solid;
  width: 100%;
  /* margin-bottom: 50px; */
}
@media screen and (max-width: 580px){
  .hero-wrap {
    position: static;
  }
  .hero-logo {
    padding-top: 50px;
  }
  .hero-logo img {
    height: 200px;
  }
  .wrap {
    margin-top: 2em;
  }
  h2 {
    font-size: 18px;
  }
  .cloud2, .cloud3 {
    display:none;
  }
}
</style>
