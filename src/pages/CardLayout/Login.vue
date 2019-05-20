<template>
  <main class='login'>
    <Card class='login__content'>
      <form>
        <h1 class='login__title'>
          Hack The 6ix <span class='login__small'>Login / Register</span>
        </h1>
        <Input
          name='email'
          label='Email'
          placeholder='Email Address'
          type='email'
          :state='hasError(emailState)'
          :errorMsg='emailState'
          :onChange='onChange'
          :value='email'
        />
        <Input
          name='password'
          label='Password'
          placeholder='Password'
          type='password'
          :state='hasError(passwordState)'
          :errorMsg='passwordState'
          :onChange='onChange'
          :value='password'
        />
        <div>
          <Button
            class='login__button'
            icon='door-open'
            type='button'
            :loading='login_loading'
            :click='login'
          >
            Login
          </Button>
          <Button
            class='login__button'
            icon='feather-alt'
            type='button'
            :loading='register_loading'
            :click='register'
            secondary
          >
            Register
          </Button>
        </div>
      </form>
    </Card>
  </main>
</template>

<script>
  import { Card, Input, Button } from '@components';
  const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  export default {
    name: 'Login',
    path: '/login',
    components: {
      Card,
      Input,
      Button
    },
    data() {
      return {
        email: '',
        emailState: undefined,
        password: '',
        passwordState: undefined,
        login_loading: false,
        register_loading: false,
      };
    },
    methods: {
      onChange({ target }) {
        this[ target.name ] = target.value;
      },
      async validate() {
        const { email, password } = this;
        const isEmailValid = Boolean(email.match(emailValidator));
        const isPasswordValid = password.length >= 8;

        this.emailState = isEmailValid || 'Invalid Email'
        this.passwordState = isPasswordValid || 'Password must be atleast 8 characters long';
        return isEmailValid && isPasswordValid;
      },
      hasError(error) {
        return typeof(error) === 'string' ? !error : error;
      },
      async register(el) {
        el.preventDefault();
        this.register_loading = true;
        if (await this.validate()) {
          // Sudo API stuff
          window.setTimeout(() => {
            this.register_loading = false;
            alert('Registered. Please check your email for next steps.');
          }, 2000);
        } else {
          this.register_loading = false;
        }
      },
      async login(el) {
        el.preventDefault();
        this.login_loading = true;
        if (await this.validate()) {
          // Sudo API stuff
          window.setTimeout(() => {
            this.login_loading = false;
            this.$router.push('/dash/notarealuserid');
          }, 2000);
        } else {
          this.login_loading = false;
        }
      }
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .login {
    @include flex(center);
    background-color: rgba(0,0,0,0.12);
    min-height: 100vh;

    &__content {
      padding: 40px 25px 30px;
      width: 500px;
    }

    &__title {
      @include flex(column);
      margin-top: 0;
    }

    &__small {
      color: map-get($PRIMARY, TEAL);
      font-size: 1.3rem;
      margin-top: -2px;
    }

    &__button {
      font-weight: bold;
      margin-top: 12px;
      padding-left: 26px;
      padding-right: 26px;
      margin-right: 10px;
    }
  }

  @include media(PHONE) {
    .login {
      &__content {
        width: 100%;
        min-height: 100vh;
        border-radius: 0;
      }

      &__button {
        margin-right: 0;
        width: 100%;
      }
    }
  }
</style>
