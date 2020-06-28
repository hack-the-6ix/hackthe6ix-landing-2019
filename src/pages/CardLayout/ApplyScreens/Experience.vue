<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Experience</h2>
    <ComboBox
      class="apply__input"
      name="school"
      placeholder="e.g. University of The 6ix"
      label="School"
      :options="schools"
      :validate="value => (value && value.length > 0) || 'School is required'"
      required
    />
    <ComboBox
      class="apply__input"
      name="program_of_study"
      placeholder="e.g. 6ixology"
      label="Program of Study"
      :options="programsOfStudy"
      :validate="
        value => (value && value.length > 0) || 'Program of study is required'
      "
      required
    />
    <Select
      class="apply__input"
      label="Year of Study (entering)"
      name="year_of_study"
      :options="yearsOfStudy"
      :validate="value => value >= 0 || 'Year of study is required'"
      required
    />
    <Select
      class="apply__input"
      label="Projected Graduating Year"
      name="year_of_graduation"
      :options="graduationYears"
      :validate="value => value >= 0 || 'Year of graduation is required'"
      required
    />
    <UploadFile
      class="apply__input"
      name="github"
      label="Upload Resume"
      :validate="value => !!value"
      required
    />
    <Checkbox
      class="apply__input"
      name="acceptance"
      label="I allow Hack The 6ix to distribute my resumé to its event sponsors"
    />
    <Input
      class="apply__input"
      name="portfolio"
      placeholder="https://hackthe6ix.com"
      label="Portfolio Link"
      :validate="
        value =>
          validateUrl(value, true) || 'Please provide a valid http(s) website'
      "
    />
    <Input
      class="apply__input"
      name="github"
      placeholder="https://github.com/hackerman"
      label="GitHub Link"
      :validate="
        value =>
          validateUrl(value, true) || 'Please provide a valid http(s) website'
      "
      :blur="() => $emit('update:page', page + 1)"
    />
  </div>
</template>

<script>
import Select from '@hackthe6ix/vue-ui/Select';
import Checkbox from '@hackthe6ix/vue-ui/Checkbox';
import ComboBox from '@hackthe6ix/vue-ui/ComboBox';
import Input from '@hackthe6ix/vue-ui/Input';
import {UploadFile} from '@components';
import {
  YEAR_OF_STUDY_ENUM,
  SCHOOLS,
  GRADUATION_YEARS,
  PROGRAMS,
} from '@graphql';
import {validate} from '@utils';

export default {
  name: 'Experience',
  components: {
    ComboBox,
    Input,
    Select,
    UploadFile,
    Checkbox,
  },
  data() {
    return {
      yearsOfStudy: Object.values(YEAR_OF_STUDY_ENUM),
      schools: SCHOOLS,
      graduationYears: GRADUATION_YEARS,
      programsOfStudy: PROGRAMS,
    };
  },
  methods: {
    check() {
      this.$emit('update:valid', true);
    },
    validateUrl(url, res) {
      return url === '' ? res : validate(url, 'url');
    },
  },
  watch: {
    page() {
      if (this.$el.getAttribute('data-current') === 'true') {
        this.check();
      }
    },
  },
};
</script>
