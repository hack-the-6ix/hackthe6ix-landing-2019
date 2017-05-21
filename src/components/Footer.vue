<template>
  <div class="footer">
    <div class="section">
      <div>
        &copy; HackThe6ix 2017
      </div>
      <div class="links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="https://github.com/lyninx/hackthe6ix">GitHub</a>
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
  padding:24px;
  color:#ddd;
  display:flex;
  justify-content: space-between;
}

.links {
  display:flex;
}

.links a {
  color:#ddd;
  margin-left:12px;
  text-decoration: none;
}
.links a:hover {
  color:#fff;
}
</style>
