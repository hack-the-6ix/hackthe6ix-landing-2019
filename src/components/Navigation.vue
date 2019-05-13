<template>
  <Container block='nav' as='nav'>
    <Logo class='nav__logo' height='38'/>
    <ul class='nav__items'>
      <router-link
        tag='li'
        class='nav__item'
        active-class='nav__item--active'
        v-for='item in items'
        :to='item.path'
        :key='item.path'
      >{{
        item.displayName || item.name
      }}</router-link>
    </ul>
    <Button class='nav__button' v-on:click.native='apply'>Apply</Button>
  </Container>
</template>

<script>
  import { Container, Button } from '.';
  import { Logo } from '@assets';

  export default {
    name: 'Navigation',
    components: {
      Container,
      Button,
      Logo
    },
    methods: {
      apply() {
        alert('APPLY');
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

  .nav {
    @include position(fixed, 0 auto auto, 0, auto, auto);
    width: 100%;
    background-color: white;
    box-shadow: 0 0 3px rgba(0,0,0,0.6);

    &__container {
      @include flex(flex-start, center);
      line-height: 1;
      padding: 15px 0;
    }

    &__items {
      @include flex(flex-start, center);
      list-style-type: none;
      padding: 0;
      margin: 0 0 0 auto;
      align-items: center;
    }

    &__item {
      @include transition(background-color);
      padding: 16px 20px 12px;
      text-transform: uppercase;
      border-radius: 4px;
      cursor: pointer;
      color: map-get($PRIMARY, TEAL);

      &:hover {
        background-color: #f2f2f2;
      }
    }

    &__logo {
      width: auto;
      flex-shrink: 0;
    }

    &__button {
      text-transform: uppercase;
      margin-left: 18px;
    }
  }

</style>
