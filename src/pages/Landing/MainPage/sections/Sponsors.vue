<template>
  <Container id='sponsors' block='sponsor' as='section' :class='{ "sponsor--show": animate }'>
    <h2 class='sponsor__title'>Sponsors</h2>
    <h3 class='sponsor__subtitle'>Our amazing sponsors who make Hack the 6ix possible</h3>
    <ul class='sponsor__items' v-for='(category, i) in categories' v-bind:key='i'>
      <li
        class='sponsor__item'
        :style='`max-width: ${ 100  - (20 * i) }%; transition-delay: ${ (i + 1) * 200 }ms`'
        v-for='sponsor in category'
        v-bind:key='sponsor.title'
      >
        <a class='sponsor__link' :href='sponsor.url' target='_blank'>
          <img
            class='sponsor__image'
            :alt='sponsor.title + " logo"'
            :src='sponsor.image'
            :width='sponsor.size'
          />
        </a>
        <a :href="sponsor.sublink"><h3 style='margin:0;' class='sponsor__text'>{{sponsor.subtext}}</h3></a>
      </li>
    </ul>
    <div class='sponsor__footer'>
      <h3 class='sponsor__subtitle sponsor__subtitle--center'>Interested in being a sponsor?</h3>
      <p class='sponsor__text'>
        Please send us a business inquiry at <a href='mailto:sponsors@hackthe6ix.com'>sponsors@hackthe6ix.com</a>
      </p>
    </div>
    <template v-slot:before>
      <WaveMask class='sponsor__wave' fill='white'/>
    </template>
  </Container>
</template>

<script>
  import { Container } from '@components';
  import { WaveMask } from '@assets';
  import { sponsors } from '@data';
  import { scroll } from '@utils';

  export default {
    name: 'Sponsors',
    path: '#sponsors',
    components: {
      Container,
      WaveMask
    },
    data() {
      return {
        sponsors,
        animate: false
      };
    },
    mounted() {
      scroll.add(this);
    },
    beforeDestroy() {
      scroll.remove(this);
    },
    computed: {
      categories() {
        let prev;
        return this.sponsors.reduce((acc, curr) => {
          if (prev !== curr.size) {
            acc.push([]);
            prev = curr.size;
          }
          
          const len = acc.length - 1;
          acc[len].push(curr);
          return acc;
        }, []);
      }
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
      margin: 20px 0 0;
    }

    &__subtitle {
      text-align: end;
      margin: 0 0 20px;
      &--center {
        text-align: center;
        font-size: 2.2rem;
        margin: 0 0 -10px;
      }
    }

    &__text {
      text-align: center;
      font-weight: bold;
      margin-bottom: 40px;
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
      @include transition(opacity transform, PAGE);
      margin: 0 20px 20px;
      width: fit-content;
    }

    &__link {
      @include flex;
      display: block;
    }

    &__image {
      @include transition(opacity, SLOW);
      max-width: 100%;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .sponsor {
    &__title {
      opacity: 0;
    }

    &__item, &__footer {
      transform: scale(0.9);
      opacity: 0;
    }

    &--show & {
      &__title {
        @include transition(opacity, PAGE);
        opacity: 1;
      }

      &__footer {
        @include transition(opacity transform, PAGE);
      }

      &__item, &__footer {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  @include media(PHONE) {
    .sponsor {
      &__title {
        font-size: 2.4rem;
      }

      &__subtitle {
        &--center {
          font-size: 1.8rem;
        }
      }
    }
  }
</style>
