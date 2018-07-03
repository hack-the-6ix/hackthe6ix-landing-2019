<template>
  <div class="sponsors" id="sponsors">
  	<div class="wrap">
	    <div class="section">
	      <!-- <img src="../assets/Moon 2.svg" width="160px" class="svg"> -->
	      <h1>Sponsors</h1>
	      <div class="card">
          <!-- <h2>Coming soon!</h2> -->
          <div class="logos">
            <div class="stdlib-logo logo"></div>
          </div>
	      </div>
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
.sponsors {
  background-color: #23b5af;
}
h1 {
  color: #fff;;
  font-size: 64px;
}
.logos {
  /* display:flex;
  flex-wrap:wrap;
  justify-content: space-between; */
}
.altera-logo {
  background-image: url(../assets/altera.png);
  width:240px;
}
.shopify-logo {
  background-image: url(../assets/Shopify.svg);
}
.stdlib-logo {
  background-image: url(../assets/stdlib.png);
  width: 500px;
}
.nextcan-logo {
  background-image: url(../assets/stdlib.png);
}
.logo {
  min-width:200px;
  height:60px;
  background-size:cover;
  background-repeat: no-repeat;
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
</style>
