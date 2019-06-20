<template>
  <Container id='sponsors' block='sponsor' as='section'>
    <h1 class='sponsor__title'>Sponsors</h1>
    <ul class='sponsor__items'>
      <li class='sponsor__item' v-for='sponsor in sponsors' v-bind:key='sponsor.title'>
        <a class='sponsor__link' :href='sponsor.url'>
          <img
            class='sponsor__image'
            :alt='sponsor.title + " logo"'
            :src='sponsor.image'
            :width='sponsor.size'
          />
        </a>
      </li>
    </ul>
    <template v-slot:before>
      <WaveMask class='sponsor__wave' fill='white'/>
    </template>
  </Container>
</template>

<script>
  import { Container } from '@components';
  import { WaveMask } from '@assets';
  import { sponsors } from '@data';

  export default {
    name: 'Sponsors',
    path: '#sponsors',
    components: {
      Container,
      WaveMask
    },
    data() {
      return {
        sponsors
      };
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .sponsor {
    background-color: map-get($SECONDARY, SAND);
    flex-direction: column;

    &__title {
      font-size: 3.4rem;
      text-align: end;
      margin: 0;
    }

    &__wave {
      transform: rotateY(180deg);
      margin-bottom: -1px;
      width: 100%;
    }

    &__items {
      @include flex(center);
      list-style-type: none;
      flex-wrap: wrap;
      padding: 0;
      margin: 40px -20px 60px;
    }

    &__item {
      @include transition(opacity);
      margin: 0 20px 20px;
      &:hover {
        opacity: 0.85;
      }
    }

    &__link {
      display: block;
      @include flex;
    }
  }

  @include media(PHONE) {
    .sponsor {
      &__title {
        font-size: 2.4rem;
      }
    }
  }
</style>
