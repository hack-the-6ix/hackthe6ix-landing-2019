<template>
  <div class="hello">
      <!-- <email></email> -->
      <div class="hero-image">
        <div class="hero-wrap">
          <div class="top-level"><img class="anim" src="../assets/logo.png" height="280px"></div>
          <h1 class="ht6">HACK THE 6IX</h1>
          <h2>August 24-26, 2018</h2>
          <h2>TopHat HQ</h2>
          <countdown></countdown>
        </div>
      </div>
      <about></about>
      <FAQ></FAQ>
      <sponsors></sponsors>
  </div>
</template>

<script>
// import Email from './Email'
import About from './About'
import FAQ from './FAQ'
import Sponsors from './Sponsors'
import Countdown from './Countdown'
export default {
  name: 'hello',
  components: {
    // Email,
    About,
    FAQ,
    Sponsors,
    Countdown
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

@media screen and (max-width: 580px){
  .top-level img {
    height: 150px;
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
h3 {
  margin-top:0;
  color:rgba(255,255,255,0.7);
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
.ht6 { 
  color:#2d2f30;
}
.btn.large {
  font-size:28px;
  font-weight:bold;
  border-radius:50px;
  padding:8px 32px;
  box-shadow: 8px 12px 6px 0 rgba(0, 0, 0, 0.3);
  transition:all 0.15s ease-in-out;
}
.btn.large:hover {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 2px 10px 12px 0 rgba(0, 0, 0, 0.3);
}
</style>
