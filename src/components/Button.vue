<template>
  <button
    class='button'
    @click='click'
    :class='{"button--secondary": secondary, "button--loading": loading}'
  >
    <slot v-if='!loading'/>
    <icon v-if='loading' icon='circle-notch' spin/>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      secondary: Boolean,
      loading: Boolean,
      click: {
        type: Function,
        default: () => () => {},
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .button {
    @include transition(background-color);
    background-color: map-get($PRIMARY, TEAL);
    outline: none;
    font-family: $FONT;
    padding: 16px 20px 12px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    border-radius: 6px;
    color: white;

    &:hover, &:active {
      background-color: darken($PRIMARY, TEAL);
    }

    &--secondary {
      @include transition(background-color color);
      color: map-get($PRIMARY, TEAL);
      padding: 14.5px 18.5px 10.5px;
      border: 1.5px solid map-get($PRIMARY, TEAL);
      background-color: transparent;

      &:hover, &:active {
        background-color: map-get($PRIMARY, TEAL);
        color: white;
      }
    }
  }
</style>
