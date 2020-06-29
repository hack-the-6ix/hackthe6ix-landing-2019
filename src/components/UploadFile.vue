<template>
  <div class="file">
    <label v-if="label" class="file__label" :htmlFor="name">{{
      label + (required ? '*' : '')
    }}</label>
    <div
      :class="{'file__form--active': value, 'file__form--error': errorMsg}"
      class="file__form"
    >
      {{ display }}
      <input
        @change="$emit('input', $event.target.files[0])"
        :aria-errormessage="name"
        :aria-invaild="error"
        :disabled="disabled"
        class="file__input"
        tabindex="-1"
        :name="name"
        type="file"
      />
    </div>
    <Button
      :disabled="!value"
      v-on:click.native="$emit('input')"
      secondary
      icon="trash"
    />
    <label :id="name" class="file__error" v-if="error">{{ errorMsg }}</label>
  </div>
</template>

<script>
import Button from '@hackthe6ix/vue-ui/src/Button';
const defaultMsg = 'Drag your file(s) here or click to browse';

export default {
  name: 'UploadFile',
  components: {
    Button,
  },
  computed: {
    error() {
      return this.state === false;
    },
  },
  data() {
    return {
      display: defaultMsg,
    };
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: File,
    disabled: Boolean,
    required: Boolean,
    label: String,
    name: {
      type: String,
      required: true,
    },
    errorMsg: String,
  },
  watch: {
    value(val) {
      this.display = val ? val.name : defaultMsg;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.file {
  @include flex();
  margin-bottom: 16px;
  flex-wrap: wrap;
  font-weight: bold;

  &__label {
    color: map-get($PRIMARY, TEAL);
    width: 100%;
    font-size: 0.95rem;
    margin-bottom: 4px;
  }

  &__form {
    @include transition(border-color color);
    flex-grow: 1;
    margin-right: 6px;
    position: relative;
    border: 1.5px solid #868686;
    background-color: transparent;
    color: #868686;
    font-size: 0.95rem;
    border-radius: 6px;
    padding: 13px 14px;
    font-weight: bold;

    &:hover,
    &--active {
      border-color: map-get($PRIMARY, TEAL);
      color: map-get($PRIMARY, TEAL);
    }
  }

  &__input {
    @include position(absolute);
    border-radius: 6px;
    opacity: 0;
    outline: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  &__error {
    margin-top: 8px;
    width: 100%;
    color: map-get($STATE, ERROR);
  }
}
</style>
