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
      class="apply__input"
      label="Gender"
      name="gender"
      v-model="gender_"
      :options="genders"
      :blur="blur"
      required
    />
    <Select
      class="apply__input"
      label="Timezone"
      name="timezone"
      v-model="timezone_"
      :options="timezones"
      :blur="blur"
      required
    />
    <Select
      class="apply__input"
      label="Country"
      name="country"
      description="Note: If you are outside of Canada, we will not be shipping Hack the 6ix swag to your address."
      v-model="country_"
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
        v-model="address_line_1_"
      />
      <Input
        class="apply__input"
        name="address_line_2"
        placeholder="Unit 6"
        label="Address Line 2"
        v-model="address_line_2_"
      />
      <Input
        class="apply__input"
        name="city"
        placeholder="Toronto"
        label="City"
        v-model="city_"
      />
      <Select
        class="apply__input"
        label="Province"
        name="province"
        v-model="province_"
        :options="provinces"
        :blur="blur"
      />
      <Input
        class="apply__input"
        name="postal_code"
        placeholder="M5S 2E4"
        label="Postal Code"
        v-model="postal_code_"
      />
    </div>
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
  props: {
    first_name: String,
    last_name: String,
    email: String,
    casl_acceptance: Boolean,
    gender: Number,
    valid: Boolean,
    page: Number,
    timezone: String,
    address_line_1: String,
    address_line_2: String,
    city: String,
    province: String,
    postal_code: String,
    country: String,
  },
  data() {
    return {
      first_name_: this.first_name,
      last_name_: this.last_name,
      email_: this.email,
      casl_acceptance_: this.casl_acceptance,
      gender_: this.gender,
      genders: Object.values(GENDER_ENUM),
      countries: Object.values(COUNTRIES_ENUM),
      provinces: PROVINCES_ENUM,
      timezone_: this.timezone,
      timezones: TIMEZONES,
      emailError: undefined,
      address_line_1_: this.address_line_1,
      address_line_2_: this.address_line_2,
      city_: this.city,
      province_: this.province,
      postal_code_: this.postal_code,
      country_: this.country,
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
    country_(val) {
      this.$emit('update:country', val);
    },
    address_line_1_(val) {
      this.$emit('update:address_line_1', val);
    },
    address_line_2_(val) {
      this.$emit('update:address_line_1', val);
    },
    city_(val) {
      this.$emit('update:city', val);
    },
    postal_code_(val) {
      this.$emit('update:postal_code', val);
    },
    page() {
      if (this.$el.getAttribute('data-current') === 'true') {
        this.check();
      }
    },
  },
};
</script>
