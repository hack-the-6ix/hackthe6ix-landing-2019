<template>
  <div class="hello">
    <div class="intro">
      <div class="section">
        Name: <input type="text" v-model="formName" /><br>
        Email: <input type="email" v-model="formEmail" /><br>
        Phone: <input type="text" v-model="formPhone" /><br>
        Gender: <input type="text" v-model="formGender" /><br>
        School: <input type="text" v-model="formSchool" /><br>
        Grad Year: <input type="text" v-model="formGradYear" /><br>
        Hackathon Count: <input type="text" v-model="formHackCount" /><br>
        Ideas: <input type="text" v-model="formIdeas" /><br>
        Interests: <input type="text" v-model="formInterests" /><br>
        Dietary: <input type="text" v-model="formDietary" /><br>
        Resume: <input type="file" @change="setFilename"/><br>
        <button type="button" class="btn btn-primary" v-on:click="doSubmit()">Submit</button>

      </div>
    </div>
  </div>
</template>

<script>
import Router from '../router/index';
export default {
  data () {
    return {
      formName: 'Joe Smith',
      formEmail: 'jsmith2000@gmail.com',
      formPhone: '555-555-5555',
      formGender: 'M',
      formSchool:'School Of 1337',
      formGradYear: '2019',
      formHackCount: '1',
      formIdeas: 'None',
      formInterests:'Compooters',
      formDietary:'Everything',
      formResume:''
    }
  },
          methods: {
            setFilename: function (event) { this.formResume = event.target.files[0] },
            doSubmit: function() {
              if (!this.formResume || !this.formName || !this.formEmail){alert("Please fill in all fields.");return}
var formData = new FormData();
formData.append('name', this.formName);
formData.append('email', this.formEmail);
formData.append('phone', this.formPhone);
formData.append('gender', this.formGender);
formData.append('school', this.formSchool);
formData.append('gradYear', this.formGradYear);
formData.append('hackCount', this.formHackCount);
formData.append('ideas', this.formIdeas);
formData.append('interests', this.formInterests);
formData.append('resume', this.formResume);
        this.$http.post('localhost:4000/submission', formData).then(() => {
          alert("Awesome! We'll be in touch.")
          Router.push('/')
        }, (err) => {
          alert("Sorry, we've encountered an error. Please try again later.")
        });
            }}

}
</script>

<style scoped>
hr {
  border:1px solid rgba(0,0,0,0.05);
}
p {
  padding:0 8px;
}
.intro {
  background:#fff;
  line-height:1.5;
}
</style>
