<template>
  <Container block='sponsor' as='section'>
    <h1>Sponsors</h1>
  </Container>
</template>

<script>
  import { Container } from '@components';

  export default {
    name: 'Sponsors',
    path: '#sponsors',
    components: {
      Container
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';
</style>
