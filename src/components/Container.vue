<template>
  <div class='container' :class='block'>
    <div class='container__content' :is='as' :class='elementClass'>
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Container',
    props: {
      as: String,
      block: String
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
      padding: 0 20px;
      &__content {
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
