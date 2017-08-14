<template>
  <div class="apply">
    <div class="bg">
      <div class="wrap">
        <div class="sections">
          <div class="section">
            <div class="label">Full Name</div>
            <input type="text" v-model="name"/>
          </div>
          <div class="section">
            <div class="label">Email Address</div>
            <input type="text" v-model="email"/>
          </div>
          <div class="section">
            <div class="label">Gender</div>
            <select v-model="gender">
              <option disabled selected value></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="section">
            <div class="label">Which school do you attend?</div>
            <input type="text" v-model="school"/>
          </div>
          <div class="section">
            <div class="label">When do you plan on graduating?</div>
            <select v-model="grad_year">
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
            <select v-model="hack_count">
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
            <textarea rows="4" v-model="idea"></textarea>
          </div>
          <div class="section">
            <div class="label">Do you already have a project in mind? If so, tell us about it!</div>
            <textarea rows="4" v-model="project"></textarea>
          </div>
          <div class="section">
            <div class="label">Do you have any dietary restrictions? <br>(Leave blank if none)</div>
            <input type="text" v-model="dietary"/>
          </div>
          <div class="section">
            <div class="label">Send us your resume! (5MB max)</div>
            <input type="file" @change="setFile">
          </div>
          <div class="section center" v-show="showButton">
            <div class="btn submit" v-on:click="submit()">SUBMIT</div>
            <div class="warning">{{message}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Router from '../router/index';
export default {
  name: 'apply',
  data () {
    return {
      name: '',
      email: '',
      gender: '',
      school: '',
      grad_year: '',
      hack_count: '',
      idea: '',
      project: '',
      dietary: '',
      resume: '',
      message: '',
      showButton: true
    }
  },
  methods: {
    setFile: function (event) { this.resume = event.target.files[0] },
    submit: function() {
      const required = ['name', 'email', 'gender', 'school', 'grad_year', 'hack_count', 'idea', 'project', 'resume']
      const valid = required.every((elem, index, array) => {
        return this[elem]
      })
      if(!valid){
        this.message = 'Make sure to fill in the entire form!'
      } else {
        this.showButton = false;
        const data = new FormData();
        data.append('name', this.name);
        data.append('email', this.email);
        data.append('gender', this.gender);
        data.append('school', this.school);
        data.append('gradYear', this.grad_year);
        data.append('hackCount', this.hack_count);
        data.append('ideas', this.idea);
        data.append('interests', this.project);
        data.append('dietaryRestriction', this.dietary);
        data.append('resume', this.resume);
        this.$http.post('https://ht6.lyninx.com/submission', data).then(() => {
        Router.push('/thanks')
      }, (err) => {
        this.message = "Sorry, we've encountered an error. Please try again later."
      });
      }
      // send application
      
    }
  }
}
</script>

<style scoped>
.apply {
  background: linear-gradient(180deg, rgba(255,0,0,0), rgba(255,0,0,0), rgba(52, 136, 180, 0.7), rgba(156, 219, 232, 1), rgba(230, 253, 248, 1));
}
.bg {
  background:url(../assets/city.svg);
  background-size:100%;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-bottom:600px;
}
.warning {
  margin-top:12px;
  font-weight:bold;
  position:absolute;
  margin-top:60px;
}
.wrap {
  display:flex;
  flex-direction:column;
  align-items:center;
}
.sections {
  width:100%;
  display:flex;
  flex-direction:column;
}
.section {
  margin-bottom:12px;
  width:500px;
  max-width:600px;
  display:flex;
  flex-direction:column;
}
.section.center {
  align-items:center;
}
.label {
  line-height:140%;
  font-size:20px;
  color:#fff;
  margin-bottom:12px;
  font-weight:bold;
}
.submit {
  font-size:20px;
  font-weight:bold;
  text-align:center;
  padding: 8px 24px;
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
.btn {
  transition:all 0.15s ease-in-out;
}
.btn:hover {
  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);
  transform: translateY(-8px);
}
</style>
