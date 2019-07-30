<template>
  <portal to="modal" v-if="show">
    <Card class="modal">
      <div class="modal__box" :class="boxClass">
        <slot />
      </div>
    </Card>
  </portal>
</template>

<script>
import {Card} from '@components';

export default {
  name: 'Modal',
  components: {
    Card,
  },
  props: {
    boxClass: String,
    show: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.modal {
  @include position(fixed);
  box-sizing: border-box;

  &__box {
  }
}
</style>
