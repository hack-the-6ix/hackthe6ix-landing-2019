<template>
  <div class="input">
    <label v-if="label" class="input__label" :htmlFor="name">{{
      label + (required ? '*' : '')
    }}</label>
    <input
      :class="{'input__form--success': state, 'input__form--error': error}"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
      :aria-errormessage="name"
      :aria-invaild="error"
      :disabled="disabled"
      class="input__form"
      :value="value"
      :name="name"
      :type="type"
      :max="max"
      :min="min"
    />
    <label :id="name" class="input__error" v-if="error">{{ errorMsg }}</label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  computed: {
    error() {
      return this.state === false;
    },
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: [String, Number],
    type: String,
    disabled: Boolean,
    required: Boolean,
    placeholder: String,
    label: String,
    max: [String, Number],
    min: [String, Number],
    name: {
      type: String,
      required: true,
    },
    state: {
      // true = success, false = error
      type: Boolean,
      default: () => null,
    },
    errorMsg: String,
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.input {
  @include flex(column);
  margin-bottom: 16px;
  font-weight: bold;

  &__label {
    color: map-get($PRIMARY, TEAL);
    font-size: 0.95rem;
    margin-bottom: 4px;
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
    padding: 13px 14px;
    font-weight: bold;

    &:focus {
      border-color: map-get($PRIMARY, TEAL);
    }

    &:disabled {
      opacity: 0.6;
    }

    &--success {
      &,
      &:focus {
        border-color: map-get($STATE, SUCCESS);
      }
    }

    &--error {
      &,
      &:focus {
        border-color: map-get($STATE, ERROR);
      }
    }
  }

  &__error {
    margin-top: 8px;
    color: map-get($STATE, ERROR);
  }
}
</style>
