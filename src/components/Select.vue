<template>
  <div class='select'>
    <label class='select__label' :htmlFor='name'>{{ label + (required ? '*' : '') }}</label>
    <ul class='select__items'>
      <li
        :class='"select__item" + (value === i ? " select__item--active" : "")'
        @click="$emit('click', i)"
        v-for='(option, i) in options'
        :key='i'
      >
        {{ option }}
      </li>
    </ul>
    <label :id='name' class='select__error' v-if='error'>{{ errorMsg }}</label>
  </div>
</template>

<script>
  export default {
    name: 'Select',
    data() {
      return {
        selected: -1
      };
    },
    model: {
      prop: 'value',
      event: 'click'
    },
    computed: {
      error() {
        return this.state === false;
      }
    },
    props: {
      value: Number,
      required: Boolean,
      options: {
        type: Array,
        default: () => []
      },
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
      errorMsg: [ String, Boolean ]
    },
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .select {
    font-weight: bold;

    &__label {
      color: map-get($PRIMARY, TEAL);
      font-size: 0.95rem;
      margin-bottom: 4px;
    }

    &__items {
      @include flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    &__item {
      @include transition(color background-color border-color);
      text-align: center;
      margin: 5px 10px 5px 0;
      padding: 10px 28px;
      border-radius: 6px;
      border: 1.5px solid #868686;
      cursor: pointer;
      color: #868686;

      &:hover:not(&--active) {
        color: map-get($PRIMARY, TEAL);
        border-color: map-get($PRIMARY, TEAL);
      }

      &--active {
        color: white;
        background-color: map-get($PRIMARY, TEAL);
        border-color: map-get($PRIMARY, TEAL);
      }
    }

    &__error {
      margin-top: 8px;
      color: map-get($STATE, ERROR);
    }
  }
</style>
