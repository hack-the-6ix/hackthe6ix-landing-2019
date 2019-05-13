<template>
  <div class='container' :is='as' :class='block'>
    <div class='container__content' :class='elementClass'>
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
        return {
          [this.block + '__container']: this.block
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

    &__content {
      max-width: 1200px;
      box-sizing: border-box;
      width: 85%;
    }
  }

  @include media(TABLET) {
    .container {
      &__content {
        width: 95%;
      }
    }
  }
</style>
