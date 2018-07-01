<template>
  <div class="about" id="about">
  	<div class="wrap">
	    <div class="section">
	      <!-- <img src="../assets/Telescope.svg" width="160px" class="svg"> -->
	      <h1>About Us</h1>
	      <div class="card">
	      	<p>Hack the 6ix is the largest hackathon taking place in the heart of downtown Toronto. Every year, developers, designers, and innovators from across the province congregate to brainstorm ideas and build creative projects. Over the course of 36 hours, teams will have access to technical and non-technical workshops, fantastic sponsors and an amazing community of tech enthusiasts.</p>

	      	<p>This year, the weekend will be packed with great sponsors, mentors, workshops, food, swag, and more! We can't wait to meet you and offer this extraordinary chance to be truly immersed in Toronto’s tech community.</p>
	      </div>
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'social',
  data () {
    return {
    }
  },

}
</script>
<style scoped>
.about {
	background:rgba(255,255,255, 0.1);
}
.svg {
	position:absolute;
	margin-left:-110px;
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
