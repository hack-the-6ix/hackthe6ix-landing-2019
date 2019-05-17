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
          :onChange='onChange'
          :value='email'
        />
        <Input
          name='password'
          label='Password'
          placeholder='Password'
          type='password'
          :onChange='onChange'
          :value='password'
        />
        <div>
          <Button
            class='login__button'
            type='button'
            :loading='login_loading'
            :click='login'
          >
            <icon icon='door-open' class='login__icon'/>Login
          </Button>
          <Button
            class='login__button'
            type='button'
            :loading='register_loading'
            :click='register'
            secondary
          >
            <icon icon='feather-alt' class='login__icon'/>Register
          </Button>
        </div>
      </form>
    </Card>
  </main>
</template>

<script>
  import { Card, Input, Button } from '@components';

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
        password: '',
        login_loading: false,
        register_loading: false,
      };
    },
    methods: {
      onChange({ target }) {
        this[ target.name ] = target.value;
      },
      async register(el) {
        el.preventDefault();
        this.register_loading = true;
        // Sudo API stuff
        window.setTimeout(() => {
          this.register_loading = false;
          alert('Registered. Please check your email for next steps.');
        }, 2000);
      },
      async login(el) {
        el.preventDefault();
        this.login_loading = true;
        // Sudo API stuff
        window.setTimeout(() => {
          this.login_loading = false;
          this.$router.push('/dash');
        }, 2000);
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
    height: 100vh;

    &__content {
      border-radius: 6px;
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
      padding-left: 30px;
      padding-right: 30px;
      margin-right: 10px;
    }

    &__icon {
      margin-right: 8px;
    }
  }
</style>
