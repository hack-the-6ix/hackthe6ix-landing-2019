<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">All Done</h2>
    <p class='finish__text'>
      Thank you for applying. We hope to get back to you
      soon. For the meantime, click the button below to
      check out the dashboard to keep track of your
      status and manage your personal information.
    </p>
  </div>
</template>

<script>
export default {
  name: "Finish"
};
</script>

<style lang='scss' scoped>
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