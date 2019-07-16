<template>
  <Card class='apply'>
    <h1 class='apply__title'>Hack The 6ix</h1>
      <div class='apply__pages' :style='height && `height: ${ height }px`'>
        <div class="apply__page">
          <h2 class="apply__subtitle">Join our Mailing List</h2>
            <Input
              class="apply__input"
              name="email"
              placeholder="e.g. hunter2@hackthe6ix.com"
              label="Email"
              :onChange="handler"
              :value="email"
            />
            <Input 
              type="checkbox"
              class="apply__input"
              name="acceptance"
              label="I want to receive occasional emails about updates and news"
              :onChange="handler"
              :value="acceptance"
            />
        </div>
        <div class="apply__page">
          <h2 class="apply__subtitle">Thanks For Signing Up!</h2>
        </div>
      </div>
    </div>
    <div class='apply__controls'>
      <Button class='apply__button' v-show='page == 0' :click='submit' :disabled='(!valid())'>Submit</Button>
    </div>
  </Card>
</template>

<script>
  import { Card, Input, Button } from '@components';
  import axios from 'axios';
  const email_reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export default {
    name: 'Subscribe',
    path: '/subscribe',
    components: {
      Input,
      Button,
      Card
    },
    data() {
      return {
        email: '',
        source: this.$route.query.src,
        acceptance: '',
        confirmation: false,
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
      valid() {
        return email_reg_exp.exec(this.email) !== null && this.acceptance === "on";
      },
      submit() {
        if(!this.valid()) { return; }
        const query = `
        mutation {
          subscribeMailingList(email: "${this.email}", source: "${this.source}") {
            message
          }
        }
      `
      axios.post('http://localhost:4000/graphql', { query: query }).then((response) => {
        let message = response.data.data.subscribeMailingList.message;
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
