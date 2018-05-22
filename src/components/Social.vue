<template>
  <div class="social">
    <div class="section">
      <div class="items">
        <a href="https://twitter.com/hackthe6ix"><img class="icon" src="../assets/twitter.png"></a>
        <a href="https://www.facebook.com/HackThe6ix/"><img class="icon" src="../assets/facebook.png"></a>
        <a href="https://www.instagram.com/hackthe6ix/"><img class="icon" src="../assets/instagram.png"></a>
      </div>
    </div>
    <span class="questions">Got Questions? Email us at hello@hackthe6ix.com</span>
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
@media screen and (max-width: 580px){
  .social > .questions {
    font-size: 15px;
  }
}
.social {
  color:#fff;
  min-height:100px;
  padding-bottom: 20px;
}
.section {
  text-align:center;
}
.questions {
  font-weight: bold;
  font-size: 20px;
}
.items {
  max-width:240px;
  display:flex;
  justify-content:space-between;
  margin:auto;
}
.icon {
  border-radius:30px;
  border: 3px solid #FFFFFF;
  padding: 3px;
  transition: all 0.2s ease-in-out;
}
.icon:hover {
  cursor:pointer;
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
