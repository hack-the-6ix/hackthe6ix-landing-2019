<template>
  <div class="contact section" id="contact">
    <div class="text">
      <h1>Contact Us</h1>

      <h2>When and where is Hack the 6ix 2018?</h2> 
      <p>Hack the 6ix 2018 will be held at TopHat HQ in downtown Toronto from August 24-26, 2018.</p>
    
      <button type="button" class="contact-button">CONTACT US</button>
    </div>
    <div class="map">
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
    }
  },

}
</script>

<style>
.contact {
  text-align: left;
  display: flex;
}
h1 {
  color: #000;
  font-size: 64px;
  margin-top: 100px;
  margin-bottom: 50px;
}
h2 {
  color: #000;
  font-weight:bold;
    font-size: 20px;
}
p {
  color: #000;
  margin-top: 40px;
  margin-bottom: 40px;
}
.contact-button {
  background-color: #23b5af;
  border: none;
  border-radius: 5px;
  padding: 15px 25px 15px 25px;
  font-size: 15px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  color: #fff;
}
.map {
  width: 500px;
  height: 500px;
}
</style>