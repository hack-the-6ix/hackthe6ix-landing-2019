<template>
  <Container id='faq' block='faq' as='section'>
    <h2 class='faq__title'>Frequently Asked Questions</h2>
    <div class='faq__content' v-for='section in faq' v-bind:key='section.title'>
      <h3 class='faq__content-title'>{{ section.title }}</h3>
      <div class='faq__questions'>
        <ul class='faq__items faq__items--first'>
          <li class='faq__item' v-for='q in first(section.items)' v-bind:key='q.title'>
            <h4 class='faq__item-title'>{{ q.title }}</h4>
            <p class='faq__item-content' v-html='q.content'/>
          </li>
        </ul>
        <ul class='faq__items faq__items--second'>
          <li class='faq__item' v-for='q in second(section.items)' v-bind:key='q.title'>
            <h4 class='faq__item-title'>{{ q.title }}</h4>
            <p class='faq__item-content' v-html='q.content'/>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>

<script>
  import { Container } from '@components';
  import { faq } from '@data';
  
  export default {
    name: 'FAQ',
    path: '#faq',
    components: {
      Container
    },
    data() {
      return {
        faq
      };
    },
    methods: {
      first(list) {
        return list.slice(0, Math.ceil(list.length / 2));
      },
      second(list) {
        return list.slice(Math.ceil(list.length / 2));
      }
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .faq {
    &__title {
      font-size: 3.4rem;
      margin: 0 0 20px;
    }

    &__content {
      margin-bottom: 20px;
      &-title {
        font-size: 2.1rem;
        color: map-get($PRIMARY, TEAL);
        margin: 0 0 10px;
      }
    }

    &__questions {
      @include flex;
      flex-wrap: wrap;
    }

    &__items {
      margin: 0;
      padding: 0;
      list-style-type: none;
      box-sizing: border-box;
      width: 50%;

      &--first {
        padding-right: 40px;
      }

      &--second {
        padding-left: 40px;
      }
    }

    &__item {
      margin-bottom: 40px;
      box-sizing: border-box;
      
      &-title {
        font-size: 1.3rem;
        margin: 0;
      }

      &-content {
        line-height: 1.7;
        margin: 10px 0;
      }
    }
  }

  @include media(TABLET) {
    .faq {
      &__items {
        width: 100%;
        padding: 0;
      }
    }
  }

  @include media(PHONE) {
    .faq {
      &__title {
        font-size: 2.4rem;
      }

      &__content-title {
        font-size: 1.8rem;
      }
    }
  }
</style>
