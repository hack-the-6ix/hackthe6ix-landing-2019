<template>
  <Container
    id="about"
    block="about"
    as="section"
    :class="{'about--show': animate}"
  >
    <h2 class="about__title">About</h2>
    <p class="about__text">
      Hack the 6ix is Toronto’s largest summer hackathon. Every year, we bring
      together 400 of the best and brightest hackers amongst thousands of
      applicants from across North America for 36 hours of coding, binging, and
      jam-packed fun!
    </p>
    <p class="about__text about__text--second">
      We’ll provide you with all the resources, mentorship, and food to do your
      thing; all you need to bring is your creativity and ideas! Take a break
      during the weekend to attend workshops and tech talks, or talk with the
      mentors and representatives from top companies in North America.
    </p>
    <template v-slot:after>
      <WaveMask class="about__wave" fill="white" />
    </template>
  </Container>
</template>

<script>
import {Container} from '@components';
import {WaveMask} from '@assets';
import {scroll} from '@utils';

export default {
  name: 'About',
  path: '/#about',
  components: {
    Container,
    WaveMask,
  },
  data() {
    return {
      animate: false,
    };
  },
  mounted() {
    scroll.add(this);
  },
  beforeDestroy() {
    scroll.remove(this);
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.about {
  color: white;
  flex-direction: column;
  background: linear-gradient(#63be96, #63be95);

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

  &__title,
  &__text {
    max-width: 600px;
    margin-right: auto;
  }
}

.about {
  &__title,
  &__text {
    transform: translateY(-40px);
    opacity: 0;
  }

  &--show & {
    &__title,
    &__text {
      @include transition(opacity transform, PAGE);
      transform: translateY(0);
      opacity: 1;
    }

    &__text {
      transition-delay: 300ms;
      &--second {
        transition-delay: 600ms;
      }
    }
  }
}

@include media(PHONE) {
  .about {
    background: linear-gradient(#85d1af, #63be95);
    padding-top: 20px;

    &__title {
      font-size: 2.4rem;
    }

    &__text {
      font-size: 1rem;
    }
  }
}
</style>
