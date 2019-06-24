<template>
  <div class='container' :is='as' :class='block' :id='id'>
    <slot name='before'/>
    <div class='container__content' :class='elementClass'>
      <slot/>
    </div>
    <slot name='after'/>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      as: String,
      block: String,
      id: String
    },
    computed: {
      elementClass() {
        const suffix = `${ this.block.includes('__') ? '-' : '__' }container`;
        return {
          [this.block + suffix]: this.block
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .container {
    @include flex(center);
    box-sizing: border-box;

    &__content {
      max-width: 1200px;
      box-sizing: border-box;
      width: 85%;
    }
  }

  @include media(TABLET) {
    .container {
      &__content {
        padding-left: 20px;
        padding-right: 20px;
        width: 95%;
      }
    }
  }

  @include media(PHONE) {
    .container {
      &__content {
        width: 100%;
      }
    }
  }
</style>
