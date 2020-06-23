<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Information</h2>
    <Input
      class="apply__input"
      name="first_name"
      placeholder="e.g. John"
      label="First Name"
      v-model="first_name_"
      required
    />
    <Input
      class="apply__input"
      name="last_name"
      placeholder="e.g. Doe"
      label="Last Name"
      v-model="last_name_"
      required
    />
    <Input
      class="apply__input"
      name="email"
      type="email"
      placeholder="e.g. john@hackthe6ix.com"
      label="Email"
      v-model="email_"
      :state="typeof emailError === 'string' ? !Boolean(emailError) : undefined"
      :errorMsg="emailError"
      required
    />
    <Checkbox
      class="apply__input"
      name="acceptance"
      label="I allow Hack The 6ix to send me emails containing information from the event sponsors."
      v-model="casl_acceptance_"
    />
    <Select
      label="Gender"
      name="gender"
      v-model="gender_"
      :options="genders"
      :blur="blur"
      required
    />
    <Dropdown
      label="Timezone"
      name="timezone"
      v-model="timezone_"
      :options="timezones"
      :blur="blur"
      required
    />
    asd {{ timezone_ }} {{ timezone_.length }}
  </div>
</template>

<script>
import {Input, Select, Checkbox, Dropdown} from '@components';
import {GENDER_ENUM, HAS_EMAIL, TIMEZONES} from '@graphql';
import {validate, query} from '@utils';

export default {
  name: 'Personal',
  components: {
    Dropdown,
    Input,
    Select,
    Checkbox,
  },
  props: {
    first_name: String,
    last_name: String,
    email: String,
    casl_acceptance: Boolean,
    gender: Number,
    valid: Boolean,
    page: Number,
    timezone: String,
  },
  data() {
    return {
      first_name_: this.first_name,
      last_name_: this.last_name,
      email_: this.email,
      casl_acceptance_: this.casl_acceptance,
      gender_: this.gender,
      genders: Object.values(GENDER_ENUM),
      timezone_: this.timezone,
      timezones: TIMEZONES,
      emailError: undefined,
    };
  },
  updated() {
    if (this.$el.getAttribute('data-current') === 'true') {
      this.check();
    }
  },
  methods: {
    blur() {
      this.$el.focus();
    },
    async check() {
      this.$emit(
        'update:valid',
        Boolean(
          (await this.validateEmail()) &&
            this.first_name_.length > 0 &&
            this.last_name_.length > 0 &&
            this.gender_ >= 0 &&
            this.timezone_.length > 0,
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
    casl_acceptance_(val) {
      this.$emit('update:casl_acceptance', val);
    },
    gender_(val) {
      this.$emit('update:gender', val);
    },
    timezone_(val) {
      this.$emit('update:timezone', val);
    },
    page() {
      if (this.$el.getAttribute('data-current') === 'true') {
        this.check();
      }
    },
  },
};
</script>
