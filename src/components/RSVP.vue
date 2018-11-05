<template>
	<div id="status">
		<div class="wrap">
			<div class="sections">
				<div class="section">
					<input type="text" v-model="email" placeholder="Email"/>
					<div class="btn" v-on:click="send">Submit</div>
				</div>
				<div class="section center">
					{{warning}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Router from '../router/index';
export default {
  name: 'status',
  data () {
    return {
    	email: '',
    	warning: ''
    }
  },
  created(){

  },
  methods: {
  	send() {
  		return this.$http.get('https://ht6.lyninx.com/applicant_id/' + this.email).then((result)=>{
  			console.log(result)
  			Router.push('/status/'+ result.data.id)
		}, ()=>{
			this.warning = "There was an error fetching your information. Are you sure you applied using that email?"
			console.warn('There was an error fetching your information. Are you sure you applied using that email?')
		})
  	}
  }
}	
</script>
<style scoped>
	input {
		margin-bottom:12px;
	}
	.btn {
		max-width:100px;
	}
	.wrap {
		background:#caf0ee;
		color:#111;
		margin: auto;
		padding:20px;
		border-radius:12px;
	}
	.attendee-links {
		margin-top:12px;
	}
	.name {
		color:#E3493B;
	}
	.status {
		display:inline-block;
		text-transform: capitalize;
	}
	.sections {
	  width:100%;
	  display:flex;
	  flex-direction:column;
	}
	.card {
		margin:0;
		padding:16px 32px;
	}
	.section.liability {
		flex-direction: row; 
	}
	.liability-text {
		font-size:18px;
		margin-left:10px;
	}
	.section {
	  padding:12px 0;
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
	  padding:12px;
	  color:#000;
	  font-size:18px;
	}
	select {
	  height:47px;
	}
	a {
		padding:0;
		text-decoration: none;
		color:#E3493B;
	}
/*	a.mailto {
		color:#23b5af;
	}*/
	a.attendee {
		color:#23b5af;		
	}
	.btn {
	  transition:all 0.15s ease-in-out;
	}
	.btn:hover {
	  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);
	  transform: translateY(-8px);
	}
</style>