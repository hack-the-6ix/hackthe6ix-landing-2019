<template>
  <div class="footer">
    <div class="section">
      <div class="flex">
        <div>
          <div class="ht6">&copy; HackThe6ix 2017</div><br>
        </div>
        <div class="links">
          <a href="mailto:hello@hackthe6ix.com" alt="Email">Email</a>
          <a href="https://github.com/lyninx/hackthe6ix" alt="GitHub">GitHub</a>
          <router-link to="/privacy">Privacy Policy</router-link>
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
  background: #232e4d;
  min-height:100px;
}
.section {
  color:#aaa;
  display:flex;
}
.ht6 {
  border-bottom:2px solid rgba(255,255,255, 0.2);
  padding-bottom:8px;
}
.links {
  display:flex;
}
.flex {
  color:rgba(255,255,255, 0.2);
  font-weight:bold;
  display:flex;
  flex-grow:1;
  justify-content: space-between;
}
.logo {
  padding:0 24px;
  flex-shrink:1;
}
.links a {
  color:rgba(255,255,255, 0.2);
  margin-left:12px;
  text-decoration: none;
}
.links a:hover {
  color:#fff;
}
</style>
