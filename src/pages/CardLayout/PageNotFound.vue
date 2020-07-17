<template>
  <Card class="apply" :class="getPageClass">
    <h1 class="apply__title">Error 404</h1>
    <h2 class="apply__title">Sorry, we couldn't find that page</h2>

    <div class="dash__controls">
      <Button class="dash__button" v-on:click.native="home()"
        >Return to home</Button
      >
    </div>
  </Card>
</template>

<script>
import * as Screens from './DashboardScreens';
import {Card} from '@components';
import Button from '@hackthe6ix/vue-ui/Button';

export default {
  name: 'Error 404',
  path: '*',
  components: {
    Card,
    Button,
    ...Screens,
  },
  methods: {
    home() {
      window.location.href = '/';
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
    margin: 30px 0 10px;
  }

  &__button {
    margin: 0 3px 6px;
    width: calc(50% - 12px);
  }

  &__button--full {
    width: calc(100% - 18px);
  }

  &__aside {
    text-align: center;
    font-weight: bold;
    margin: 0;
  }
  margin-bottom: auto;
  width: 80%;
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
