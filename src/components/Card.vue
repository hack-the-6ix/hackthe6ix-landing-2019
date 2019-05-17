<template>
  <component class='card' :is='as'>
    <slot/>
  </component>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      as: {
        type: String,
        default: () => 'div'
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .card {
    box-sizing: border-box;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 5px rgba(0,0,0,0.25);
  }
</style>
