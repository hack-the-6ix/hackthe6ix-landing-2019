<template>
  <Container
    id="contact"
    block="contact"
    as="section"
    :class="{'contact--show': animate}"
  >
    <h2 class="contact__title">Contact</h2>
    <p class="contact__text contact__text--bold">
      When and where is Hack the 6ix in 2019?
    </p>
    <p class="contact__text">
      Hack the 6ix 2019 will be held at {{ venue }} in downtown Toronto from
      August 23-25, 2019.
    </p>
    <Button class="contact__button" icon="envelope" :click="contact"
      >Contact Us</Button
    >
    <div class="contact__map">
      <div class="contact__map-canvas">
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=bahencentre,toronto&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        />
      </div>
    </div>
  </Container>
</template>

<script>
import {Container, Button} from '@components';
import {venue} from '@data';
import {scroll} from '@utils';

export default {
  name: 'Contact',
  displayName: 'Contact Us',
  path: '/#contact',
  components: {
    Container,
    Button,
  },
  data() {
    return {
      venue,
      animate: false,
    };
  },
  mounted() {
    scroll.add(this);
  },
  beforeDestroy() {
    scroll.remove(this);
  },
  methods: {
    contact() {
      window.open('mailto:sponsors@hackthe6ix.com');
    },
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.contact {
  padding-bottom: 60px;

  &__title {
    font-size: 3.4rem;
    margin-bottom: 0;
  }

  &__text {
    margin: 5px 0;
    font-size: 1rem;
    &--bold {
      color: map-get($PRIMARY, TEAL);
      font-weight: bold;
      font-size: 1.3rem;
    }
  }

  &__button {
    padding: 12px 26px;
    font-weight: bold;
    margin: 10px 0 25px;
  }

  &__map {
    height: 500px;
    width: 100%;

    &-canvas {
      @include flex(center);
      border-radius: 8px;
      overflow: hidden;

      & > iframe {
        width: 100%;
      }
    }
  }
}

.contact {
  &__container {
    opacity: 0;
  }

  &--show & {
    &__container {
      @include transition(opacity, PAGE);
      opacity: 1;
    }
  }
}

@include media(PHONE) {
  .contact {
    &__title {
      font-size: 2.4rem;
    }
  }
}
</style>
