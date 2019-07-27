<template>
  <button
    class="button"
    @click="click"
    :disabled="disabled"
    :class="{'button--secondary': secondary, 'button--loading': loading}"
  >
    <icon
      v-if="!loading && icon"
      class="button__icon"
      :class="{'button__icon--only': !$slots.default}"
      :icon="icon"
    />
    <slot v-if="!loading" />
    <icon v-if="loading" icon="circle-notch" spin />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    secondary: Boolean,
    disabled: Boolean,
    loading: Boolean,
    icon: String,
    click: {
      type: Function,
      default: () => () => {},
    },
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.button {
  @include transition(background-color);
  background-color: map-get($PRIMARY, TEAL);
  font-weight: bold;
  outline: none;
  font-family: $FONT;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  border-radius: 6px;
  color: white;

  &:hover,
  &:active {
    background-color: darken($PRIMARY, TEAL);
  }

  &--secondary {
    @include transition(background-color border-color color);
    color: map-get($PRIMARY, TEAL);
    padding: 10.5px 18.5px;
    border: 1.5px solid map-get($PRIMARY, TEAL);
    background-color: transparent;

    &:hover {
      background-color: map-get($PRIMARY, TEAL);
      color: white;
    }

    &:active {
      background-color: darken($PRIMARY, TEAL);
      border-color: darken($PRIMARY, TEAL);
      color: white;
    }
  }

  &__icon {
    margin-right: 4px;
    &--only {
      margin-right: 0;
    }
  }

  &:disabled {
    @include transition(background-color border-color color);
    &,
    &:hover,
    &:active {
      background-color: #d8d8d8;
      border-color: #d8d8d8;
      color: white;
    }

    &:hover {
      cursor: not-allowed;
      background-color: darken-color(#d8d8d8);
      border-color: darken-color(#d8d8d8);
    }
  }
}
</style>
