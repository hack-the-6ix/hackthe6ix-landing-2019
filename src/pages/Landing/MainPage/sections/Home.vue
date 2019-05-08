<template>
  <Container block='home' as='main'>
    <h1>Home</h1>
  </Container>
</template>

<script>
  import { Container } from '@components';

  export default {
    name: 'Home',
    path: '#',
    components: {
      Container
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';
</style>
