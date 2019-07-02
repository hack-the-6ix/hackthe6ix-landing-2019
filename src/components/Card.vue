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

<style lang='scss'>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .card {
    box-shadow: 0 1px 5px rgba(0,0,0,0.15);
    background-color: white;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 30px;
  }
</style>
