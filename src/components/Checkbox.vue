<template>
  <div class='checkbox'>
    <div class='checkbox__container' :class='{"checkbox__container--checked": value}'>
      <input
        class='checkbox__form'
        @click='$emit("check", !value)'
        type='checkbox'
        :value='value'
        :name='name'
      />
      <icon class='checkbox__icon' :class='{"checkbox__icon--checked": value}' icon='check'/>
    </div>
    <label class='checkbox__label' :htmlFor='name'>{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    model: {
      prop: 'value',
      event: 'check'
    },
    props: {
      value: Boolean,
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .checkbox {
    @include flex;
    margin-bottom: 16px;
    font-weight: bold;

    &__label {
      color: map-get($PRIMARY, TEAL);
      margin-top: 2px;
      font-size: 0.95rem;
    }

    &__container {
      @include transition(background-color);
      @include flex(center);
      margin-right: 10px;
      position: relative;
      width: 22px;
      height: 22px;
      border-radius: 6px;
      overflow: hidden;
      background-color: #eaeaea;
      font-size: 0.8rem;
      color: white;

      &--checked {
        background-color: map-get($PRIMARY, TEAL);
      }
    }

    &__icon {
      @include transition(opacity transform);
      transform: rotate(45deg);
      opacity: 0;

      &--checked {
        transform: rotate(0deg);
        opacity: 1;
      }
    }

    &__form {
      @include position(absolute);
      opacity: 0;
      z-index: 1;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
</style>
