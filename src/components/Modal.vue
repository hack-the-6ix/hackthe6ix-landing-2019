<template>
  <portal to="modal" v-if="show_">
    <div class="modal">
      <Card class="modal__box" :class="{'modal__box--show': !hide}">
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

  &__box {
    @include transition(transform opacity, SLOW);
    @include scroll;
    transform: translateY(-80px);
    overflow: auto;
    opacity: 0;
    max-width: 600px;
    z-index: 1;
    width: 80%;
    min-height: 200px;

    &--show {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
