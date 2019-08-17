<template>
  <Scanner />
</template>

<script>
import {Scanner} from '@components';

export default {
  name: 'Scan',
  path: '/scan',
  components: {
    Scanner,
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.apply {
  margin-bottom: auto;
  max-width: 500px;
  width: 80%;

  &__title {
    margin: 0;
  }

  &__pages {
    @include transition(height);
    @include flex;
    overflow: hidden;
    position: relative;
  }

  &__page {
    @include transition(opacity transform, SLOW);
    flex-shrink: 0;
    margin-right: 60px;
    margin-bottom: auto;
    width: 100%;
  }

  &__subtitle {
    color: map-get($PRIMARY, TEAL);
    margin: 0;
  }

  &__input {
    margin-top: 20px;
  }

  &__controls {
    margin-top: 20px;
  }

  &__button {
    padding-left: 40px;
    padding-right: 40px;
    margin-right: 15px;
  }
}

@include media(PHONE) {
  .apply {
    border-radius: 0;
    width: 100%;

    &__controls {
      margin-top: 5px;
    }

    &__button {
      width: 100%;
      margin: 10px 0 0;
    }
  }
}
</style>
