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
    <Select
      class="apply__input"
      label="Timezone"
      name="timezone"
      :tabindex="current ? undefined : -1"
      :options="timezones"
      :validate="
        value => !(value && value.length > 0) && 'Timezone is required'
      "
      autocomplete="country-name"
      :blur="blur"
      required
    />
    <div v-if="addressVisible">
      <!-- Validation for these fields are a bit more complicated and are handled in Apply.vue -->
      <Input
        class="apply__input"
        name="address_line_1"
        :maxlength="128"
        placeholder="e.g. 123 Hack the 6ix Blvd"
        :tabindex="addressVisible && current ? undefined : -1"
        autocomplete="address-line1"
        label="Address Line 1"
      />
      <Input
        class="apply__input"
        name="address_line_2"
        :maxlength="128"
        placeholder="e.g. Unit 6"
        label="Address Line 2"
        autocomplete="address-line2"
        :tabindex="addressVisible && current ? undefined : -1"
      />
      <Input
        class="apply__input"
        name="city"
        :maxlength="128"
        placeholder="e.g. The 6ix"
        autocomplete="address-level2"
        :tabindex="addressVisible && current ? undefined : -1"
        label="City"
      />
      <Select
        class="apply__input"
        label="Province"
        name="province"
        :maxlength="128"
        :tabindex="addressVisible && current ? undefined : -1"
        :options="provinces"
        @blur="blur"
      />
      <Input
        class="apply__input"
        name="postal_code"
        :maxlength="7"
        autocomplete="postal-code"
        placeholder="e.g. M5S 2E4"
        :tabindex="addressVisible && current ? undefined : -1"
        label="Postal Code"
      />
    </div>
    <ComboBox
      class="apply__input"
      label="Country"
      name="country"
      :maxlength="128"
      description="Note: If you are outside of Canada, we will not be shipping Hack the 6ix swag to your address."
      :validate="value => !(value && value.length > 0) && 'Country is required'"
      :tabindex="current ? undefined : -1"
      :options="countries"
      :blur="blur"
      required
    />
  </div>
</template>

<script>
import Checkbox from '@hackthe6ix/vue-ui/Checkbox';
import ComboBox from '@hackthe6ix/vue-ui/ComboBox';
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
    ComboBox,
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
