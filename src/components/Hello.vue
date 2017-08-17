<template>
  <div class="hello">
    <div class="wrap">
      <div class="space">
        <img src="../assets/Moon.svg" width="160px" class="moon">
        <img src="../assets/Constellation.svg" width="160px" class="constellation">
        <img src="../assets/Comet.svg" width="160px" class="comet">
        <img src="../assets/Jupiter.svg" width="160px" class="jupiter">
        <img src="../assets/Mars.svg" width="110px" class="mars">
        <img src="../assets/Rocket.svg" width="150px" class="rocket">
        <img src="../assets/UFO.svg" width="110px" class="ufo">
        <img src="../assets/Uranus.svg" width="80px" class="uranus">
        <img src="../assets/Satellite.svg" width="110px" class="satellite">
      </div>
      <div class="top-level"><img class="anim" src="../assets/logo-solid.svg" height="240px"></div>
      <h1>HACK THE 6IX</h1>
      <h2>August 26-27, 2017</h2>
      <h3>Centre for Social Innovation - Annex</h3>
      <!-- <router-link to="/apply"><div class="btn large">APPLY</div></router-link> -->
      <a href="https://hackthe6ixvolunteers.typeform.com/to/o6Nptv"><div class="btn large volunteer">VOLUNTEER</div></a>
      <countdown></countdown>
      <img src="../assets/Earth.svg" height="480px">
    </div>
    <about></about>
    <FAQ></FAQ>
    <sponsors></sponsors>
  </div>
</template>

<script>
import Countdown from './Countdown'
import About from './About'
import FAQ from './FAQ'
import Sponsors from './Sponsors'
export default {
  name: 'hello',
  components: {
    Countdown,
    About,
    FAQ,
    Sponsors
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
  margin:20px auto;
}
.space {
  z-index:0;
  width:100%;
  max-width:1024px;
  margin:auto;
  position:absolute;
}
.space img {
  position:absolute;
}
.volunteer {
  margin-top:20px;
  background:#23b5af;;
}
.constellation {
  left:0;
  left:220px;
}
.moon {
  top:10px;
  left:0;
}
.comet {
  right:0;
  right:200px;
}
.jupiter {
  right:0;
  top:40px;
}
.mars {
  left:10px;
  top:400px;
}
.rocket {
  left:170px;
  top:220px;
}
.ufo {
  right:180px;
  top:320px;
}
.uranus {
  right:20px;
  top:220px;
}
.satellite {
  right:10px;
  top:500px;
}
h1 {
  font-size:40px;
  font-weight:bold;
  margin-bottom:0;
}
h2 {
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
