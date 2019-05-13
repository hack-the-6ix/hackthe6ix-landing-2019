<template>
  <button class='button'>
    <slot/>
  </button>
</template>

<script>
  export default {
    name: 'Button'
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .button {
    @include transition(background-color);
    background-color: map-get($PRIMARY, TEAL);
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    font-size: 0.95rem;
    border-radius: 4px;
    color: white;

    &:hover, &:active {
      background-color: darken($PRIMARY, TEAL);
    }
  }
</style>
