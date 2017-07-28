<template>
  <div class="sponsor">
    <div class="section stripe">
    <h2>Thanks for partnering with us!</h2>
    <div class="row"><div class="label">Organization Name</div><input type="text" v-model="organization"></input></div>
    <div class="row"><div class="label">Contribution (CAD)</div><input type="number" v-model="amount"></input></div>
    <div id="card-element"></div>
    <div class="btn" v-on:click="submit">Submit</div>
    <div class="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
var stripe = Stripe('pk_test_c5bz0oMMi9yQsxdDmJ0rdA24') 
var elements = stripe.elements()
var card = elements.create('card')
export default {
  name: 'stripe',
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
      let organization = this.organization
      let amount = this.amount
      const http = this.$http
      let self = this
      if(this.organization && this.amount){
        stripe.createToken(card).then(function(result) {
          if (result.error) {
            self.message = result.error.message;
          } else {
            let data = { org: organization, amount: amount, token: result.token }
            http.post('https://ht6.lyninx.com/sponsor', data).then(res => {
              if(res.body.success){
                self.message = "Thank you! We're processing your payment, and will be in touch with you shortly."           
              } else {
                self.message = "Sorry, there was an error processing your payment."
              }
            }, err => {
              self.message = "Sorry, we've encountered an error. Please try again."
            });
          }
        });
      } else {
        self.message = "Please fill in all fields."
      }
    }
  }

}
</script>

<style scoped>
.sponsor {
  color:#fff;
}
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
</style>
