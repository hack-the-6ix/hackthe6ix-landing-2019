<template>
  <div class="hello">
    <div class="wrap">
      <div class="cloud">
        <img src="../assets/cloud1.svg" width="500px" class="cloud1">
        <img src="../assets/cloud2.svg" width="400px" class="cloud2">
        <img src="../assets/cloud3.svg" width="200px" class="cloud3">
        <img src="../assets/cloud4.svg" width="120px" class="cloud4">
        <!-- <img src="../assets/Mars.svg" width="110px" class="mars">
        <img src="../assets/Rocket.svg" width="150px" class="rocket">
        <img src="../assets/UFO.svg" width="110px" class="ufo">
        <img src="../assets/Uranus.svg" width="80px" class="uranus">
        <img src="../assets/Satellite.svg" width="110px" class="satellite"> -->
      </div>
      <div class="top-level"><img class="anim" src="../assets/logo-solid.svg" height="240px"></div>
      <h1>HACK THE 6IX</h1>
      <h2>TopHat, Toronto &nbsp;&nbsp; August 24-26th, 2018</h2>
      <!-- <router-link to="/apply"><div class="btn large">APPLY</div></router-link> -->
<!--       <a href="https://hackthe6ixvolunteers.typeform.com/to/o6Nptv"><div class="btn large volunteer">VOLUNTEER</div></a> -->
<!--       <countdown></countdown> -->

    </div>
    <email></email>
    <!-- <about></about>
    <FAQ></FAQ>
    <sponsors></sponsors> -->
  </div>
</template>

<script>
// import Countdown from './Countdown'
// import About from './About'
// import FAQ from './FAQ'
// import Sponsors from './Sponsors'
import Email from './Email'
export default {
  name: 'hello',
  components: {
    // Countdown,
    // About,
    // FAQ,
    // Sponsors
    Email
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

.anim {
  animation: float-in 1s cubic-bezier(0.25, 0.7, 0.5, 1) forwards;
}

.top-level {
  z-index:10;
}
.wrap {
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5em;
  margin-bottom:0;
}
.cloud {
  z-index:0;
  width:100%;
  max-width:1024px;
  margin:auto;
  position:absolute;
}
.cloud img {
  position:absolute;
}
.cloud1 {
  top:150px;
  left:-300px;
}
.cloud2 {
  top: 100px;
  right: -20px;
}
.cloud3 {
  right:-200px;
  top:40px;
}
.cloud4 {
  left:250px;
  top:20px;
}

h1 {
  color: #47A2A9;
  font-size:40px;
  font-weight:bold;
  margin-bottom:0;
}
h2 {
  color: #77D3CC;
  margin-bottom:24px;
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
