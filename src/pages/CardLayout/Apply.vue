<template>
  <Card class="apply">
    <h1 class="apply__title">Hack The 6ix Application Form</h1>
    <div class="apply__pages" :style="height && `height: ${height}px`">
      <Personal />
      <Experience />
      <Hackathon />
      <Finish :email="email" />
    </div>
    <div class="apply__controls">
      <Button
        secondary
        v-if="page !== end"
        class="apply__button apply__button--main"
        v-on:click.native="back()"
        :disabled="page === 0"
      >
        Back
      </Button>

      <Button
        v-if="page !== end"
        class="apply__button"
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
    <Modal :show="showModal">
      <h2 class="apply__title">Application Error</h2>
      <p>Something unexpected happened. Please try again later.</p>
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

import {
  APPLY,
  YEAR_OF_STUDY_ENUM,
  GENDER_ENUM,
  TIMEZONES,
  PROVINCES_ENUM,
  COUNTRIES_ENUM,
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
      city: '',
      province: '',
      postal_code: '',
      country: '',
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
      // Experience
      school: '',
      program_of_study: '',
      year_of_study: -1,
      year_of_graduation: -1,
      resume: null,
      resume_permission: false,
      portfolio: '',
      github: '',

      // Hackathon Information
      hack_count: 0,
      pitch: '',
      team_members: [],

      // Others
      showModal: false,
      loading: false,
      valid: true,
      height: 0,
      page: 0,
      end,

      genders: Object.values(GENDER_ENUM),
      countries: Object.values(COUNTRIES_ENUM),
      provinces: Object.keys(PROVINCES_ENUM),
      timezones: Object.values(TIMEZONES),
    };
  },
  mounted() {
    window.addEventListener('resize', this.pageHeight, {passive: true});
    window.addEventListener('load', this.shiftPages);
  },
  beforeDestory() {
    window.removeEventListener('resize', this.pageHeight, {passive: true});
    window.removeEventListener('load', this.shiftPages);
  },
  updated() {
    this.pageHeight();
  },
  methods: {
    /*
    pageHeight() {
      this.$nextTick(() => {
        const page = document.querySelectorAll('.apply__page')[this.page];
        this.height = page.clientHeight;
      });
    },*/
    onUpdate(...args) {
      // eslint-disable-next-line
      console.log('on update!', args);
    },
    shiftPages() {
      const pages = Array.from(document.querySelectorAll('.apply__page'));
      pages.forEach((page, i) => {
        const current = this.page === i;
        page.style.transform = `translateX(${this.page *
          -100}%) translateX(${this.page * -60}px)`;
        page.style.opacity = current ? 1 : 0;
        page.setAttribute('data-current', current);
      });
      this.pageHeight();
    },
    next() {
      this.page++;
      this.shiftPages();
    },
    back() {
      this.page--;
      this.shiftPages();
    },
    async submit() {
      this.loading = true;
      try {
        const {user_errors, applicant} = await query(APPLY, {
          app: {
            name: this.form_data.first_name,
            lname: this.form_data.last_name,
            email: this.form_data.email,
            casl_acceptance: this.form_data.casl_acceptance,
            gender: this.genders[this.form_data.gender],
            timezone: this.timezones[this.form_data.timezone],
            address_line_1: this.form_data.address_line_1,
            address_line_2: this.form_data.address_line_2,
            city: this.form_data.city,
            province: this.provinces[this.form_data.province],
            postal_code: this.form_data.postal_code,
            country: this.form_data.country,
            school: this.form_data.school,
            program_of_study: this.form_data.program_of_study,
            year_of_study: Object.keys(YEAR_OF_STUDY_ENUM)[this.form_data.year_of_study],
            year_of_graduation: this.form_data.year_of_graduation,
            resume: await toBase64(this.resume),
            resume_permission: this.form_data.resume_permission,
            portfolio: this.form_data.portfolio,
            github: this.form_data.github,
            hack_count: this.form_data.hack_count,
            pitch: this.form_data.pitch,
            team_members: this.form_data.team_members,
          },
        });

        if (user_errors) this.showModal = true;
        else {
          this.id = applicant.id;
          this.next();
        }
      } catch (err) {
        this.showModal = true;
      }
    },
  },
  watch: {
    page() {
      this.shiftPages();
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
