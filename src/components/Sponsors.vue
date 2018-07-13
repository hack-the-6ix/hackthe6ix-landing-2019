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
          <img src="../assets/stdlib.png" alt="stdlib" class="stdlib-logo"/>
          <br>
          <img src="../assets/tophat_logo.png" alt="TopHat" class="tophat-logo"/>

          <div class="logos-row">
            <img src="../assets/informatica.png" alt="Informatica" class="logo"/>
            <img src="../assets/index-exchange-with-r.png" alt="INDEX EXCHANGE" class="logo"/>
            <img src="../assets/scotiabank.png" alt="Scotiabank" class="logo"/>
          </div>
          <div class="logos-row">
            <img src="../assets/deloitte.png" alt="Deloitte" class="logo"/>
            <img src="../assets/intel.png" alt="Intel" class="logo"/>
            <img src="../assets/vena-logo.png" alt="Vena" class="logo"/>
          </div>
          <div class="logos-row">
            <img src="../assets/bmo.png" alt="Bank of Montreal" class="logo-sub"/>
            <img src="../assets/balsamiq.png" alt="balsamiq" class="logo-sub"/>
            <img src="../assets/pageduty.png" alt="pageduty" class="logo-sub"/>
            <img src="../assets/loyaltyone.png" alt="LoyaltyOne" class="logo-sub"/>
          </div>
          <div class="logos-row">
            <img src="../assets/element-ai.png" alt="ELEMENT AI" class="logo-sub"/>
            <img src="../assets/nextcanada.png" alt="NEXTCANADA" class="logo-sub"/>
            <img src="../assets/wealthsimple.png" alt="Wealthsimple" class="logo-sub"/>
          </div>
          <div class="logos-row">
            <img src="../assets/indico.png" alt="indico" class="logo-sub"/>
            <img src="../assets/mlh.png" alt="MLH" class="logo-sub"/>
            <img src="../assets/teabot.png" alt="teaBOT" class="logo-sub"/>
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
  top: 0;
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
