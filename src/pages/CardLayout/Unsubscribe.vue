<template>
  <Card class='apply'>
    <h1 class='apply__title'>Hack The 6ix</h1>
      <div class='apply__pages' :style='height && `height: ${ height }px`'>
        <div class="apply__page">
          <h2 class="apply__subtitle">:(</h2>
          <h3 v-html="this.$route.query.email"></h3>
            <Input 
              type="checkbox"
              class="apply__input"
              name="acceptance"
              label="Unsubscribe me from News & Promotions"
              :onChange="handler"
              :value="acceptance"
            />
        </div>
        <div class="apply__page">
          <h2 class="apply__subtitle">All Done!</h2>
        </div>
      </div>
    </div>
    <div class='apply__controls'>
      <Button class='apply__button' v-show='page == 0' :click='submit' :disabled='acceptance !== "on"'>Submit</Button>
    </div>
  </Card>
</template>

<script>
  import { Card, Input, Button } from '@components';
  import axios from 'axios'

  export default {
    name: 'Unsubscribe',
    path: '/unsubscribe',
    components: {
      Input,
      Button,
      Card
    },
    data() {
      return {
        email: this.$route.query.email,
        acceptance: "",
        height: 0,
        page: 0,
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
      handler({ target }) {
        if(target.type === 'checkbox') { this[target.name] = this.acceptance == "on" ? "off" : "on"; }
        else {  this[target.name] = target.value; }
      },
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
      submit() {
        const query = `
        mutation {
          unsubscribeMailingList(email: "${this.email}") {
            message
          }
        }
      `
      axios.post('http://localhost:4000/graphql', { query: query }).then((response) => {
        let message = response.data.data.unsubscribeMailingList.message;
        this.next();
        setTimeout(() => {
          window.location.replace("/");
        }, 4000);
      })
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
