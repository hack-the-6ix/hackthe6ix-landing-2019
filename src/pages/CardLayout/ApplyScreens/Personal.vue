<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Information</h2>
    <Input
      class="apply__input"
      name="first_name"
      placeholder="e.g. John"
      label="First Name"
      autocomplete="given-name"
      :maxlength="128"
      :tabindex="current ? undefined : -1"
      :validate="
        value => !(value && value.length > 0) && 'First name is required'
      "
      required
    />
    <Input
      class="apply__input"
      name="last_name"
      placeholder="e.g. Doe"
      label="Last Name"
      autocomplete="last-name"
      :maxlength="128"
      :validate="
        value => !(value && value.length > 0) && 'Last name is required'
      "
      required
    />
    <Input
      class="apply__input"
      name="email"
      type="email"
      autocomplete="email"
      placeholder="e.g. john@hackthe6ix.com"
      label="Email"
      :maxlength="128"
      :tabindex="current ? undefined : -1"
      :error="form_errors.email"
      :validate="validateEmail"
      required
    />
    <Checkbox
      class="apply__input"
      name="casl_acceptance"
      :tabindex="current ? undefined : -1"
      label="I allow Hack The 6ix to send me emails containing information from the event sponsors."
    />
    <Input
      class="apply__input"
      name="phone"
      placeholder="(555) 024 9669"
      label="Phone number"
      autocomplete="tel"
      :maxlength="15"
      :validate="
        value => !(value && value.length > 0) && 'Phone number is required'
      "
      required
    />
    <Select
      class="apply__input"
      label="Gender"
      name="gender"
      :tabindex="current ? undefined : -1"
      :options="genders"
      :blur="blur"
      :validate="value => !(value && value.length > 0) && 'Gender is required'"
      required
    />
  </div>
</template>

<script>
import Checkbox from '@hackthe6ix/vue-ui/Checkbox';
import Select from '@hackthe6ix/vue-ui/Select';
import Input from '@hackthe6ix/vue-ui/Input';

import {
  GENDERS,
  HAS_EMAIL,
  TIMEZONES,
  PROVINCES_ENUM,
  COUNTRIES,
} from '@graphql';
import {validate, query} from '@utils';

export default {
  name: 'Personal',
  inject: ['form_data', 'form_errors'],
  components: {
    Input,
    Select,
    Checkbox,
  },
  data() {
    return {
      genders: GENDERS,
      countries: COUNTRIES,
      provinces: PROVINCES_ENUM,
      timezones: TIMEZONES,
    };
  },
  props: {
    current: Boolean,
  },
  methods: {
    blur() {
      this.$el.focus();
    },
    async validateEmail(email) {
      if (email && email.length > 0 && validate(email, 'email')) {
        const hasEmail = await query(HAS_EMAIL, {
          email: email,
        });
        return hasEmail && 'Email Already in use';
      }
      return 'Please provide a valid email';
    },
  },
  computed: {
    addressVisible() {
      return this.form_data.country === 'Canada';
    },
  },
};
</script>
