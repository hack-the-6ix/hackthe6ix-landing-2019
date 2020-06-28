<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Information</h2>
    <Input
      class="apply__input"
      name="first_name"
      placeholder="e.g. John"
      label="First Name"
      required
    />
    <Input
      class="apply__input"
      name="last_name"
      placeholder="e.g. Doe"
      label="Last Name"
      required
    />
    <Input
      class="apply__input"
      name="email"
      type="email"
      placeholder="e.g. john@hackthe6ix.com"
      label="Email"
      :state="typeof emailError === 'string' ? !Boolean(emailError) : undefined"
      :errorMsg="emailError"
      required
    />
    <Checkbox
      class="apply__input"
      name="casl_acceptance"
      label="I allow Hack The 6ix to send me emails containing information from the event sponsors."
    />
    {{/*<Select
      class="apply__input"
      label="Gender"
      name="gender"
      :options="genders"
      :blur="blur"
      required
    />
    <Select
      class="apply__input"
      label="Timezone"
      name="timezone"
      :options="timezones"
      :blur="blur"
      required
    />
    <Select
      class="apply__input"
      label="Country"
      name="country"
      description="Note: If you are outside of Canada, we will not be shipping Hack the 6ix swag to your address."
      :options="countries"
      :blur="blur"
      required
    />
    <div v-if="country_ === 'Canada'">
      <Input
        class="apply__input"
        name="address_line_1"
        placeholder="123 Hack the 6ix Blvd"
        label="Address Line 1"
      />
      <Input
        class="apply__input"
        name="address_line_2"
        placeholder="Unit 6"
        label="Address Line 2"
      />
      <Input
        class="apply__input"
        name="city"
        placeholder="Toronto"
        label="City"
      />
      <Select
        class="apply__input"
        label="Province"
        name="province"
        :options="provinces"
        @blur="blur"
      />
      <Input
        class="apply__input"
        name="postal_code"
        placeholder="M5S 2E4"
        label="Postal Code"
      />
    </div>*/}}
    Some timezone debug stuff: {{ timezone_ || 'No timezone data :(' }}
  </div>
</template>

<script>
import Checkbox from '@hackthe6ix/vue-ui/Checkbox';
import Select from '@hackthe6ix/vue-ui/Select';
import Input from '@hackthe6ix/vue-ui/Input';

import {
  GENDER_ENUM,
  HAS_EMAIL,
  TIMEZONES,
  PROVINCES_ENUM,
  COUNTRIES_ENUM,
} from '@graphql';
import {validate, query} from '@utils';

export default {
  name: 'Personal',
  components: {
    Input,
    Select,
    Checkbox,
  },
  methods: {
    blur() {
      this.$el.focus();
    },
    async check() {
      this.$emit(
        'update:valid',
        true,
      );
    },
  },
};
</script>
