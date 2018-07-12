<template>
  <div class="about" id="about">
  	<div class="wrap">
	    <div class="section">
	      <!-- <img src="../assets/Telescope.svg" width="160px" class="svg"> -->
	      <h1>About</h1>
        <div class="items">
          <div class="card">
            <p>Hack the 6ix is Toronto’s largest summer hackathon. Every year, we bring together 400 of the best and brightest hackers from across North America for 36 hours of coding, binging, and jam-packed fun.</p>
  
            <p>We’ll provide you with all the resources, mentorship, and food to do your thing; all you need to bring is your creativity and ideas. Hack the 6ix is also a gathering of some of the top companies in North America. Whether you’re looking for start-up or corporate opportunities, come ready to flex your networking game! Hack the 6ix is open to hackers of all levels: no matter if you’re a beginner or veteran, it’s a weekend not to miss!</p>
          </div>
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
.card {
  max-width:800px;
}
h1 {
  color: #fff;
  text-align: left;
  font-size: 64px;
}
p {
  color: #fff;
}
.about {
	background: #23b5af;
}
/* .svg {
	position:absolute;
	margin-left:-110px;
	margin-top:40px;
} */
.items {
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
