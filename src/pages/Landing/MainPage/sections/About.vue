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
    <template v-slot:pre>
      <WaveMask class='about__wave' fill='white'/>
    </template>
  </Container>
</template>

<script>
  import { Container } from '@components';
  import { WaveMask } from '@assets';

  export default {
    name: 'About',
    path: '#about',
    components: {
      Container,
      WaveMask
    }
  }
</script>


<style lang='scss'>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .about {
    color: white;
    flex-direction: column;
    background: linear-gradient(#85d1af, #63be95);

    &__container {
      padding-bottom: 60px;
    }

    &__wave {
      transform: rotate(180deg);
      margin-bottom: -1px;
    }
    
    &__title {
      font-size: 3.4rem;
      margin: 0;
    }

    &__text {
      font-size: 1.2rem;
      line-height: 1.7;
      margin-bottom: 30px;
    }

    &__title, &__text {
      max-width: 600px;
      margin-right: auto;
    }
  }

  @include media(PHONE) {
    .about {
      &__title {
        font-size: 2.4rem;
      }

      &__text {
        font-size: 1rem;
      }
    }
  }
</style>
