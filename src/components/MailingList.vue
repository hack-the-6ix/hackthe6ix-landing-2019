<template>
  <div class="mailinglist">
    <div class="info">
      Sign up for our mailing list to get updates about the event!
    </div>
    <div class="wrap">
      <input v-model="email" type="text" placeholder="Enter Your Email" @keyup.enter="submit"></input>
      <button v-on:click="submit">Sign Up</button>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="message && valid" class="message" key="valid">
        {{message}}
      </div>
      <div v-if="message && !valid" class="message invalid" key="invalid">
        {{message}}
      </div>
    </transition>
  </div>
</template>

<script>
import validator from 'validator'
export default {
  name: 'mailinglist',
  created() {
    
  },
  data () {
    return {
      email: '',
      message: '',
      valid: true
    }
  },
  methods: {
    submit: function () {
      if(validator.isEmail(this.email)) {
        this.$http.post('http://ht6.lyninx.com/subscriber', {email: this.email }).then(() => {
          this.valid = true
          this.message = "Awesome! We'll be in touch."
        }, () => {
          this.valid = false
          this.message = "Sorry, we've encountered an error. Please try again later."
        });
        this.email = ''
        setTimeout(() => { this.message = '' }, 5000)
      } else {
        this.valid = false
        this.message = "Please enter a valid email."
      }
    }
  }
}
</script>

<style scoped>
.mailinglist {

}
.info {
  color:#eee;
  padding:12px;
}
.message {
  margin-left: auto;
  margin-right: auto;
  left:0;
  right:0;
  position:absolute;
  text-align:center;
  padding:12px;
  font-weight:bold;
  color:#fff;
}

.message.invalid {
  color:#e3493b;
}
.wrap {
  max-width:400px;
  margin:auto;
  display:flex;
  box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.6);
}

input {
  margin:0;
  border:0;
  padding:12px;
  flex-grow:1;
}
button {
  background:#a9ddd9;
  font-weight:bold;
  border:0;
  padding:12px 20px;
}
button:hover {
  background:#23b5af;
  cursor:pointer;
  transition: all 0.2s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0
}
</style>
