<template>
  <nav class='nav'>
    <div class='nav__items nav__items--left'>

    </div>
    <div class='nav__items nav__items--center'>
      <span v-for='link in links' :key='link.url'>
        <a :href='link.url'>{{ link.text }}</a>
      </span>
    </div>
    <div class='nav__items nav__items--right'>
      
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data: () => ({
      links: [
        { text: 'Home', url: '/' }
      ]
    })
  }
</script>


<style lang='scss' scoped>
  @import 'src/styles/mixins';
  @import 'src/styles/variables';

  .nav {
    &__items {
      display: flex;
      align-items: center;
      &--left { justify-content: flex-start }
      &--center { justify-content: center }
      &--right { justify-content: flex-end }
    }

    &__logo {

    }

    &__banner {

    }
  }

</style>
