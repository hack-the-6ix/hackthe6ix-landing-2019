<template>
  <Container block='nav' as='nav'>
    <Logo class='nav__logo'/>
    <ul class='nav__items'>
      <router-link
        tag='li'
        class='nav__item'
        active-class='nav__item--active'
        v-for='item in items'
        :to='item.path'
        :key='item.path'
      >{{
        item.name
      }}</router-link>
    </ul>
  </Container>
</template>

<script>
  import { Container } from '.';
  import { Logo } from '@assets';

  export default {
    name: 'Navigation',
    components: {
      Container,
      Logo
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

  .nav {
    &__container {
      @include flex;
    }

    &__items {
      @include flex(flex-start, center);
      margin: 0 0 0 auto;
      align-items: center;
    }

    &__logo {
      width: auto;
      height: 40px;
    }
  }

</style>
