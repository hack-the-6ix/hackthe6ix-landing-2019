<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Experience</h2>
    <Input
      class="apply__input"
      name="school"
      placeholder="University of The 6ix"
      label="Name of School"
      v-model="school_"
      required
    />
    <Select
      label="Year of Study"
      name="year_of_study"
      v-model="year_of_study_"
      :options="options"
      required
    />
    <Input
      class="apply__input"
      name="portfolio"
      placeholder="https://hackthe6ix.com"
      label="Portfolio Link"
      v-model="portfolio_"
      :state="validateUrl(portfolio_)"
      errorMsg="Please provide a valid http(s) website"
      required
    />
    <Input
      class="apply__input"
      name="github"
      placeholder="https://github.com/hackerman"
      label="Github Link"
      v-model="github_"
      :state="validateUrl(github_)"
      errorMsg="Please provide a valid http(s) website"
      required
    />
  </div>
</template>

<script>
import {Input, Select} from '@components';
import {YEAR_OF_STUDY_ENUM} from '@graphql';
import {validate} from '@utils';

export default {
  name: 'Experience',
  components: {
    Input,
    Select,
  },
  props: {
    school: String,
    year_of_study: Number,
    portfolio: String,
    github: String,
    valid: Boolean,
  },
  data() {
    return {
      school_: this.school,
      year_of_study_: this.year_of_study,
      portfolio_: this.portfolio,
      github_: this.github,
      options: Object.values(YEAR_OF_STUDY_ENUM),
    };
  },
  updated() {
    if (this.$el.getAttribute('data-current') === 'true') {
      this.check();
    }
  },
  methods: {
    check() {
      this.$emit(
        'update:valid',
        Boolean(
          this.school_.length > 0 &&
            this.year_of_study_ > -1 &&
            validate(this.portfolio_, 'url') &&
            validate(this.github_, 'url'),
        ),
      );
    },
    validateUrl(url) {
      return url === '' ? undefined : validate(url, 'url');
    },
  },
  watch: {
    school_(val) {
      this.$emit('update:school', val);
    },
    year_of_study_(val) {
      this.$emit('update:year_of_study', val);
    },
    portfolio_(val) {
      this.$emit('update:portfolio', val);
    },
    github_(val) {
      this.$emit('update:github', val);
    },
  },
};
</script>
