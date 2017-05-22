<template>
  <div class="header">
    <div class="overlay">
      <div class="top-leve"><h1>Hack The 6ix</h1></div>
      <div></div>
      <mailing-list></mailing-list>
      <!-- <countdown></countdown> -->
    </div>
  </div>
</template>

<script>
import Countdown from './Countdown'
import MailingList from './MailingList'

export default {
  name: 'hello',
  components: {
    Countdown,
    MailingList
  },
  data () {
    return {
    }
  },

}
</script>

<style scoped>
h1 {
	color:#fff;
	letter-spacing:1px;
}
.header {
  background: url('../assets/hero.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align:center;
}
.overlay {
	background: rgba(0,0,0,0.5);
	padding:24px 24px 48px 24px;
	min-height:400px;
	display:flex;
	flex-direction:column;
	justify-content: space-between;
}
</style>
