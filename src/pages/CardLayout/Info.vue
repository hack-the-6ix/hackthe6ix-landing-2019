<template>
  <main class='info'>
    <Card class='info__content'>
      <h1 class='info__title'>Edit Personal Information</h1>
      <div class='info__buttons'>
        <Button icon='save' :click='save' :loading='loading' class='info__button'>Save</Button>
        <Button icon='arrow-left' path='/' :click='navigate' class='info__button' secondary>Back</Button>
      </div>
      <section class='info__section'>
        <h2 class='info__subtitle'>Basic Information</h2>
        <Input
          name='password'
          label='Change Password'
          placeholder='New password'
        />
        <Input
          name='confirm'
          label='Confirm Password'
          placeholder='Confirm new password'
        />
        <Button class='info__button info__button--pw'>Change Password</Button>
      </section>
      <section class='info__section'>
        <h2 class='info__subtitle'>Additional Information</h2>
        <Input
          name='github'
          label='Github Link'
          placeholder='Show the world your creations!'
        />
        <Input
          name='linkedin'
          label='LinkedIn Link'
          placeholder='Show the world your accomplishments!'
        />
        <Input
          name='personal'
          label='Personal Website'
          placeholder='Show the world what you got!'
        />
      </section>
    </Card>
  </main>
</template>

<script>
  import { Card, Button, Input } from '@components';

  export default {
    name: 'Info',
    path: '/dash/:user?/info',
    components: {
      Card,
      Button,
      Input
    },
    data() {
      return {
        loading: false,
        user: {
        }
      };
    },
    methods: {
      navigate({ target }) {
        const path = target.getAttribute('path');
        this.$router.push(`/dash/${ this.$route.params.user }${ path }`);
      },
      async save() {
        this.loading = true;
        window.setTimeout(() => {
          this.loading = false;
          alert('User information updated');
        }, 2000);
      }
    },
    async mounted() {
      // Fetch info
    },
    destroyed() {
      this._destroyed = true;
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .info {
    @include flex(center, flex-start);
    background-color: rgba(0,0,0,0.12);
    box-sizing: border-box;
    padding: 100px 0 40px;
    min-height: 100vh;

    &__content {
      overflow: hidden;
      width: 80%;
      margin: auto;
      max-width: 700px;
      padding: 30px 25px 15px;
    }

    &__button {
      font-weight: bold;
      margin-top: 12px;
      padding-left: 30px;
      padding-right: 30px;
      margin-right: 12px;

      &--pw {
        margin: 0;
      }
    }

    &__buttons {
      margin-bottom: -10px;
    }

    &__section {
      margin-top: 50px;
    }

    &__title {
      margin: 0;
    }

    &__subtitle {
      color: map-get($PRIMARY, TEAL);
      font-size: 1.55rem;
    }
  }

  @include media(PHONE) {
    .info {
      padding: 0;

      &__content {
        width: 100%;
        min-height: 100vh;
        border-radius: 0;
      }
    }
  }
</style>
