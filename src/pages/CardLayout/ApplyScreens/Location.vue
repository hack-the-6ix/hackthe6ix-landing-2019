<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Location</h2>
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
    <Select
      class="apply__input"
      label="Country"
      name="country"
      :maxlength="128"
      :limit="5"
      description="Note: We will only be shipping swag to hackers residing in Canada"
      :validate="value => !(value && value.length > 0) && 'Country is required'"
      :tabindex="current ? undefined : -1"
      :options="countries"
      :blur="blur"
      required
    />
  </div>
</template>

<script>
import Select from '@hackthe6ix/vue-ui/Select';
import Input from '@hackthe6ix/vue-ui/Input';

import {GENDERS, TIMEZONES, PROVINCES_ENUM, COUNTRIES} from '@graphql';

export default {
  name: 'Location',
  inject: ['form_data', 'form_errors'],
  components: {
    Input,
    Select,
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
  },
  computed: {
    addressVisible() {
      return COUNTRIES[this.form_data.country] === 'Canada';
    },
  },
};
</script>
