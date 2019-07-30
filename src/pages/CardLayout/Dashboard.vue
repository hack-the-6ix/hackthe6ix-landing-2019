<template>
  <Card class="apply">
    <h1 class="apply__title">Hacker Dashboard</h1>
    <div class="apply__pages" :style="height && `height: ${height}px`">
      <Home
        :user="user"
        :loading="loading"
        :qr="qr"
        :to="to"
        :pageHeight="pageHeight"
      />
      <Application :user="user" :loading="loading" :to="to" />
      <Schedule :user="user" :loading="loading" :to="to" />
    </div>
  </Card>
</template>

<script>
import * as Screens from './DashboardScreens';
import {AUTHENTICATE, FETCH_INFO, FETCH_QR} from '@graphql';
import {Card} from '@components';
import {query} from '@utils';

export default {
  name: 'Dashboard',
  path: '/dash/:id?',
  components: {
    Card,
    ...Screens,
  },
  data() {
    return {
      loading: true,
      user: {},
      qr: '',
      height: 0,
      page: 0,
    };
  },
  async mounted() {
    window.addEventListener('resize', this.pageHeight, {passive: true});
    window.addEventListener('load', this.shiftPages);
    try {
      const id = this.$route.params.id;
      const {token} = await query(AUTHENTICATE, {id});
      const [user] = await query(FETCH_INFO, {id}, token);
      const qr = await query(FETCH_QR, {id});
      this.qr = qr;
      this.loading = false;
      this.user = user;
    } catch (err) {
      alert(err);
      this.$router.push('/');
    }
  },
  beforeDestory() {
    window.removeEventListener('resize', this.pageHeight, {passive: true});
    window.removeEventListener('load', this.shiftPages);
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
        page.setAttribute('data-current', current);
      });
      this.pageHeight();
    },
    to(page) {
      this.page = page;
      this.shiftPages();
    },
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.dash {
  &__qr {
    box-sizing: border-box;
    margin-top: 40px;
    padding: 0 15%;
    width: 100%;
  }

  &__name,
  &__role {
    line-height: 1;
    text-align: center;
    margin: 0;
  }

  &__name {
    font-weight: bold;
    font-size: 1.8rem;
    margin: 18px 0 0;
  }

  &__large {
    font-size: 2rem;
    margin: 0 0 -5px;
    line-height: 1;
    font-weight: bold;
  }

  &__app {
    text-align: center;
  }

  &__status {
    font-weight: bold;
    margin-top: 30px;
    font-size: 1.2rem;
    line-height: 1;
    color: map-get($PRIMARY, TEAL);
  }

  &__role {
    color: map-get($PRIMARY, TEAL);
    font-size: 1.4rem;
    margin: 8px 0;
  }

  &__controls {
    @include flex(center);
    flex-wrap: wrap;
    margin: 30px 0 20px;
  }

  &__button {
    margin: 0 3px 6px;
    width: calc(50% - 12px);
  }

  &__aside {
    text-align: center;
    font-weight: bold;
    margin: 0;
  }
}

@include media(PHONE) {
  .dash {
    &__controls {
      flex-direction: column;
    }

    &__button {
      width: 100%;
      margin: 0 0 8px;
    }

    &__qr {
      padding: 0 20px;
    }
  }
}
</style>
