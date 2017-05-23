<template>
  <div class="social">
    <div class="section">
      <h3>Follow Us</h3>
      <div class="items">
        <a href="https://twitter.com/hackthe6ix"><img class="icon" src="../assets/twitter.svg"></a>
        <a href="https://www.facebook.com/HackThe6ix/"><img class="icon" src="../assets/facebook.svg"></a>
        <a href="https://www.instagram.com/hackthe6ix/"><img class="icon" src="../assets/instagram.svg"></a>
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
.social {
  color:#fff;
  background: #23b5af;
  min-height:100px;
}
.section {
  text-align:center;
  color:#fff;
}
.items {
  max-width:240px;
  display:flex;
  justify-content:space-between;
  margin:auto;
}
h3 {
  margin-top:0;
  padding:8px;
  display:inline-block;
  border-bottom:2px solid rgba(255,255,255,0.5);
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
