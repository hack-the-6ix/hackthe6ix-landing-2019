<template>
  <div class="contact section" id="contact">
    <div class="text">
      <h1>Contact Us</h1>

      <h2>When and where is Hack the 6ix 2018?</h2> 
      <p>Hack the 6ix 2018 will be held at TopHat HQ in downtown Toronto from August 24-26, 2018.</p>
    
      <button type="button" class="contact-button">CONTACT US</button>
    </div>
    <div class="map" id="map">

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
  methods: {
    initMap() {
      // The location of Uluru
      var uluru = {lat: -25.344, lng: 131.036};
      // The map, centered at Uluru
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 4, center: uluru});
      // The marker, positioned at Uluru
      var marker = new google.maps.Marker({position: uluru, map: map});
    }
  },
  created() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDDqavkK_L1ve3S9V3bBR0AfT8KXUqJAIw')
    document.head.appendChild(recaptchaScript)
  }
  
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