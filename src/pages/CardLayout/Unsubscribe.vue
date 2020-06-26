<template>
  <Card class="apply">
    <h1 class="apply__title">Hack The 6ix</h1>
    <div class="apply__pages" :style="height && `height: ${height}px`">
      <div class="apply__page">
        <h2 class="apply__subtitle">:(</h2>
        <h3 class="apply__email">Email: {{ $route.query.email }}</h3>
        <Checkbox
          class="apply__input"
          name="acceptance"
          label="Unsubscribe me from News & Promotions"
          required
          v-model="acceptance"
        />
      </div>
      <div class="apply__page">
        <h2 class="apply__subtitle">All Done!</h2>
      </div>
    </div>
    <div class="apply__controls">
      <Button
        class="apply__button"
        v-show="!page"
        :click="submit"
        :disabled="!(acceptance && $route.params.id)"
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
import Button from '@hackthe6ix/vue-ui/dist/Button';
import Checkbox from '@hackthe6ix/vue-ui/dist/Checkbox';
import {Card} from '@components';
import {UNSUBSCRIBE} from '@graphql';
import {query} from '@utils';

export default {
  name: 'Unsubscribe',
  path: '/unsubscribe/:id?',
  components: {
    Checkbox,
    Button,
    Card,
  },
  data() {
    return {
      id: this.$route.params.id,
      acceptance: false,
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
    handler({target}) {
      if (target.type === 'checkbox') {
        this[target.name] = this.acceptance == 'on' ? 'off' : 'on';
      } else {
        this[target.name] = target.value;
      }
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
    async submit() {
      try {
        await query(UNSUBSCRIBE, {id: this.id});
        this.next();
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>
