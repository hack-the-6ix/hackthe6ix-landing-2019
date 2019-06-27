<template>
  <Container id='contact' block='contact' as='section' :class='{ "contact--show": animate }'>
    <h1 class='contact__title'>Contact</h1>
    <p class='contact__text contact__text--bold'>When and where is Hack the 6ix in 2019?</p>
    <p class='contact__text'>Hack the 6ix 2019 will be held at {{ venue }} in downtown Toronto from August 23-25, 2019.</p>
    <Button class='contact__button' icon='envelope' :click='contact'>Contact Us</Button>
  </Container>
</template>

<script>
  import { Container, Button } from '@components';
  import { email, venue } from '@data';
  import { scroll } from '@utils';

  export default {
    name: 'Contact',
    displayName: 'Contact Us',
    path: '#contact',
    components: {
      Container,
      Button
    },
    data() {
      return {
        venue,
        animate: false
      };
    },
    mounted() {
      scroll.add(this);
    },
    beforeDestroy() {
      scroll.remove(this);
    },
    methods: {
      contact() {
        window.open('mailto:' + email);
      }
    }
  }
</script>


<style lang='scss'>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .contact {
    padding-bottom: 60px;

    &__title {
      font-size: 3.4rem;
      margin-bottom: 0;
    }

    &__text {
      margin: 5px 0;
      font-size: 1rem;
      &--bold {
        color: map-get($PRIMARY, TEAL);
        font-weight: bold;
        font-size: 1.3rem;
      }
    }

    &__button {
      padding: 12px 26px;
      font-weight: bold;
      margin-top: 20px;
    }
  }

  .contact {
    &__container {
      opacity: 0;
    }

    &--show & {
      &__container {
        @include transition(opacity, PAGE);
        opacity: 1;
      }
    }
  }

  @include media(PHONE) {
    .contact {
      &__title {
        font-size: 2.4rem;
      }
    }
  }
</style>
