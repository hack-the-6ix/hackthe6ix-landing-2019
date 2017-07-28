<template>
  <div class="not-found">
    <div class="wrap">
    <h1>Error 404: Not Found</h1>
    <h4>Sorry! That page doesn't exist.</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'not-found',
  data () {
    return {
    }
  },

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
