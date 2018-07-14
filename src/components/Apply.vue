<template>
  <div class="apply">
    <div class="bg">
      <div class="wrap">
        <div class="sections">
          <div class="section">
            <div class="label">What should we call you?</div>
            <input class="margin-bottom" type="text" placeholder="First Name" v-model="name"/>
            <input type="text" placeholder="Last Name" v-model="lname"/>
          </div>
          <div class="section">
            <div class="label">Which email can we reach you at?</div>
            <input type="text" placeholder="Email" v-model="email"/>
          </div>
          <div class="section">
            <div class="label">What is your phone number?</div>
            <input type="text" placeholder="Phone Number" v-model="phone"/>
          </div>
          <div class="section">
            <div class="label">When is your birthday?</div>
            <input type="text" placeholder="MM-DD-YYYY" v-model="birthday"/>
          </div>
          <div class="section">
            <div class="label">Which gender do you identify as?</div>
            <select v-model="gender">
              <option disabled selected value></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="n/a">Prefer Not to Answer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="section">
            <div class="label">What is your race / ethnicity?</div>
              <select v-model="ethnicity">
                <option disabled selected value></option>
                <option value="american-native">American Indian or Alaskan Native</option>
                <option value="asian">Asian / Pacific Islander</option>
                <option value="black">Black or African American</option>
                <option value="hispanic">Hispanic</option>
                <option value="white">White / Caucasian</option>
                <option value="multiple">Multiple Ethnicities / Other”</option>
                <option value="n/a">Prefer Not to Answer</option>
              </select>
          </div>
          <div class="section">
            <div class="label">Which school do you attend?</div>
            <input type="text" placeholder="School" v-model="school"/>
          </div>
          <div class="section">
            <div class="label">Which program are you in?</div>
            <input type="text" placeholder="Program / Major" v-model="program"/>
          </div>
          <div class="section">
            <div class="label">What is your most current level of study?</div>
            <select v-model="current_year">
              <option disabled selected value></option>
              <option value="highschool">High school</option>
              <option value="undergrad">Undergraduate</option>
              <option value="grad">Graduated</option>
              <option value="n/a">Not Applicable</option>
            </select>
          </div>
          <div class="section">
            <div class="label">When do you plan on graduating?</div>
            <select v-model="grad_year">
              <option disabled selected value></option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="grad">Already Graduated</option>
              <option value="n/a">Not Applicable</option>
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
            <div class="label">Describe a past project that you're passionate about.</div>
            <textarea rows="4" v-model="project"></textarea>
          </div>
          <div class="section">
            <div class="label">Please link your website, GitHub, or anything else you would like us to check out.</div>
            <input type="text" placeholder="Portfolio / Projects"  v-model="links"/>
          </div>
          <div class="section">
            <div class="label">Please list the names of other applicants if you have already formed a team. (optional)</div>
            <input type="text" placeholder="Team mates"  v-model="team"/>
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
      lname: '',
      email: '',
      phone: '',
      gender: '',
      birthday: '',
      program: '',
      ethnicity: '',
      school: '',
      grad_year: '',
      current_year: '',
      team: '',
      links: '',
      hack_count: '',
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
      const required = [
      'name',
      'lname', 
      'email', 
      'phone',
      'gender', 
      'birthday',
      'program',
      'ethnicity',
      'school', 
      'grad_year',
      'current_year',
      'hack_count', 
      'project',
      'dietary',
      'resume']
      const valid = required.every((elem, index, array) => {
        return this[elem]
      })
      if(!valid){
        this.message = 'Please make sure to fill in the entire form!'
      } else {
        this.showButton = false
        const data = new FormData()
        data.append('event_key', 'ht6-summer-2018')
        data.append('name', this.name)
        data.append('lname', this.lname)
        data.append('email', this.email)
        data.append('phone', this.phone)
        data.append('gender', this.gender)
        data.append('birthday', this.birthday)
        data.append('ethnicity', this.ethnicity)
        data.append('program', this.program)
        data.append('school', this.school)
        data.append('grad_year', this.grad_year)
        data.append('current_year', this.current_year)
        data.append('hack_count', this.hack_count)
        data.append('project', this.project)
        data.append('team', this.team)
        data.append('links', this.links)
        data.append('dietary', this.dietary)
        data.append('resume', this.resume)
        this.$http.post('https://ht6.lyninx.com/submission', data).then((res) => {
          if(res.body.success) {
            Router.push('/thanks')
          } else {
            this.showButton = true
            this.message = res.body.msg
          }
          
        }, (err) => {
          this.showButton = true
          this.message = "Sorry, we've encountered an error. Please try again later."
        })
      }
      // send application
      
    }
  }
}
</script>

<style scoped>
.apply {
  background: #caf0ee;
}
.margin-bottom {
  margin-bottom:12px;
}
.bg {
/*  background:url(../assets/city.svg);*/
/*  background-size:100%;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-bottom:600px;*/
}
.warning {
  color: #E3493B;
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
  padding:40px 0;
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
  text-align:left;
  line-height:140%;
  font-size:16px;
  color:#000;
  margin-bottom:12px;
}
.submit {
  font-size:20px;
  font-weight:bold;
  text-align:center;
  padding: 8px 24px;
}
button, input, select, textarea {
  border:2px solid #fff;
  border-radius:8px;
  background-color: rgba(255, 255, 255, 1.0);
  padding:12px;
  color:#000;
  font-size:18px;
}
.highlight {
  border:2px solid #E3493B;
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
/*  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);*/
  transform: scale(1.1);
}
</style>
