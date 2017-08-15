<template>
  <div class="liability">
    <div class="wrap">
    <h1>Liability Waiver</h1>
    <p>I, participating in Hack the 6ix 2017, release Hack the 6ix Entrepreneurs Association from all liability relating to injuries that may occur during the hackathon. I agree to hold Hack the 6ix Entrepreneurs Association entirely free from any liability, including financial responsibility for injuries incurred and damages to personal property, regardless of whether injuries are caused by negligence.</p>
    <p>I acknowledge the risks involved in attending an overnight event. These include but are not limited to theft or personal property and personal injuries. I swear that I am participating voluntarily, and that all risks have been made clear to me. Additionally, I do not have any conditions that will increase my likelihood of experiencing injuries while engaging in this activity.</p>
    <p>By agreeing to this document I forfeit all right to bring a suit against Hack the 6ix Entrepreneurs Association for any reason. I will also make every effort to obey safety precautions as listed in writing and as explained to me verbally. I will ask for clarification when needed. I agree that I may be expelled from the conference at any time for exhibiting behaviour deemed to be dangerous to other people at the event.</p>
    <p>I also give permission to Hack the 6ix Entrepreneurs Association to use my likeness in photographs and videos obtained during the event for their promotional materials.</p>
    <p>This document was last updated on August 14, 2017.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'liability',
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
h3 {
  margin:4px;
}
hr {
  border:1px solid rgba(0,0,0,0.05);
}
p {
  line-height:140%;
  padding:0 8px;
}
a {
  color:#fff;
  text-decoration:none;
}
</style>
