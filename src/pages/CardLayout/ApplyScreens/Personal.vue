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
      type="email"
      placeholder="e.g. hunter2@hackthe6ix.com"
      label="Email"
      v-model="email_"
      :state="typeof emailError === 'string' ? !Boolean(emailError) : undefined"
      :errorMsg="emailError"
      required
    />
    <Select
      label="Gender"
      name="gender"
      v-model="gender_"
      :options="genders"
      required
    />
  </div>
</template>

<script>
import {Input, Select} from '@components';
import {GENDER_ENUM, HAS_EMAIL} from '@graphql';
import {validate, query} from '@utils';

export default {
  name: 'Personal',
  components: {
    Input,
    Select,
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
      genders: Object.values(GENDER_ENUM),
      emailError: undefined,
    };
  },
  updated() {
    if (this.$el.getAttribute('data-current') === 'true') {
      this.check();
    }
  },
  methods: {
    async check() {
      this.$emit(
        'update:valid',
        Boolean(
          (await this.validateEmail()) &&
            this.first_name_.length > 0 &&
            this.last_name_.length > 0 &&
            this.gender_ >= 0,
        ),
      );
    },
    async validateEmail() {
      if (this.email_.length === 0) {
        this.emailError = undefined;
        return undefined;
      }

      if (validate(this.email_, 'email')) {
        const hasEmail = await query(HAS_EMAIL, {
          email: this.email,
        });
        this.emailError = hasEmail ? 'Email Already in use' : '';
        return !hasEmail;
      }
      this.emailError = 'Please provide a valid email';
      return false;
    },
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
};
</script>
