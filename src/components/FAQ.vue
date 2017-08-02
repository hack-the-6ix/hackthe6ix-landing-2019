<template>
  <div class="faq" id="faq">
    <div class="wrap">
        <div class="section">
          <img src="../assets/Satellite 2.svg" width="160px" class="svg">
          <h1>FAQ</h1>
          <div class="card">
            <div class="columns">
                <div class="col">
                    <h3>General</h3>
                    <div class="question">Who can attend?</div>
                    <p>Any undergraduates, graduate students, or recent grads, as well as high school students are able to attend. Though we have preference towards those with previous experience with tech, we welcome applicants with all backgrounds.</p>
                    <div class="question">Are you accepting walk-ins?</div>
                    <p>Due to the limited capacity of the venue, we will not take walk-ins. However, if there are no-shows, we will be sending more acceptances the day of, so please keep an eye on your inbox.</p>
                    <div class="question">How much does this cost?</div>
                    <p>That’s the best part—everything’s free!</p>

                </div>
                <div class="col">
                    <h3>Logistics</h3>
                    <div class="question">What should I bring?</div>
                    <p>Please bring your student identification card, laptop, chargers, and ideas! Bringing a sleeping bag, extra clothes, toiletries and deodorant are encouraged.</p>
                    <div class="question">What should I not bring?</div>
                    <p>Please do not bring alcohol, drugs, or weapons of any kind.</p>
                    <div class="question">Will there be travel reimbursements?</div>
                    <p>Unfortunately, we will not be providing travel reimbursements.</p>
                    <div class="question">Will there be parking available?</div>
                    <p>As with most other buildings downtown, the venue does not have parking spaces. However, we do encourage you to take public transit! </p>
                </div>
                <div class="col">
                    <h3>Hacking</h3>
                    <div class="question">What if I don't have a team or idea?</div>
                    <p>Before hacking begins, we will be providing a set time for hackers to mingle and find teammates before settling down. In addition, brainstorming with those teammates about ideas might prove to be more efficient than coming up with one solo.</p>
                    <div class="question">Will there be hardware available?</div>
                    <p>Unfortunately, we will not have hardware available for this year's event.</p>
                    <div class="question">Is your question not here?</div>
                    <p>Email us at <a href="mailto:hello@hackthe6ix.com">hello@hackthe6ix.com</a> or message us on our Facebook page. We will be happy to answer your questions!</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sfaq',
  data () {
    return {
    }
  },

}
</script>
<style scoped>
.faq {
    background:rgba(255,255,255, 0.0);
}
.columns {
    display:flex;
    flex-wrap:wrap;
}
h3 {
    margin:0;
    font-weight:bold;
/*  color:#E3493B;*/
    color:#23b5af;
}
p {
    margin:0;
    font-size:14px;
}
a {
    color:#fff;
}
a:hover {
    color:#ddd;
}
.question {
    font-weight:bold;
    margin-top:12px;
    margin-bottom:12px;
}
.card {
      padding:12px 26px;
}
.col {
    flex-grow:1;
    flex-basis:0;
    padding:12px;
}
.svg {
    position:absolute;
    margin-top:10px;
    margin-left:840px;
}
.items {
  max-width:240px;
  display:flex;
  justify-content:space-between;
  margin:auto;
}
.icon {
  border-radius:50px;
  width:40px;
  height:40px;
  transition: all 0.2s ease-in-out;
}
.icon:hover {
  cursor:pointer;
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
</style>
