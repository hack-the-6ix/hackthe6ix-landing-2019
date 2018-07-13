<template>
  <div class="faq" id="faq">
    <img src="../assets/cloud-1.png" class="cloud1"/>
    <img src="../assets/cloud-2.png" class="cloud2"/>
    <img src="../assets/cloud-3.png" class="cloud3"/>

    <div class="section">
        <!-- <img src="../assets/Satellite 2.svg" width="160px" class="svg"> -->
        <h1>Frequently Asked Questions</h1>
        <h2>General</h2>
    <div class="question-block">
        <div class="col">
            <div class="question">Do you really "hack" at a hackathon?</div>
            <p>No, we are not doing or encouraging illegal activities here.</p>
            <div class="question">So what is a hackathon then?</div>
            <p>A hackathon is a live-event where participants, “hackers”, spend the course of 36 hours creating, developing, designing, and pitching a software or hardware project they build from scratch. We provide all the resources and mentorship you need in order to make this happen!</p>
            <div class="question">How much does it cost to attend?</div>
            <p>Absolutely nothing! Hack the 6ix is a completely free event run by a non-profit organization. All food, resources, and accommodations for the entire event will be provided free of charge.</p>
            <div class="question">How do I get to Hack the 6ix?</div>
            <p>This year we will be hosted at Top Hat! The venue is accessible by TTC subway via Museum station.</p>
        </div>
        <div class="col">
            <div class="question">Will you be providing travel reimbursements?</div>
            <p>Unfortunately, we will not be covering travel reimbursements at this time.</p>
            <div class="question">What kind of workshops and activities will be hosted?</div>
            <p>We’ll be hosting a variety of workshops from beginner subjects, such as introduction to coding, to advanced courses, such as security penetration testing. No matter your interest, we guarantee we’ll have something for you. In addition, we have a ton of fun activities planned for you such as e-sports tournaments, nugget-eating contests, and more! Hack the 6ix is much more than just a hackathon – we make sure that it’s an event you’ll thoroughly enjoy.</p>
            <div class="question">What should I bring?</div>
            <p>Make sure to bring your laptop (or desktop if you’ve got gains) and a piece of valid student ID or government ID. You can also bring a pillow and blanket if you want to get comfy. Everything else will be provided for you!</p>
        </div>
    </div>

    <h2>Application</h2>
    <div class="question-block">
        <div class="col">
            <div class="question">Am I eligible to participate?</div>
            <p>Any post-secondary students or recent graduates are eligible to participate in our event!</p>
            <div class="question">Do I need to know how to code?</div>
            <p>Nope! Our mentors and workshops make sure that even if you’re new to coding, you’ll definitely pick up enough skills at the event to make a project. In addition, if you’re a designer or business student, your design and pitching skills are also very valuable!</p>
            <div class="question">Can I sign up with a team?</div>
            <p>We allow team sign ups of up to 4 people. All team members must sign up individually and you can specify team members on your application.</p>
        </div>
        <div class="col">
            <div class="question">What if I don’t have a team or idea?</div>
            <p>No worries, all participants will have time to find a team in weeks leading up to Hack the 6ix, and we will also have team formation activities during our event. For ideas, check out our submissions from last year for some inspiration: https://hackthe6ix17.devpost.com/</p>
            <div class="question">Can I work on my hack before the event?</div>
            <p>No. To maintain competition integrity and fairness, all work on your hack must be done at the event. All projects with prior work done will be eliminated from judging. However, you are encouraged to touch-up on your skills or bring any hardware in preparation for the event.</p>
        </div>
    </div>

    <div class="question-block">
        <div class="col">
            <div class="question">I still have questions!</div>
            <p>If you have any other questions, feel free to send us a message at <a href="hello@hackthe6ix.com">hello@hackthe6ix.com</a> or shoot us a message on Facebook here: <a href="https://www.facebook.com/HackThe6ix/">https://www.facebook.com/HackThe6ix/</a>!</p>
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
    background:#fff;
    text-align: left;
    padding-top: 50px;
    position: relative;
}
.columns {
    display:flex;
    flex-wrap:wrap;
}
h1 {
    color: #000;
    font-size: 64px;
}
h2 {
    margin-top: 20px;
    font-size: 48px;
    color: #23b5af;
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
    color:#000;
}
a:hover {
    color:#ddd;
}
.section {
    position: relative;
    z-index: 1;
}
.question-block {
    display: flex;
}
.question {
    font-weight:bold;
    margin-top:16px;
    margin-bottom:16px;
}
.card {
    padding:12px 26px;
}
.col {
  color: #3a3d3f;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 60px;
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
.cloud1 {
  position: absolute;
  top: 200px;
  left: 0;
}
.cloud2 {
  position: absolute;
  top: -70px;
  left: 0;
}
.cloud3 {
  position: absolute;
  right: 0;
  top: 50px;
}
@media screen and (max-width: 580px){
  .question-block {
    flex-direction: column;
  }
  .col {
    display: block;
    margin-right: 0;
  }
}
</style>
