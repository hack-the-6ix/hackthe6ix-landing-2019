<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Information</h2>
    <Input
      class="apply__input"
      name="first_name"
      placeholder="e.g. Dennis"
      label="First Name"
      v-model="first_name_"
      required
    />
    <Input
      class="apply__input"
      name="last_name"
      placeholder="e.g. Lyninx"
      label="Last Name"
      v-model="last_name_"
      required
    />
    <Input
      class="apply__input"
      name="email"
      type='email'
      placeholder="e.g. hunter2@hackthe6ix.com"
      label="Email"
      v-model="email_"
      :state='validateEmail()'
      errorMsg='Please provide a valid email'
      required
    />
    <Select
      label="Gender"
      name="gender"
      v-model="gender_"
      :options='["Male", "Female", "Prefer not to say"]'
      required
    />
  </div>
</template>

<script>
  import { Input, Select } from '@components';
  import { validate } from '@utils';

  export default {
    name: 'Personal',
    components: {
      Input,
      Select
    },
    props: {
      first_name: String,
      last_name: String,
      email: String,
      gender: Number,
      valid: Boolean,
    },
    data() {
      return {
        first_name_: this.first_name,
        last_name_: this.last_name,
        email_: this.email,
        gender_: this.gender,
      };
    },
    updated() {
      if (this.$el.getAttribute('data-current') === 'true') {
        this.check();
      }
    },
    methods: {
      check() {
        this.$emit('update:valid', (
          this.first_name_.length > 0 &&
          this.last_name_.length > 0 &&
          this.validateEmail() &&
          this.gender_ >= 0
        ));
      },
      validateEmail() {
        return this.email_.length === 0 ? undefined : validate(this.email_, 'email');
      }
    },
    watch: {
      first_name_(val) {
        this.$emit('update:first_name', val);
      },
      last_name_(val) {
        this.$emit('update:last_name', val);
      },
      email_(val) {
        this.$emit('update:email', val);
      },
      gender_(val) {
        this.$emit('update:gender', val);
      },
    },
  }
</script>