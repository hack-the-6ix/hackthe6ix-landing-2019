<template>
  <div class="sponsors" id="sponsors">
    <img src="../assets/trees.png" class="trees"/>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="0,0 100,0 0, 100" style="fill:white"/>
    </svg>

  	<div class="wrap">
	    <div class="section">
	      <!-- <img src="../assets/Moon 2.svg" width="160px" class="svg"> -->
	      <h1>Sponsors</h1>
	      <div class="card">
          <a href="https://stdlib.com/" target="_blank">
            <img src="../assets/svg/stdlib.svg" alt="stdlib" class="stdlib-logo"/>
          </a>
          <br>
          <a href="https://tophat.com/" target="_blank">
            <img src="../assets/svg/tophat.svg" alt="TopHat" class="tophat-logo"/>
          </a>

          <div class="logos-row">
            <a href="https://www.informatica.com/ca/" target="_blank">
              <img src="../assets/svg/informatica.svg" alt="Informatica" class="logo"/>
            </a>
            <a href="http://www.indexexchange.com/" target="_blank">
              <img src="../assets/index-exchange-with-r.png" alt="INDEX EXCHANGE" class="logo"/>
            </a>
            <a href="https://www.scotiabank.com/" target="_blank">
              <img src="../assets/svg/scotiabank.svg" alt="Scotiabank" class="logo"/>
            </a>
          </div>
          <div class="logos-row">
            <a href="https://www2.deloitte.com/ca/en.html" target="_blank">
              <img src="../assets/svg/deloitte.svg" alt="Deloitte" class="logo"/>
            </a>
            <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank">
              <img src="../assets/svg/intel.svg" alt="Intel" class="logo"/>
            </a>
            <a href="https://venasolutions.com/" target="_blank">
              <img src="../assets/svg/vena.svg" alt="Vena" class="logo"/>
            </a>
            <a href="https://digitalboundary.net/" target="_blank">
              <img src="../assets/svg/dbg.svg" alt="Digital Boundary Group" class="logo"/>
            </a>
          </div>
          <div class="logos-row">
            <a href="https://www.bmo.com/main/personal" target="_blank">
              <img src="../assets/svg/bmo.svg" alt="Bank of Montreal" class="logo-sub"/>
            </a>
            <a href="https://balsamiq.com/" target="_blank">
              <img src="../assets/svg/balsamiq.svg" alt="balsamiq" class="logo-sub"/>
            </a>
            <a href="https://www.pagerduty.com/" target="_blank">
              <img src="../assets/svg/pagerduty.svg" alt="pageduty" class="logo-sub"/>
            </a>
            <a href="https://www.loyalty.com/" target="_blank">
              <img src="../assets/svg/loyalty-one.svg" alt="LoyaltyOne" class="logo-sub"/>
            </a>
            <a href="http://www.rotman.utoronto.ca/Degrees/MastersPrograms/MMA" target="_blank">
              <img src="../assets/svg/rotman.svg" alt="Rotman" class="logo-sub"/>
            </a>
          </div>
          <div class="logos-row">
            <a href="https://www.elementai.com/" target="_blank">
              <img src="../assets/svg/element-ai.svg" alt="ELEMENT AI" class="logo-sub"/>
            </a>
            <a href="https://www.nextcanada.com/" target="_blank">
              <img src="../assets/svg/next-canada.svg" alt="NEXTCANADA" class="logo-sub"/>
            </a>
            <a href="https://www.wealthsimple.com/en-ca/" target="_blank">
              <img src="../assets/svg/wealthsimple.svg" alt="Wealthsimple" class="logo-sub"/>
            </a>
            <a href="https://www.github.com/" target="_blank">
              <img src="../assets/svg/github.svg" alt="GitHub" class="logo-sub"/>
            </a>
          </div>
          <div class="logos-row">
            <a href="https://indico.io/" target="_blank">
              <img src="../assets/indico.png" alt="indico" class="logo-sub"/>
            </a>
            <a href="https://hackp.ac/mlh-stickermule-hackathons" target="_blank">
              <img src="../assets/svg/stickermule.svg" alt="StickerMule" class="logo-sub"/>
            </a>
            <a href="https://mlh.io/" target="_blank">
              <img src="../assets/svg/mlh.svg" alt="MLH" class="logo-sub"/>
            </a>
            <a href="https://teabot.com/" target="_blank">
              <img src="../assets/svg/teabot.svg" alt="teaBOT" class="logo-sub"/>
            </a>
            <a href="https://www.pepsico.ca/" target="_blank">
              <img src="../assets/svg/pepsico.svg" alt="pepsico" class="logo-sub"/>
            </a>
          </div>
	      </div>

        <!-- <hr>
        <h2>Interested in being a sponsor?</h2>
        <button type="button" class="sponsor-button">BECOME A SPONSOR</button> -->
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sponsors',
  data () {
    return {
    }
  },

}
</script>
<style scoped>
/*.st1 {
  fill:#d8292f;
}
.st0 {
  fill:#fff;
}*/
svg {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 30vw;
}
.section {
  padding-bottom: 150px;
}
.sponsors {
  background-color: #23b5af;
  position: relative;
}
h1 {
  color: #fff;
  font-size: 64px;
  text-align: right;
  padding-top: 150px;
}
h2 {
  color: #fff;
  font-size: 32px;;
}
hr {
  border-style: solid;
  width: 500px;
  margin-bottom: 50px;
}
.card {
  padding-top: 250px;
}
.logos-row {
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
  margin-bottom: 70px;
}
.stdlib-logo {
  width: 500px;
}
.tophat-logo {
  margin-top: 100px;
  width:500px;
}
.logo {
  height: 60px;
}
.logo-sub {
  height: 30px;
}
.sponsor-button {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px 25px 15px 25px;
  font-size: 15px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
}
.svg {
	position:absolute;
	margin-left:-120px;
	margin-top:40px;
}
.items {
  max-width:240px;
  display:flex;
  justify-content:space-between;
  margin:auto;
}
.icon {
  border-radius:50px;
  width:40px;
  height:40px;
  transition: all 0.2s ease-in-out;
}
.icon:hover {
  cursor:pointer;
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.trees {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
@media screen and (max-width: 580px){
  .card {
    padding-top: 100px;
    padding-right: 0;
  }
  .stdlib-logo {
    width: 300px;
  }
  .tophat-logo {
    margin-top: 60px;
    width: 300px;
  }
  .logos-row {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
  .logo, .logo-sub {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
