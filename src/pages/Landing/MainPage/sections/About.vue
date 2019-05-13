<template>
  <Container id='about' block='about' as='section'>
    <h1>About</h1>
  </Container>
</template>

<script>
  import { Container } from '@components';

  export default {
    name: 'About',
    path: '#about',
    components: {
      Container
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';
</style>
