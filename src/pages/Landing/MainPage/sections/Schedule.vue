<template>
  <Container block='schedule' as='main'>
    <h1>Schedule</h1>
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
</style>
