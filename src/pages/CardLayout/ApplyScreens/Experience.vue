<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Experience</h2>
    <Select
      class="apply__input"
      name="school"
      placeholder="University of The 6ix"
      label="School"
      options="schools"
      v-model="school_"
      required
    />
    <Select
      label="Year of Study (entering)"
      name="year_of_study"
      v-model="year_of_study_"
      :options="options"
      required
    />
    <UploadFile
      class="apply__input"
      name="github"
      label="Upload Resume"
      required
      v-model="resume_"
    />
    <Checkbox
      class="apply__input"
      name="acceptance"
      label="I allow Hack The 6ix to distribute my resumé to its event sponsors"
      v-model="resume_permission_"
    />
    <Input
      class="apply__input"
      name="portfolio"
      placeholder="https://hackthe6ix.com"
      label="Portfolio Link"
      v-model="portfolio_"
      :state="validateUrl(portfolio_)"
      errorMsg="Please provide a valid http(s) website"
    />
    <Input
      class="apply__input"
      name="github"
      placeholder="https://github.com/hackerman"
      label="GitHub Link"
      v-model="github_"
      :state="validateUrl(github_)"
      :blur="() => $emit('update:page', page + 1)"
      errorMsg="Please provide a valid http(s) website"
    />
  </div>
</template>

<script>
import Select from '@hackthe6ix/vue-ui/dist/Select';
import Checkbox from '@hackthe6ix/vue-ui/dist/Checkbox';
import Input from '@hackthe6ix/vue-ui/dist/Input';
import {UploadFile} from '@components';
import {YEAR_OF_STUDY_ENUM, SCHOOLS} from '@graphql';
import {validate} from '@utils';

export default {
  name: 'Experience',
  components: {
    Input,
    Select,
    UploadFile,
    Checkbox,
  },
  props: {
    school: String,
    year_of_study: Number,
    resume: File,
    resume_permission: Boolean,
    portfolio: String,
    github: String,
    valid: Boolean,
    page: Number,
  },
  data() {
    return {
      school_: this.school,
      year_of_study_: this.year_of_study,
      resume_: this.resume,
      resume_permission_: this.resume_permission,
      portfolio_: this.portfolio,
      github_: this.github,
      options: Object.values(YEAR_OF_STUDY_ENUM),
      schools: SCHOOLS,
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
            this.resume_ &&
            this.validateUrl(this.portfolio_, true) &&
            this.validateUrl(this.github_, true),
        ),
      );
    },
    validateUrl(url, res) {
      return url === '' ? res : validate(url, 'url');
    },
  },
  watch: {
    school_(val) {
      this.$emit('update:school', val);
    },
    year_of_study_(val) {
      this.$emit('update:year_of_study', val);
    },
    resume_(val) {
      this.$emit('update:resume', val);
    },
    resume_permission_(val) {
      this.$emit('update:resume_permission', val);
    },
    portfolio_(val) {
      this.$emit('update:portfolio', val);
    },
    github_(val) {
      this.$emit('update:github', val);
    },
    page() {
      if (this.$el.getAttribute('data-current') === 'true') {
        this.check();
      }
    },
  },
};
</script>
