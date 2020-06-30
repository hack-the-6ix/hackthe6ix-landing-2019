<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Information</h2>
    <Input
      class="apply__input"
      name="first_name"
      placeholder="e.g. John"
      label="First Name"
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
      :validate="
        value => !(value && value.length > 0) && 'Last name is required'
      "
      required
    />
    <Input
      class="apply__input"
      name="email"
      type="email"
      placeholder="e.g. john@hackthe6ix.com"
      label="Email"
      :error="form_errors.email"
      :validate="validateEmail"
      required
    />
    <Checkbox
      class="apply__input"
      name="casl_acceptance"
      label="I allow Hack The 6ix to send me emails containing information from the event sponsors."
    />
    <Select
      class="apply__input"
      label="Gender"
      name="gender"
      :options="genders"
      :blur="blur"
      :validate="value => !(value && value.length > 0) && 'Gender is required'"
      required
    />
    <Select
      class="apply__input"
      label="Timezone"
      name="timezone"
      :options="timezones"
      :validate="
        value => !(value && value.length > 0) && 'Timezone is required'
      "
      :blur="blur"
      required
    />
    <Select
      class="apply__input"
      label="Country"
      name="country"
      description="Note: If you are outside of Canada, we will not be shipping Hack the 6ix swag to your address."
      :validate="value => !(value && value.length > 0) && 'Country is required'"
      :options="countries"
      :blur="blur"
      required
    />
    <div v-if="countries[form_data.country] === 'Canada'">
      <Input
        class="apply__input"
        name="address_line_1"
        placeholder="e.g. 123 Hack the 6ix Blvd"
        :validate="
          value =>
            !addressActive &&
            !(value && value.length > 0) &&
            'Address line 1 is required'
        "
        label="Address Line 1"
      />
      <Input
        class="apply__input"
        name="address_line_2"
        placeholder="e.g. Unit 6"
        label="Address Line 2"
      />
      <Input
        class="apply__input"
        name="city"
        placeholder="e.g. The 6ix"
        :validate="
          value =>
            !addressActive && !(value && value.length > 0) && 'City is required'
        "
        label="City"
      />
      <Select
        class="apply__input"
        label="Province"
        name="province"
        :options="provinces"
        :validate="
          value =>
            !addressActive &&
            !(value && value.length > 0) &&
            'Province is required'
        "
        @blur="blur"
      />
      <Input
        class="apply__input"
        name="postal_code"
        placeholder="e.g. M5S 2E4"
        :validate="
          value =>
            !addressActive &&
            !(value && value.length > 0) &&
            'Postal code is required'
        "
        label="Postal Code"
      />
    </div>
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
    addressActive() {
      const addressFields = [
        'address_line_1',
        'address_line_2',
        'city',
        'province',
        'postal_code',
      ];

      for (let i = 0; i < addressFields.length; i++) {
        if (
          this.form_data[addressFields[i]] &&
          this.form_data[addressFields[i]].length > 0
        ) {
          return true;
        }
      }

      return false;
    },
  },
};
</script>
