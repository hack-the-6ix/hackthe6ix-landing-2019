<template>
  <Container id='contact' block='contact' as='section'>
    <h1 class='contact__title'>Contact</h1>
    <p class='contact__text contact__text--bold'>When and where is Hack the 6ix in 2019?</p>
    <p class='contact__text'>Hack the 6ix 2019 will be held at VENUE TBD (ADDRESS) in downtown Toronto from August 23-25, 2019.</p>
    <Button class='contact__button' icon='envelope' :click='contact'>Contact Us</Button>
  </Container>
</template>

<script>
  import { Container, Button } from '@components';

  export default {
    name: 'Contact',
    displayName: 'Contact Us',
    path: '#contact',
    components: {
      Container,
      Button
    },
    methods: {
      contact() {
        window.open('mailto:hello@hackthe6ix.com');
      }
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .contact {
    &__title {
      font-size: 3.4rem;
      margin-bottom: 0;
    }

    &__text {
      margin: 5px 0;
      font-size: 1.05rem;
      &--bold {
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

  @include media(PHONE) {
    .contact {
      &__title {
        font-size: 2.4rem;
      }
    }
  }
</style>
