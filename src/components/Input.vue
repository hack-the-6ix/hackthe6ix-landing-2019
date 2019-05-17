<template>
  <div class='input'>
    <label class='input__label' :htmlFor='name'>{{ label }}</label>
    <input
      :class='{"input__form--success": state, "input__form--error": error}'
      :placeholder='placeholder'
      :aria-errormessage='name'
      :aria-invaild='error'
      @change='onChange'
      :name='name'
      :type='type'
      class='input__form'
      v-model='value_'
    />
    <label :id='name' class='input__error' v-if='error'>{{ errorMsg }}</label>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    data() {
      return { value_: this.value };
    },
    computed: {
      error() {
        return this.state === false;
      }
    },
    props: {
      value: String,
      type: String,
      onChange: Function,
      placeholder: String,
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      state: { // true = success, false = error
        type: Boolean,
        default: () => null
      },
      errorMsg: String
    }
  }
</script>


<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .input {
    @include flex(column);
    margin-bottom: 16px;
    font-weight: bold;

    &__label {
      color: map-get($PRIMARY, TEAL);
      font-size: 0.95rem;
      margin-bottom: 3px;
    }

    &__form {
      @include transition(border-color);
      border: 1.5px solid #868686;
      font-family: $FONT;
      background-color: transparent;
      color: $TEXT;
      outline: none;
      font-size: 0.95rem;
      border-radius: 6px;
      padding: 18px 14px 13px;
      font-weight: bold;

      &:focus {
        border-color: map-get($PRIMARY, TEAL);
      }

      &--success {
        &, &:focus {
          border-color: map-get($STATE, SUCCESS);
        }
      }

      &--error {
        &, &:focus {
          border-color: map-get($STATE, ERROR);
        }
      }
    }

    &__error {

    }
  }
</style>
