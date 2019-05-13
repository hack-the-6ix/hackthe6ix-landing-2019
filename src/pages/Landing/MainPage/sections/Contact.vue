<template>
  <Container block='contact' as='section'>
    <h1>Contact</h1>
  </Container>
</template>

<script>
  import { Container } from '@components';

  export default {
    name: 'Contact',
    displayName: 'Contact Us',
    path: '#contact',
    components: {
      Container
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';
</style>
