<template>
  <div class="wrapper">
    <span class="signup">Sign up to be notified when applications open!</span>
    <div>
      <a href="https://goo.gl/forms/Hrk0LeDHPAwSUlPv2">
        <button class="btn">Get Notified</button>
      </a>
    </div>
<!--     <form>
      <input class="email" type="text" name="email" placeholder="Email Address">
      <button class="confirm" type="button"></button>
    </form> -->
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

button {
  padding:12px 24px;
  font-size:14px;
  border-radius:24px;
  font-weight: bold;
  margin-top:12px;
  transition:.2s ease-in-out;
}

button:hover {
  transform:translateY(-2px);
  transform:scale(1.05);
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
