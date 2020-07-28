<template>
  <portal to="modal" v-if="show_">
    <div class="modal">
      <Card class="modal__box" :class="{'modal__box--show': !hide}">
        <button class="modal__close" v-on:click="close" />
        <slot />
      </Card>
      <div
        class="modal__drop"
        :class="{'modal__drop--show': !hide}"
        v-on:click="close"
      />
    </div>
  </portal>
</template>

<script>
import {Card} from '@components';

export default {
  name: 'Modal',
  components: {
    Card,
  },
  data() {
    return {
      show_: this.show,
      hide: !this.show,
    };
  },
  props: {
    boxClass: String,
    show: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    close() {
      this.$emit('update:show', false);
    },
  },
  watch: {
    show(val) {
      window.clearTimeout(this.timer);
      if (val) {
        this.show_ = true;
        this.timer = window.setTimeout(() => {
          this.hide = false;
        }, 0);
      } else {
        this.hide = true;
        this.timer = window.setTimeout(() => {
          this.show_ = false;
        }, 300);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.modal {
  @include position(fixed);
  @include flex(center);
  box-sizing: border-box;
  z-index: 999;

  &__drop {
    @include transition(background-color, SLOW);
    @include position(absolute, 0, 0);
    background-color: transparent;
    cursor: pointer;

    &--show {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  &__close {
    @include position(absolute, 10px 10px auto auto);
    @include flex(center);
    border-radius: 999px;
    cursor: pointer;
    z-index: 99;
    border: none;
    background: none;
    padding: 20px;
    width: 26px;
    height: 26px;

    &:hover {
      &::before,
      &::after {
        background-color: map-get($PRIMARY, TEAL);
      }
    }

    &::before,
    &::after {
      @include position(absolute, auto, auto);
      @include transition(background-color);
      transform-origin: center;
      content: '';
      width: 26px;
      height: 3px;
      background-color: $TEXT;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &__box {
    @include transition(transform opacity, SLOW);
    @include scroll;
    position: relative;
    transform: translateY(-80px);
    overflow: auto;
    opacity: 0;
    max-width: 600px;
    z-index: 1;
    width: 80%;
    min-height: 200px;
    max-height: 95vh;

    &--show {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
