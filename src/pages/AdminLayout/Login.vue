<template>
	<div id="admin-login">
		<h1 class="title">Login</h1>
    <div class="login card">
      <!-- <div class="notice">
        This page is meant for Hack the 6ix staff only. All personal information is strictly for internal use.
      </div> -->
      <div class="form">
        <Input      
          name="user"
          placeholder="email@hackthe6ix.com"
          label="Username"
          v-model="user"/>
        <Input      
          name="password"
          placeholder="password123"
          label="Password"
          type="password"
          v-model="pass"/>
        <Button :click="login" :loading="loading">Login</Button>
        <div class="error">
          {{message}}
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import {Button, Input} from '@components'
import {query, auth} from '@utils';
import {AUTH_ADMIN} from '@graphql';
export default {
  name: 'admin-login',
  path: '/login',
  components: {
    Button,
    Input
  },
  data () {
    return {
      loading: false,
      user: null,
      pass: null,
      message: '',
    }
  },
  methods: {
    async login() {
      try {
        if(this.user && this.pass) {
          this.loading = true
          await query(AUTH_ADMIN, { email: this.user, password: this.pass}).then((result) => {
            this.loading = false
            if(result.access_scopes.includes('admin')) {
              auth.set_user(result)
              this.$router.push('/admin')
            } else {
              this.message = "Unauthorized."
            }
          })
        } else {
          this.message = "Both Username and Password are required."
        }
      } catch(err) {
        this.loading = false
        this.message = err.message
        console.warn(err.message)
      }
    }
  },
  async created() {

  },
}	
</script>
<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.login {
  max-width: 500px;
  color: #000;
}
.error {
  margin-top: 12px;
  color: map-get($STATE, ERROR);
  font-weight: bold;
}
</style>