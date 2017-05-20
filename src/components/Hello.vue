<template>
  <div class="hello">
    <div class="main">
      <h1>Hack The 6ix</h1>
      <countdown></countdown>
    </div>
  </div>
</template>

<script>
import Countdown from './Countdown'
export default {
  components: {
    Countdown
  },
  name: 'hello',
  data () {
    return {
    }
  },

}
</script>

<style scoped>
h1 {
  font-weight: normal;
  color: #1abc9c;
}
.main {
  max-width:1020px;
  margin:auto;
}
</style>
