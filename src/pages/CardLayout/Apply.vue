<template>
  <Card class='apply'>
    <h1 class='apply__title'>Hack The 6ix Application Form</h1>
    <div class='apply__pages' :style='height && `height: ${ height }px`'>
      <Personal
        :first_name.sync='first_name'
        :last_name.sync='last_name'
        :email.sync='email'
        :gender.sync='gender'
      />
      <Links/>
    </div>
    <div class='apply__controls'>
      <Button class='apply__button' :click='back' :disabled='page === 0'>Back</Button>
      <Button class='apply__button' :click='next' :disabled='page === end'>Next</Button>
    </div>
  </Card>
</template>

<script>
  import { Card, Button } from '@components';
  import * as Screens from './screens';
  const end = Math.max(Object.values(Screens).length - 1, 0);

  export default {
    name: 'Info',
    path: '/apply',
    components: {
      ...Screens,
      Button,
      Card
    },
    data() {
      return {
        first_name: '',
        last_name: '',
        email: '',
        gender: -1,
        height: 0,
        page: 0,
        end
      };
    },
    mounted() {
      window.addEventListener('resize', this.pageHeight, { passive: true });
    },
    beforeDestory() {
      window.removeEventListener('resize', this.pageHeight, { passive: true });
    },
    updated() {
      this.pageHeight();
    },
    methods: {
      pageHeight() {
        this.$nextTick(() => {
          const page = document.querySelectorAll('.apply__page')[this.page];
          this.height = page.clientHeight;
        });
      },
      shiftPages() {
        const pages = Array.from(document.querySelectorAll('.apply__page'));
        pages.forEach((page, i) => {
          const current = this.page === i;
          page.style.transform = (
            `translateX(${ this.page * -100 }%) translateX(${ this.page * -60 }px)`
          );
          page.style.opacity = current ? 1 : 0;
        });
        this.pageHeight();
      },
      next() {
        this.page++;
        this.shiftPages();
      },
      back() {
        this.page--;
        this.shiftPages();
      }
    }
  }
</script>


<style lang='scss'>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .apply {

    margin-bottom: auto;
    max-width: 500px;
    width: 80%;

    &__title {
      margin: 0;
    }

    &__pages {
      @include transition(height);
      @include flex;
      overflow: hidden;
      position: relative;
    }

    &__page {
      @include transition(opacity transform, SLOW);
      flex-shrink: 0;
      margin-right: 60px;
      margin-bottom: auto;
      width: 100%;
    }

    &__subtitle {
      color: map-get($PRIMARY, TEAL);
      margin: 0;
    }

    &__input {
      margin-top: 20px;
    }

    &__controls {
      margin-top: 20px;
    }

    &__button {
      padding-left: 40px;
      padding-right: 40px;
      margin-right: 15px;
    }
  }

  @include media(PHONE) {
    .apply {
      border-radius: 0;
      width: 100%;

      &__controls {
        margin-top: 5px;
      }

      &__button {
        width: 100%;
        margin: 10px 0 0;
      }
    }
  }
</style>
