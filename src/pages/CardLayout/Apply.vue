<template>
  <Card class="apply">
    <h1 class="apply__title">Hack The 6ix Application Form</h1>
    <div class="apply__pages" :style="height && `height: ${height}px`">
      <Personal :current="page === 0" />
      <!-- Height is initially 0 to ensure card height is correct -->
      <Location :current="page === 1" style="height: 0" />
      <Experience :current="page === 2" style="height: 0" />
      <Hackathon :current="page === 3" style="height: 0" />
      <Finish :email="form_data.email" style="height: 0" />
    </div>
    <div class="apply__controls">
      <Button
        secondary
        v-if="page !== end"
        class="apply__button apply__button--main apply_button--right"
        v-on:click.native="back()"
        :disabled="page === 0"
      >
        Back
      </Button>

      <Button
        v-if="page !== end"
        class="apply__button apply_button--right"
        v-on:click.native="page === end - 1 ? submit() : next()"
        :loading="loading"
        :disabled="!valid"
      >
        {{ page === end - 1 ? 'Submit' : 'Next' }}
      </Button>

      <Button
        v-if="page === end"
        class="apply__button"
        v-on:click.native="$router.push('/dash/' + id)"
        icon="address-card"
      >
        To Dashboard
      </Button>
    </div>
    <Modal :show.sync="showModal">
      <h2 class="apply__title">Application Error</h2>
      <p>Something unexpected happened. Please try again later.</p>
      <p>{{ error }}</p>
    </Modal>
  </Card>
</template>

<script>
import formProvider from '@hackthe6ix/vue-ui/utils/mixins/formProvider';
import Button from '@hackthe6ix/vue-ui/Button';
import {Card, Modal} from '@components';
import * as Screens from './ApplyScreens';
import {query, toBase64} from '@utils';
const end = Math.max(Object.values(Screens).length - 1, 0);
import Vue from 'vue';

import {
  APPLY,
  YEAR_OF_STUDY_ENUM,
  GENDERS,
  GRADUATION_YEARS,
  TIMEZONES,
  COUNTRIES,
} from '@graphql';

export default {
  name: 'Info',
  path: '/apply',
  inject: ['form_data', 'form_errors'],
  mixins: [
    formProvider({
      first_name: '',
      last_name: '',
      email: '',
      casl_acceptance: false,
      gender: '',
      timezone: '',
      address_line_1: '',
      address_line_2: '',
      phone: '',
      city: '',
      province: '',
      postal_code: '',
      country: '',
      school: '',
      program_of_study: '',
      year_of_study: -1,
      year_of_graduation: -1,
      resume: null,
      resume_permission: false,
      portfolio: '',
      github: '',
      hack_count: '',
      pitch: '',
      topics: '',
      team_members: [],
    }),
  ],
  components: {
    ...Screens,
    Button,
    Modal,
    Card,
  },
  data() {
    return {
      // Others
      showModal: false,
      loading: false,
      height: 0,
      page: 0,
      error: '',
      end,

      // Fields to watch for validation
      validationFields: [
        [
          {
            name: 'first_name',
            required: true,
          },
          {
            name: 'last_name',
            required: true,
          },
          {
            name: 'email',
            required: true,
          },
          {
            name: 'phone',
            required: true,
          },
          {
            name: 'gender',
            required: true,
          },
        ],
        [
          {
            name: 'timezone',
            required: true,
          },
          {
            name: 'country',
            required: true,
          },
          {
            name: 'address_line_1',
            required: false,
          },
          {
            name: 'address_line_2',
            required: false,
          },
          {
            name: 'city',
            required: false,
          },
          {
            name: 'province',
            required: false,
          },
          {
            name: 'postal_code',
            required: false,
          },
        ],
        [
          {
            name: 'school',
            required: true,
          },
          {
            name: 'program_of_study',
            required: true,
          },
          {
            name: 'year_of_study',
            required: true,
          },
          {
            name: 'year_of_graduation',
            required: true,
          },
          {
            name: 'resume',
            required: true,
          },
          {
            name: 'portfolio',
            required: false,
          },
          {
            name: 'github',
            required: false,
          },
        ],
        [
          {
            name: 'pitch',
            required: true,
          },
          {
            name: 'topics',
            required: false,
          },
          {
            name: 'hack_count',
            required: true,
          },
          {
            name: 'team_members',
            required: false,
          },
        ],
      ],

      addressValidationFields: [
        {
          name: 'address_line_1',
          required: true,
        },
        {
          name: 'address_line_2',
          required: false,
        },
        {
          name: 'city',
          required: true,
        },
        {
          name: 'province',
          required: true,
        },
        {
          name: 'postal_code',
          required: true,
        },
      ],

      addressLabelLookup: {
        address_line_1: 'Address Line 1',
        address_line_2: 'Address Line 2',
        city: 'City',
        province: 'Province',
        postal_code: 'Postal Code',
      },

      yearsOfStudy: Object.keys(YEAR_OF_STUDY_ENUM),
      graduationYears: GRADUATION_YEARS,

      // Courtesy of https://gist.github.com/nery/9118763
      postalRegex: new RegExp(
        /^\s*[a-ceghj-npr-tvxy]\d[a-ceghj-npr-tv-z](\s)?\d[a-ceghj-npr-tv-z]\d\s*$/i,
      ),
    };
  },
  mounted() {
    window.addEventListener('load', this.shiftPages);
  },
  beforeDestory() {
    window.removeEventListener('load', this.shiftPages);
  },
  methods: {
    confirmHome() {
      alert('why u wanna leave?');
    },
    shiftPages() {
      const pages = Array.from(document.querySelectorAll('.apply__page'));
      pages.forEach((page, i) => {
        const current = this.page === i;
        page.style.transform = `translateX(${this.page *
          -100}%) translateX(${this.page * -60}px)`;
        page.style.opacity = current ? 1 : 0;
        page.style.height = current ? '100%' : 0;
      });
    },
    next() {
      this.page++;
      this.shiftPages();
    },
    back() {
      this.page--;
      this.shiftPages();
    },
    validateAddress() {
      for (let i = 0; i < this.addressValidationFields.length; i++) {
        const fieldName = this.addressValidationFields[i].name;
        const formattedName = this.addressLabelLookup[fieldName] || fieldName;
        const fieldEmpty =
          !this.form_data[fieldName] || this.form_data[fieldName].length === 0;

        if (
          COUNTRIES[this.form_data.country] === 'Canada' &&
          this.addressActive
        ) {
          // Special case for postal code
          if (
            fieldName === 'postal_code' &&
            !this.postalRegex.test(this.form_data['postal_code'])
          ) {
            Vue.set(this.form_errors, fieldName, 'Postal Code is invalid');
          } else if (this.addressValidationFields[i].required && fieldEmpty) {
            const errorMsg = `${formattedName} is required to complete address`;

            Vue.set(this.form_errors, fieldName, errorMsg);
          } else {
            Vue.set(this.form_errors, fieldName, false);
          }
        } else {
          Vue.set(this.form_errors, fieldName, false);
        }
      }
    },
    async submit() {
      this.loading = true;
      try {
        let submission = {
          app: {
            name: this.form_data.first_name,
            lname: this.form_data.last_name,
            email: this.form_data.email,
            casl_acceptance: this.form_data.casl_acceptance,
            gender: GENDERS[this.form_data.gender],
            timezone: TIMEZONES[this.form_data.timezone],
            country: COUNTRIES[this.form_data.country],
            school: this.form_data.school,
            phone: this.form_data.phone,
            program_of_study: this.form_data.program_of_study,
            year_of_study: this.form_data.year_of_study,
            year_of_graduation: this.graduationYears[
              this.form_data.year_of_graduation
            ],
            resume: await toBase64(this.form_data.resume),
            resume_permission: this.form_data.resume_permission,
            portfolio: this.form_data.portfolio,
            github: this.form_data.github,
            hack_count: parseInt(this.form_data.hack_count),
            pitch: this.form_data.pitch,
            topics: this.form_data.topics,
            team_members: this.form_data.team_members,
          },
        };

        const address = {
          address_line_1: this.form_data.address_line_1,
          address_line_2: this.form_data.address_line_2,
          city: this.form_data.city,
          province: this.form_data.province,
          postal_code: this.form_data.postal_code,
        };

        // If any address fields are not empty, include it with the submission.
        // Any errors will be handled by the API
        if (COUNTRIES[this.form_data.country] === 'Canada') {
          for (let i = 0; i < Object.keys(address).length; i++) {
            const entry = address[Object.keys(address)[i]];
            if (entry && entry.length > 0) {
              submission.app.address = address;
              break;
            }
          }
        }
        const {user_errors, applicant} = await query(APPLY, submission);

        if (user_errors) {
          this.error = user_errors;
          this.showModal = true;
        } else {
          this.id = applicant.id;
          this.next();
        }
      } catch (err) {
        this.error = err;
        this.showModal = true;
      }
    },
  },
  watch: {
    page() {
      this.shiftPages();
    },
  },
  computed: {
    valid: function() {
      this.validateAddress();

      const fields = this.validationFields[this.page];

      for (let i = 0; i < fields.length; i++) {
        const required = fields[i].required;
        const error = this.form_errors[fields[i].name];

        if (error !== false && (required || error !== undefined)) {
          return false;
        }
      }

      return true;
    },
    addressActive: function() {
      for (let i = 0; i < this.addressValidationFields.length; i++) {
        if (
          this.form_data[this.addressValidationFields[i].name] &&
          this.form_data[this.addressValidationFields[i].name].length > 0
        ) {
          return true;
        }
      }

      return false;
    },
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.apply {
  @include transition(max-width);
  margin-bottom: auto;
  max-width: 500px;
  width: 80%;

  &__title {
    margin: 0;
    color: $TEXT;
  }

  &__pages {
    @include transition(height);
    @include flex;
    overflow: hidden;
    position: relative;
  }

  &__page {
    @include transition(opacity transform, SLOW);
    flex-shrink: 0;
    margin-right: 60px;
    margin-bottom: auto;
    width: 100%;
  }

  &__subtitle {
    color: map-get($PRIMARY, TEAL);
    margin: 0;
  }

  &__input {
    margin-top: 20px;
  }

  &__controls {
    @include flex();
    margin-top: 20px;
  }

  &__button {
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 15px;

    &--right {
      float: right;
    }
  }
}

@include media(PHONE) {
  .apply {
    border-radius: 0;
    width: 100%;

    &__controls {
      margin-top: 5px;
      flex-direction: column;
    }

    &__button {
      width: 100%;
      margin: 10px 0 0;

      &--main {
        order: 1;
      }
    }
  }
}
</style>
