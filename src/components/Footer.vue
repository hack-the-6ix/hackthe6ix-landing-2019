<template>
  <div class="footer">
    <div class="section">
      <div class="logo">
        <img src="../assets/logo.svg" height="40px">
      </div>
      <div class="flex">
        <div>
          &copy; HackThe6ix 2017
          <div class="gh"><a href="https://github.com/lyninx/hackthe6ix" alt="GitHub">GitHub</a></div>
        </div>
        <div class="links">
          <a href="https://twitter.com/hackthe6ix" alt="Twitter">Twitter</a>
          <a href="https://www.instagram.com/hackthe6ix/" alt="Instagram">Instagram</a>
          <a href="https://www.facebook.com/HackThe6ix/" alt="Facebook">Facebook</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  },

}
</script>

<style scoped>
.footer {
  background: #222;
  min-height:100px;
}
.section {
  color:#aaa;
  display:flex;
}

.links {
  display:flex;
}
.flex {
  display:flex;
  flex-grow:1;
  justify-content: space-between;
}
.logo {
  padding:0 24px;
  flex-shrink:1;
}
.links a {
  color:#ddd;
  margin-left:12px;
  text-decoration: none;
}
.links a:hover {
  color:#fff;
}
.gh {
  margin-top:4px;
  text-decoration:none;
  color:#555;
}
.gh a{
  text-decoration:none;
  font-weight:bold;
}
.gh a:hover {
  color:#eee;
}
</style>
