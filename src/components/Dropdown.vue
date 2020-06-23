<template>
  <div class="dropdown">
    <label class="dropdown__label" :htmlFor="name" v-show="label">{{
      label + (required ? '*' : '')
    }}</label>
    <select class="dropdown__selector">
      <option value="" disabled selected>Select your option</option>
      <option
        v-for="(option, i) in options"
        tabindex="-1"
        :key="i"
        v-on:keydown.enter="$emit('dropdownSelect', option)"
        @click="$emit('dropdownSelect', option)"
        :selected="value === option"
      >
        {{ option }}
      </option>
    </select>
    <label :id="name" class="dropdown__error" v-if="error">
      {{ errorMsg }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  model: {
    prop: 'value',
    event: 'dropdownSelect',
  },
  computed: {
    error() {
      return this.state === false;
    },
  },
  props: {
    value: String,
    required: Boolean,
    options: {
      type: Array,
      default: () => [],
    },
    label: String,
    name: {
      type: String,
      required: true,
    },
    state: {
      // true = success, false = error
      type: Boolean,
      default: () => null,
    },
    errorMsg: [String, Boolean],
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.dropdown {
  font-weight: bold;
  margin-bottom: 16px;

  &__selector {
    max-width: 100%;
  }
  &__label {
    color: map-get($PRIMARY, TEAL);
    font-size: 0.95rem;
    margin-bottom: 4px;
  }
  &__error {
    margin-top: 8px;
    color: map-get($STATE, ERROR);
  }
}
</style>
