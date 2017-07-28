<template>
  <div class="sponsors" id="sponsors">
  	<div class="wrap">
	    <div class="section">
	      <img src="../assets/Moon 2.svg" width="160px" class="svg">
	      <h1>Sponsors</h1>
	      <div class="card">
	      	None! <br><br><br><br><br><br><br><br>
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
.sponsors {
	background:rgba(255,255,255, 0.1);
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
