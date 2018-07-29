<template>
	<div id="admin">
		<div class="wrap">
		<h1 class="title">Admin</h1>
		<div class="auth" v-show="!authenticated">
		<input type="text" v-model="password" placeholder="PASSWORD"/>
		<div class="btn" v-on:click="auth()">AUTHENTICATE</div>
		</div>
		<div class="message"><h4>{{message}}</h4></div>
    <admin-dashboard v-show="authenticated" :applicants="applicants"></admin-dashboard>
		<div class="applicants">
			<applicant v-for="applicant in applicants" :applicant="applicant" v-bind:key="applicant.id"></applicant>
		</div>
		</div>
	</div>
</template>
<script>
import Applicant from './Applicant'
import AdminDashboard from './AdminDashboard'
export default {
  name: 'admin',
  components: {
  	Applicant,
    AdminDashboard
  },
  data () {
    return {
    	password: '',
    	authenticated: false,
    	message: '',
    	applicants: [],
      session: window.sessionStorage
    }
  },
  methods: {
  	auth() {
  		this.authenticated = true
      this.session.setItem('ht6-token', this.password)
  		this.fetch()
  	},
  	fetch() {
  		this.$http.get('https://ht6.lyninx.com/applicants?password='+this.password).then(res => {
  			if(res.body.success){
  				this.applicants = res.body.applicants
  			} else {
  			    this.message = res.body.msg
            this.authenticated = false
            sessionStorage.removeItem('ht6-token')
  			}
  		});
  	}
  },
  created() {
    let password = this.session.getItem('ht6-token')
    if(password) {
      this.password = password
      this.auth()
    }
  },
  watch: {
    applicants: {
      handler: function() {
        console.log('applicants update!>!')
      },
      deep: true
    }
  }
}	
</script>
<style scoped>
#admin {
	color:#eee;
  background:#111;
}
.title {
  color:#fff;
  margin-top:40px;
}
.main {
  padding-top:64px;
/*  background:#273355;*/
}
.stats {
  font-size:20px;
  margin-bottom:20px;
}

.auth {
	display:inline-block;
	padding:20px;
	background: rgba(0,0,0,0.2);
}
.section {
  max-width: 900px;
  padding:20px;
  margin:auto;
}
.wrap {
  max-width:1024px;
  margin:auto;
  margin-bottom:0;
  padding:20px;
}
.row {
  display:flex;
  margin-bottom:8px;
}
.row .label {
  min-width:200px;
}
.row input {
  padding:6px;
  border:0;
  flex-grow:1;
}
.section {
  margin: auto;
  text-align:left;
  color:#fff;
}
.card {
  border:1px solid #fff;
  border-radius:8px;
  background-color: rgba(17, 26, 52, 0.6);
  padding:24px 40px;
  margin-bottom:24px;
  line-height:140%;
  overflow:hidden;
}
.btn {
  background: #E3493B;
  border-radius:12px;
  padding:4px 10px;
  color:#fff;
  display:inline-block;
  cursor:pointer;
}
p {
  margin-bottom:24px;
}
a {
  color:#555;
}
a:hover {
  color:#000;
  cursor:pointer;
}

/* transitions */
.fade-enter-active, .fade-leave-active {
  transition: all .4s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
