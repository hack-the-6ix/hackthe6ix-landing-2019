<template>
  <div class="wrapper">
    <span class="signup">Sign up to be notified when applications open!</span>
    <form>
      <input class="email" type="text" name="email" placeholder="Email Address">
      <!-- <button class="confirm" type="button"></button> -->
    </form>
  </div>
</template>

<script>
export default {
  name: 'email',
  data () {
    return {
    }
  },

}
</script>

<style scoped>
@media screen and (max-width: 580px){
  .email {
    min-width: 230px !important;
  }
}

.signup {
  color: #303030;
  margin-top: 50px;
  font-style: italic;
}

.email {
  border: 3px solid #77D3CC;
  border-radius: 20px;
  padding: 12px 20px;
  margin: 20px 0;
  min-width: 300px;
  font-size: 12px;
}

.email:focus {
  outline: none;
}

</style>
