<template>
  <div class="section">
    <div class="footer">
      <div>
        <div class="ht6">&copy; HackThe6ix 2018</div><br>
      </div>
      <div class="links">
        <a href="https://www.facebook.com/HackThe6ix/" alt="Facebook">
          <img src="../assets/facebook.png"/>
        </a>
        <a href="https://twitter.com/HackThe6ix" alt="Twitter">
          <img src="../assets/twitter.png"/>
        </a>
        <a href="https://www.instagram.com/hackthe6ix/" alt="Instagram">
          <img src="../assets/instagram.png"/>
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
}
.ht6 {
/*  border-bottom:2px solid rgba(255,255,255, 0.2);*/
  padding-bottom:8px;
}
.links {
  display:flex;
}
</style>
