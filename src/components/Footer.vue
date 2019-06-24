<template>
  <Container block='footer' as='footer'>
    <router-link class='footer__top' to='#'>
      <icon icon='arrow-up'/> Back to Top
    </router-link>
    <div class='footer__content'>
      <Logo class='footer__logo'/>
      <div class='footer__section footer__section--nav'>
        <h2 class='footer__heading'>Navigation</h2>
        <ul class='footer__nav'>
          <router-link
            tag='li'
            role='link'
            class='footer__item'
            active-class='footer__item--active'
            v-for='item in items'
            :to='item.path'
            :key='item.path'
          >{{
            item.displayName || item.name
          }}</router-link>
          <li>
            <Button class='footer__button' :click='apply'>Apply Now</Button>
          </li>
        </ul>
      </div>
      <div class='footer__section footer__section--contact'>
        <h2 class='footer__heading'>Contact Us</h2>
        <h3 class='footer__label'>Email us</h3>
        <a :href='email'>{{ email }}</a>
        
        <h3 class='footer__label'>Follow us on social media</h3>
        <ul class='footer__media'>
          <li v-for='media in social_media' v-bind:key='media.icon'>
            <a :href='media.url' class='footer__media-item'>
              <icon class='footer__icon' :icon='["fab", media.icon]'/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class='footer__content footer__content--foot'>
      <p class='footer__text'>
        Copyright © 2019 <strong>Hack The 6ix</strong> | Made with <icon icon='heart'/> in Toronto
      </p>
      <div class='footer__legal'>
        <a href='https://hackthe6ix.com/privacy'>Privacy Policy</a> | <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</a>
      </div>
    </div>
  </Container>
</template>

<script>
  import { Container, Button } from '.';
  import { social_media, email } from '@data';
  import { Logo } from '@assets';

  export default {
    name: 'Footer',
    components: {
      Container,
      Button,
      Logo
    },
    data() {
      return {
        social_media,
        email
      }
    },
    methods: {
      apply() {
        this.$router.push('/register');
      }
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>


<style lang='scss'>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .footer {
    background-color: #efefef;
    position: relative;

    &__container {
      @include flex(column);
    }
    
    &__top {
      padding: 15px 0 20px;
      text-decoration: none;
      color: #5d5d5d;
      font-weight: bold;
      margin-left: auto;
      
      &:hover {
        color: map-get($PRIMARY, TEAL);
      }
    }

    &__content {
      @include flex;
      flex-wrap: wrap;

      &--foot {
        align-items: center;
        padding: 30px 0 5px;
      }
    }

    &__section {
      &--nav {
        padding-right: 60px;
        margin-bottom: 20px;
      }
    }

    &__logo {
      width: 60px;
      opacity: 0.2;
      filter: grayscale(100%);
      margin-right: 60px;
    }

    &__heading {
      margin: 0;
    }

    &__nav {
      @include flex;
      flex-wrap: wrap;
      max-width: 400px;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      @include transition(color);
      width: 50%;
      cursor: pointer;
      color: #5d5d5d;
      margin-top: 10px;

      &:hover {
        color: map-get($PRIMARY, TEAL);
      }
    }

    &__label {
      font-size: 1rem;
      margin: 10px 0 -2px;
    }

    &__media {
      @include flex(flex-start, center);
      list-style-type: none;
      font-size: 1.4rem;
      padding: 0;
      margin: 2px 0 0;

      &-item {
        @include transition(color);
        cursor: pointer;
        color: #5d5d5d;
        margin-right: 10px;

        &:hover {
          color: map-get($PRIMARY, TEAL);
        }
      }
    }

    &__legal {
      margin-left: auto;
    }

    &__button {
      margin-top: 15px;
      padding: 8px 20px;
    }
  }

  @include media(TABLET) {
    .footer {
      &__logo {
        @include position(absolute, 60px auto auto);
      }

      &__legal, &__text {
        width: 100%;
        text-align: center;
      }

      &__legal {
        margin: auto;
        margin-top: -10px;
        padding-bottom: 20px;
      }
    }
  }

  @include media(PHONE) {
    .footer {

      &__section--nav {
        padding: 0;
      }
    }
  }
</style>
