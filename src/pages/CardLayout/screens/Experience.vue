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
    <Input
      class="apply__input"
      name="year_of_study"
      type='number'
      placeholder="1"
      label="Year of Study"
      v-model.number="year_of_study_"
      errorMsg='Pick a number between 1 - 4'
      :state='year_of_study_ > 0 && year_of_study_ < 5'
      max='4'
      min='1'
      required
    />
    <Input
      class="apply__input"
      name="portfolio"
      placeholder="https://hackthe6ix.com"
      label="Portfolio Link"
      v-model="portfolio_"
      :state='validateUrl(portfolio_)'
      errorMsg='Please provide a valid http(s) website'
      required
    />
    <Input
      class="apply__input"
      name="github"
      placeholder="https://github.com/hackerman"
      label="Github Link"
      v-model="github_"
      :state='validateUrl(github_)'
      errorMsg='Please provide a valid http(s) website'
      required
    />
  </div>
</template>

<script>
  import { Input } from '@components';
  import { validate } from '@utils';

  export default {
    name: 'Experience',
    components: {
      Input
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
      };
    },
    updated() {
      if (this.$el.getAttribute('data-current') === 'true') {
        this.check();
      }
    },
    methods: {
      check() {
        this.$emit('update:valid', (
          this.school_.length > 0 &&
          this.year_of_study_ > 0 &&
          this.year_of_study_ < 5 &&
          validate(this.portfolio_, 'url') &&
          validate(this.github_, 'url')
        ));
      },
      validateUrl(url) {
        return url === '' ? undefined : validate(url, 'url');
      }
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
  }
</script>