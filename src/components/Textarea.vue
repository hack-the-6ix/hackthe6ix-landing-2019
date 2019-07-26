<template>
  <div class='textarea'>
    <label class='textarea__label' :htmlFor='name'>{{ label + (required ? '*' : '') }}</label>
    <textarea
      @input='handler'
      :placeholder='placeholder'
      :aria-errormessage='name'
      class='textarea__form'
      :aria-invaild='error'
      :value='value'
      :name='name'
      rows='4'
    />
  </div>
</template>

<script>
  export default {
    name: 'Textarea',
    methods: {
      handler({ target }) {
        this.$emit('input', target.value);
        target.style = 'height: auto; padding: 0';
        target.style = `height: ${target.scrollHeight}px`;
      }
    },
    computed: {
      error() {
        return this.state === false;
      }
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: [ String, Number ],
      required: Boolean,
      placeholder: String,
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

  .textarea {
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
      resize: none;
      border: 1.5px solid #868686;
      font-family: $FONT;
      background-color: transparent;
      overflow: hidden;
      color: $TEXT;
      outline: none;
      font-size: 0.95rem;
      border-radius: 6px;
      padding: 13px 14px;
      font-weight: bold;

      &:focus {
        border-color: map-get($PRIMARY, TEAL);
      }
    }
  }
</style>
