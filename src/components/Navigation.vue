<template>
  <Container block="nav" as="nav" :class="{'nav--show': this.show}">
    <router-link to="/">
      <Logo class="nav__logo" height="42" />
    </router-link>
    <ul class="nav__items">
      <router-link
        tag="li"
        role="link"
        class="nav__item"
        active-class="nav__item--active"
        v-for="item in items"
        :to="item.path"
        :key="item.path"
        >{{ item.displayName || item.name }}</router-link
      >
      <li>
        <Button class="nav__button" :click="apply" :disabled="disableApply"
          >Apply Now</Button
        >
      </li>
    </ul>
    <button class="nav__menu" v-on:click="() => (this.show = !this.show)">
      <div class="nav__bar nav__bar--top" />
      <div class="nav__bar nav__bar--mid" />
      <div class="nav__bar nav__bar--bot" />
    </button>
    <Container as="ul" block="nav__mobile" class="nav__mobile">
      <router-link
        tag="li"
        role="link"
        class="nav__mobile-item"
        active-class="nav__mobile-item--active"
        v-for="item in items"
        v-on:click.native="close"
        :to="item.path"
        :key="item.path"
        >{{ item.displayName || item.name }}</router-link
      >
      <li>
        <Button
          class="nav__mobile-button"
          :click="apply"
          :disabled="disableApply"
          >Apply Now</Button
        >
      </li>
    </Container>
  </Container>
</template>

<script>
import {Container, Button} from '.';
import {Logo} from '@assets';

export default {
  name: 'Navigation',
  components: {
    Container,
    Button,
    Logo,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    apply() {
      window.location.replace('/apply');
    },
    close() {
      this.show = false;
    },
    subscribe() {
      this.$router.push('/subscribe');
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    disableApply: Boolean,
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.nav {
  @include position(fixed, 0 auto auto, 0, auto, auto);
  z-index: 99;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);

  &__container {
    @include flex(flex-start, center);
    line-height: 1;
    padding: 15px 0;
  }

  &__items {
    @include flex(flex-start, center);
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 auto;
    align-items: center;
  }

  &__item {
    @include transition(background-color);
    padding: 16px 20px 12px;
    text-transform: uppercase;
    margin-right: 6px;
    border-radius: 4px;
    cursor: pointer;
    color: map-get($PRIMARY, TEAL);

    &:hover {
      background-color: #f2f2f2;
    }
  }

  &__logo {
    width: auto;
    z-index: 1;
    flex-shrink: 0;
  }

  &__button {
    text-transform: uppercase;
    margin-left: 18px;
  }

  &__menu {
    @include flex(column, center);
    @include transition(background-color);
    border-radius: 4px;
    flex-shrink: 0;
    display: none;
    z-index: 1;
    cursor: pointer;
    margin: 0 -12px 0 auto;
    background: none;
    padding: 8px 12px;
    border: none;

    &:hover {
      background-color: #f2f2f2;
    }
  }

  &__bar {
    width: 30px;
    height: 3px;
    margin: 3px 0;
    transform-origin: center;
    background-color: map-get($PRIMARY, TEAL);
  }

  &__mobile {
    @include position(fixed, 0, 0);
    display: none;
    transform: translate3d(0, -100%, 0);
    opacity: 0;
    text-transform: uppercase;
    background-color: white;
    width: 100%;
    height: 100%;

    &-container {
      @include flex(column, flex-end);
      padding-top: 80px;
      margin: 0;
      align-self: flex-start;
      list-style-type: none;
    }

    &-item {
      @include transition(transform);
      padding: 16px 0 12px 20px;
      color: map-get($PRIMARY, TEAL);
      cursor: pointer;
      margin-top: 16px;
      font-size: 1.4rem;

      &:hover {
        transform: translateX(-10px);
      }
    }

    & &-button {
      font-size: 1.2rem;
      margin-top: 20px;
      text-transform: uppercase;
    }
  }
}

@include media(LAPTOP) {
  .nav {
    $self: &;

    &__menu {
      display: flex;
    }

    &__items {
      display: none;
    }

    &__mobile {
      @include transition(transform opacity, PAGE);
      display: block;
      #{ $self }--show & {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &__bar {
      &--top,
      &--bot {
        @include transition(transform, PAGE);
      }

      &--mid {
        @include transition(transform opacity, PAGE);
      }

      #{ $self }--show & {
        &--top {
          transform: translate3d(0, 9px, 0) rotate(315deg);
        }

        &--mid {
          transform: translate3d(0, 0, 0) rotate(360deg);
          opacity: 0;
        }

        &--bot {
          transform: translate3d(0, -9px, 0) rotate(-315deg);
        }
      }
    }
  }
}
</style>
