<template>
  <main class='user'>
    <Card class='user__content'>
      <img class='user__image' width='300' height='300' :src='user.image'/>
      <div class='user__footer'>
        <h1 class='user__name'>{{ user.firstname }} {{ user.lastname }}</h1>
        <p class='user__role'>Hacker</p>
        <div class='user__buttons'>
          <div class='user__buttons-row'>
            <Button path='/apply' :click='navigate' class='user__button user__button--col'>Edit Application</Button>
            <Button path='/edit' :click='navigate' class='user__button user__button--col'>Edit Info</Button>
          </div>
          <div class='user__divider'/>
          <Button :click='logout' class='user__button user__button--logout' secondary>Logout</Button>
        </div>
      </div>
    </Card>
  </main>
</template>

<script>
  import { Card, Button } from '@components';

  export default {
    name: 'User',
    path: '/dash/:user?',
    components: {
      Card,
      Button
    },
    data() {
      return {
        user: {
          image: 'https://steamuserimages-a.akamaihd.net/ugc/102852399388817485/D8DA2E6ABE1B8CD7A9B2EA849FBA0C5CB99CE2B9/',
          firstname: 'Firstname',
          lastname: 'Lastname'
        }
      };
    },
    methods: {
      navigate({ target }) {
        const path = target.getAttribute('path');
        this.$router.push(`/dash/${ this.$route.params.user }${ path }`);
      },
      logout() {
        this.$router.push(`/login`);
      }
    },
    async mounted() {
      const id = this.$route.params.user;
      if (!id) {
        this.$router.push('/login');
      }
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

  .user {
    @include flex(center);
    background-color: rgba(0,0,0,0.12);
    height: 100vh;

    &__content {
      @include flex(center);
      overflow: hidden;
      height: 350px;
      padding: 0;
    }

    &__image {
      width: auto;
      height: 100%;
    }

    &__footer {
      padding: 25px;
      box-sizing: border-box;
      width: 400px;
    }

    &__name {
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__role {
      margin: 0;
      font-size: 1.2rem;
      color: map-get($PRIMARY, TEAL);
    }

    &__buttons {
      @include flex(column);
      margin-top: 30px;

      &-row {
        @include flex;
        margin: 0 -5px;
      }
    }

    &__button {
      font-weight: bold;
      margin-top: 12px;
      padding-left: 30px;
      padding-right: 30px;

      &--col {
        flex-grow: 1;
        flex: 1;
        margin: 0 5px;
        min-width: 1px;
      }
    }

    &__divider {
      width: 40%;
      display: none;
      margin: 20px auto 8px;
      height: 2px;
      background-color: map-get($PRIMARY, TEAL); 
    }
  }

  @include media(TABLET) {
    .user {
      &__content {
        flex-direction: column;
        height: auto;
        max-width: 400px;
      }

      &__footer {
        width: 100%;
      }

      &__image {
        width: 100%;
        height: auto;
      }
    }
  }

  @include media(PHONE) {
    .user {
      &__content {
        max-width: 100%;
        justify-content: flex-start;
        width: 100%;
        min-height: 100%;
        border-radius: 0;
      }

      &__buttons-row {
        flex-direction: column;
      }

      &__button--col {
        margin-top: 10px;
      }

      &__divider {
        display: block;
      }
    }
  }
</style>
