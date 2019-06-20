<template>
  <Container id='schedule' block='schedule' as='section'>
    <h2 class='schedule__title'>Schedule</h2>
    <p class='schedule__soon'>Coming soon...</p>
  </Container>
</template>

<script>
  import { Container } from '@components';

  export default {
    name: 'Schedule',
    path: '#schedule',
    components: {
      Container
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .schedule {
    &__title {
      font-size: 3.4rem;
      margin: 0 0 20px;
    }

    &__soon {
      font-weight: bold;
      font-size: 1.8rem;
      margin: 0 0 60px;
      color: map-get($PRIMARY, TEAL);
    }
  }

  @include media(PHONE) {
    .schedule {
      &__title {
        font-size: 2.4rem;
      }
    }
  }
</style>
