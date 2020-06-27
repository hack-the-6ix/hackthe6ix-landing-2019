<template>
  <Card class="apply">
    <h1 class="apply__title">Hack The 6ix</h1>
    <div class="apply__pages" :style="height && `height: ${height}px`">
      <div class="apply__page">
        <h2 class="apply__subtitle">Join our Mailing List</h2>
        <Input
          class="apply__input"
          name="email"
          :state="checkEmail()"
          placeholder="e.g. hunter2@hackthe6ix.com"
          errorMsg="Invalid email"
          required
          label="Email"
          v-model="email"
        />
        <Checkbox
          class="apply__input"
          name="acceptance"
          label="I want to receive occasional emails about updates and news"
          required
          v-model="acceptance"
        />
      </div>
      <div class="apply__page">
        <h2 class="apply__subtitle">Thanks For Signing Up!</h2>
      </div>
    </div>
    <div class="apply__controls">
      <Button
        class="apply__button"
        v-show="!page"
        :click="submit"
        :disabled="!(checkEmail() && acceptance)"
      >
        Submit
      </Button>
      <Button
        class="apply__button"
        v-show="page"
        :click="() => $router.push('/')"
      >
        Back to home
      </Button>
    </div>
  </Card>
</template>

<script>
import Button from '@hackthe6ix/vue-ui/Button';
import Checkbox from '@hackthe6ix/vue-ui/Checkbox';
import Input from '@hackthe6ix/vue-ui/Input';
import {Card} from '@components';
import {validate, query} from '@utils';
import {SUBSCRIBE} from '@graphql';

export default {
  name: 'Subscribe',
  path: '/subscribe',
  components: {
    Input,
    Button,
    Card,
    Checkbox,
  },
  data() {
    return {
      email: '',
      source: this.$route.query.src,
      acceptance: false,
      confirmation: false,
      height: 0,
      page: 0,
    };
  },
  mounted() {
    window.addEventListener('resize', this.pageHeight, {passive: true});
    window.addEventListener('load', this.pageHeight);
  },
  beforeDestory() {
    window.removeEventListener('resize', this.pageHeight, {passive: true});
    window.removeEventListener('load', this.pageHeight);
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
        page.style.transform = `translateX(${this.page *
          -100}%) translateX(${this.page * -60}px)`;
        page.style.opacity = current ? 1 : 0;
      });
      this.pageHeight();
    },
    next() {
      this.page++;
      this.shiftPages();
    },
    checkEmail() {
      return this.email === '' ? undefined : validate(this.email, 'email');
    },
    async submit() {
      try {
        await query(SUBSCRIBE, {email: this.email, source: this.source});
        this.next();
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>
