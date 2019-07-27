<template>
  <Card class="apply">
    <h1 class="apply__title">Hack The 6ix Application Form</h1>
    <div class="apply__pages" :style="height && `height: ${height}px`">
      <Personal
        :first_name.sync="first_name"
        :last_name.sync="last_name"
        :email.sync="email"
        :gender.sync="gender"
        :valid.sync="valid"
      />
      <Experience
        :school.sync="school"
        :year_of_study.sync="year_of_study"
        :portfolio.sync="portfolio"
        :github.sync="github"
        :valid.sync="valid"
      />
      <Hackathon
        :hack_count.sync="hack_count"
        :pitch.sync="pitch"
        :team_members.sync="team_members"
        :valid.sync="valid"
      />
      <Finish :email.sync="email" />
    </div>
    <div class="apply__controls">
      <Button
        secondary
        v-if="page !== end"
        class="apply__button apply__button--main"
        :click="back"
        :disabled="page === 0"
      >
        Back
      </Button>

      <Button
        v-if="page !== end"
        class="apply__button"
        :click="page === end - 1 ? submit : next"
        :loading="loading"
        :disabled="!valid"
      >
        {{ page === end - 1 ? 'Submit' : 'Next' }}
      </Button>

      <Button
        v-if="page === end"
        class="apply__button"
        :click="() => $router.push('/')"
        icon="home"
      >
        Back to Home
      </Button>
    </div>
  </Card>
</template>

<script>
import {Card, Button} from '@components';
import * as Screens from './screens';
import {APPLY, GENDER_ENUM, YEAR_OF_STUDY_ENUM} from '@graphql';
import {query} from '@utils';
const end = Math.max(Object.values(Screens).length - 1, 0);

export default {
  name: 'Info',
  path: '/apply',
  components: {
    ...Screens,
    Button,
    Card,
  },
  data() {
    return {
      // Personal
      first_name: '',
      last_name: '',
      email: '',
      gender: -1,

      // Experience
      school: '',
      year_of_study: -1,
      portfolio: '',
      github: '',

      // Hackathon Information
      hack_count: 0,
      pitch: '',
      team_members: [],

      // Others
      loading: false,
      valid: false,
      height: 0,
      page: 0,
      end,
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
    pageHeight() {
      this.$nextTick(() => {
        const page = document.querySelectorAll('.apply__page')[this.page];
        this.height = page.clientHeight;
      });
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
      this.valid = false;
      this.shiftPages();
    },
    back() {
      this.page--;
      this.valid = true;
      this.shiftPages();
    },
    async submit() {
      this.loading = true;
      try {
        await query(APPLY, {
          app: {
            name: this.first_name,
            lname: this.last_name,
            email: this.email,
            gender: Object.keys(GENDER_ENUM)[this.gender],
            school: this.school,
            year_of_study: Object.keys(YEAR_OF_STUDY_ENUM)[this.year_of_study],
            portfolio: this.portfolio,
            github: this.github,
            hack_count: this.hack_count,
            pitch: this.pitch,
            team_members: this.team_members,
          },
        });
        this.next();
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.apply {
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
    padding-left: 40px;
    padding-right: 40px;
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
