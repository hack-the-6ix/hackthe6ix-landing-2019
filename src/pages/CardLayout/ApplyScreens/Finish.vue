<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">All Done</h2>
    <p class="finish__text">
      Thank you for applying. An email has been sent to {{ email }}
      which would allow you to review your application.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Finish',
  props: {
    email: String,
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.finish {
  &__text {
    line-height: 1.8;
    font-size: 1.05rem;
    margin-bottom: 16px;
  }
}
</style>
