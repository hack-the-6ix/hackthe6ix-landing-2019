<template>
  <div class="thanks">
    <div class="wrap">
    <h1>Thanks for applying!</h1>
    <p>We'll be in touch with you shortly after applications close to let you know if you're in.</p>
    <p>In the mean time, be sure to follow our Facebook, Twitter, and Instagram pages for updates and announcments!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thanks',
  data () {
    return {
    }
  }

}
</script>

<style scoped>
.wrap {
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:20px auto;
}

h1 {
  font-size:40px;
  font-weight:bold;
  margin-bottom:0;
}
hr {
  border:1px solid rgba(0,0,0,0.05);
}
p {
  padding:0 8px;
}
a {
  color:#fff;
  text-decoration:none;
}
</style>
