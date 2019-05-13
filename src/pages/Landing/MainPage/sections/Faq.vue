<template>
  <Container block='faq' as='section'>
    <h1>FAQ</h1>
  </Container>
</template>

<script>
  import { Container } from '@components';
  
  export default {
    name: 'FAQ',
    path: '#faq',
    components: {
      Container
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';
</style>
