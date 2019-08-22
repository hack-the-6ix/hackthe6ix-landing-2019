<template>
  <Container
    id="schedule"
    block="schedule"
    as="section"
    :class="{'schedule--show': animate}"
  >
    <h2 class="schedule__title">Schedule</h2>
    <dynamic-schedule :signup_enabled="false"></dynamic-schedule>
  </Container>
</template>

<script>
import {Container, DynamicSchedule} from '@components';
import {scroll} from '@utils';

export default {
  name: 'Schedule',
  path: '#schedule',
  components: {
    Container,
    DynamicSchedule,
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

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.schedule {
  &__title {
    font-size: 3.4rem;
    margin: 0 0 20px;
  }

  &__soon {
    font-weight: bold;
    font-size: 1.8rem;
    margin: 0 0 60px;
    color: map-get($PRIMARY, TEAL);
  }
}

.schedule {
  &__title {
    opacity: 0;
  }

  &__soon {
    transform: translateX(-40px);
    opacity: 0;
  }

  &--show & {
    &__title {
      @include transition(opacity, PAGE);
      opacity: 1;
    }

    &__soon {
      @include transition(opacity transform, PAGE);
      transform: translateX(0);
      opacity: 1;
    }
  }
}

@include media(PHONE) {
  .schedule {
    &__title {
      font-size: 2.4rem;
    }
  }
}
</style>
