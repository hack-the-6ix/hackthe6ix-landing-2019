<template>
  <div class="hello">
    <div class="section stripe">
    <h2>Thanks for partnering with us!</h2>
    <div class="row"><div class="label">Organization Name</div><input type="text" v-model="organization"></input></div>
    <div class="row"><div class="label">Contribution (CAD)</div><input type="number" v-model="amount"></input></div>
    <div id="card-element"></div>
    <button v-on:click="submit">Submit</button>
    <div class="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
var stripe = Stripe('pk_test_c5bz0oMMi9yQsxdDmJ0rdA24') 
var elements = stripe.elements()
var card = elements.create('card')
export default {
  name: 'hello',
  data () {
    return {
        organization: "",
        amount: "",
        message: ""
    }
  },
  mounted: function() {
    card.mount('#card-element')
  },
  methods: {
    submit: function() {
      let message = this.message
      let organization = this.organization
      let amount = this.amount
      const http = this.$http
      if(this.organization && this.amount){
        stripe.createToken(card).then(function(result) {
          if (result.error) {
            message = result.error.message;
          } else {
            let self = this
            let data = { org: organization, amount: amount, token: result.token }
            http.post('https://ht6.lyninx.com/sponsor', data).then(res => {
              console.log(res)
              console.log(this)
             self.message = "Thank you! We're processing your payment, and will be in touch with you shortly."
            }, err => {
              console.log('error!')
              console.log(err)
              self.message = "Sorry, we've encountered an error. Please try again."
            });
          }
        });
      } else {
        message = "Please fill in all fields."
      }
    }
  }

}
</script>

<style scoped>
.message {
  padding:12px 0;
  font-size:16px;
}
p {
  padding:0 8px;
}
#card-element {
    margin-bottom:12px;
    background:#fff;
    padding:8px;
}
.stripe {
    max-width:500px;
}
.intro {
  background:#fff;
  line-height:1.5;
}
button {
  margin:auto;
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
</style>
