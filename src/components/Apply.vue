<template>
  <div class="apply">
    <div class="wrap">
      <div class="sections">
        <div class="section">
          <div class="label">Full Name</div>
          <input type="text"/>
        </div>
        <div class="section">
          <div class="label">Email Address</div>
          <input type="text"/>
        </div>
        <div class="section">
          <div class="label">Gender</div>
          <select>
            <option disabled selected value></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="section">
          <div class="label">Which school do you attend?</div>
          <input type="text"/>
        </div>
        <div class="section">
          <div class="label">When do you plan on graduating?</div>
          <select>
            <option disabled selected value></option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="grad">Already Graduated</option>
            <option value="dont-know">Not Applicable</option>
          </select>
        </div>
        <div class="section">
          <div class="label">How many hackathons have you participated in?</div>
          <select>
            <option disabled selected value></option>
            <option value="0">None yet</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div class="section">
          <div class="label">Tell us about an idea you’ve always wanted to realize but couldn’t.</div>
          <textarea rows="4"></textarea>
        </div>
        <div class="section">
          <div class="label">Do you already have a project in mind? If so, tell us about it!</div>
          <textarea rows="4"></textarea>
        </div>
        <div class="section">
          <div class="label">Do you have any dietary restrictions? <br>(Leave blank if none)</div>
          <input type="text"/>
        </div>
        <div class="section">
          <div class="label">Send us your resume!</div>
          <button>{{resume_label}}</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'apply',
  data () {
    return {
      resume_label: "Click here to upload"
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
.sections {
  width:100%;
  display:flex;
  flex-direction:column;
}
.section {
  width:500px;
  max-width:600px;
  display:flex;
  flex-direction:column;
}
.label {
  line-height:140%;
  font-size:20px;
  color:#fff;
  margin-bottom:12px;
  font-weight:bold;
}
button, input, select, textarea {
  border:1px solid #fff;
  border-radius:8px;
  background-color: rgba(17, 26, 52, 0.6);
  padding:12px;
  color:#fff;
  font-size:18px;
}
button:hover {
  cursor: pointer;
}
select {
  height:47px;
}
h1 {
  font-size:40px;
  font-weight:bold;
  margin-bottom:0;
}
h2 {

}
hr {
  border:1px solid rgba(0,0,0,0.05);
}
p {
  padding:0 8px;
}
a {
  color:#fff;
  text-decoration:none;
}
</style>
