<template>
  <div class="section">
    <div class="footer">
      <div>
        <div class="ht6">&copy; HackThe6ix 2018</div>
      </div>
      <router-link to="/privacy">Privacy Policy</router-link>
      <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
      <div class="links">
        <a href="https://www.facebook.com/HackThe6ix/" alt="Facebook">
          <img src="../assets/facebook.svg" class="social-icon"/>
        </a>
        <a href="https://twitter.com/HackThe6ix" alt="Twitter">
          <img src="../assets/twitter.svg" class="social-icon"/>
        </a>
        <a href="https://www.instagram.com/hackthe6ix/" alt="Instagram">
          <img src="../assets/instagram.svg" class="social-icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
    }
  },

}
</script>

<style>
.footer {
  background:#fff;
  display: flex;
  color: #000;
  flex-grow:1;
  justify-content: space-between;
  align-items: center;
}
.ht6 {
/*  border-bottom:2px solid rgba(255,255,255, 0.2);*/
  padding-bottom:8px;
}
.links {
  display:flex;
}
a {
  padding-left: 20px;
  padding-right: 20px;
}
.social-icon {
  width: 30px;
  height: 30px;
}
@media screen and (max-width: 580px){
  a {
    padding-left: 10px;
    padding-right: 10px;
  } 
}
</style>
