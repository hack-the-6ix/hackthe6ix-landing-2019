<template>
  <Container id='about' block='about' as='section'>
    <h2 class='about__title'>About</h2>
    <p class='about__text'>
      Hack the 6ix is Toronto's largest summer hackathon.
      Every year, we bring together 400 of the best and
      brightest hackers from across North America for
      36 hours of coding, designing, and jam-packed fun.
    </p>
    <p class='about__text'>
      We’ll provide you with all the resources, mentorship,
      and food to do your thing; all you need to bring is your
      creativity and ideas. Hack the 6ix is also a gathering of
      some of the top companies in North America. Whether you’re
      looking for start-up or corporate opportunities, come ready
      to flex your networking game! Hack the 6ix is open to hackers
      of all levels: no matter if you’re a beginner or veteran,
      it’s a weekend not to miss!
    </p>
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

  .about {
    color: white;
    background: linear-gradient(#85d1af, #63be95);
    
    &__title {

    }

    &__text {

    }
  }
</style>
