<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Experience</h2>
    <ComboBox
      class="apply__input"
      name="school"
      placeholder="e.g. University of The 6ix"
      label="School"
      :allow-free="true"
      :tabindex="current ? undefined : -1"
      :options="schools"
      :maxlength="128"
      :validate="value => !(value && value.length > 0) && 'School is required'"
      required
    />
    <ComboBox
      class="apply__input"
      name="program_of_study"
      placeholder="e.g. 6ixology"
      label="Program of Study"
      :allow-free="true"
      :tabindex="current ? undefined : -1"
      :options="programsOfStudy"
      :maxlength="128"
      :validate="
        value => !(value && value.length > 0) && 'Program of study is required'
      "
      required
    />
    <Select
      class="apply__input"
      label="Year of Study (entering)"
      name="year_of_study"
      :tabindex="current ? undefined : -1"
      :options="yearsOfStudy"
      :validate="
        value => !(value && value.length > 0) && 'Year of study is required'
      "
      required
    />
    <Select
      class="apply__input"
      label="Projected Graduating Year"
      name="year_of_graduation"
      :tabindex="current ? undefined : -1"
      :options="graduationYears"
      :validate="
        value =>
          !(value && value.length > 0) && 'Year of graduation is required'
      "
      required
    />
    <Upload
      class="apply__input"
      name="resume"
      label="Upload Resume"
      description="Resume should be in pdf format"
      :tabindex="current ? undefined : -1"
      :validate="
        value =>
          (!value && 'Resume is required') ||
          (value.size >= 5000000 && 'File must be less than 5MB') ||
          (value.name
            .split('.')
            .pop()
            .toLowerCase() !== 'pdf' &&
            'File must be a pdf')
      "
      accept="application/pdf"
      required
    />
    <Checkbox
      class="apply__input"
      name="acceptance"
      :tabindex="current ? undefined : -1"
      label="I allow Hack The 6ix to distribute my resumé to its event sponsors"
    />
    <Input
      class="apply__input"
      name="portfolio"
      placeholder="https://hackthe6ix.com"
      label="Portfolio Link"
      :maxlength="128"
      :tabindex="current ? undefined : -1"
    />
    <Input
      class="apply__input"
      name="github"
      placeholder="https://github.com/hackerman"
      label="GitHub Link"
      :maxlength="128"
      :tabindex="current ? undefined : -1"
      :blur="() => $emit('update:page', page + 1)"
    />
  </div>
</template>

<script>
import Select from '@hackthe6ix/vue-ui/Select';
import Checkbox from '@hackthe6ix/vue-ui/Checkbox';
import ComboBox from '@hackthe6ix/vue-ui/ComboBox';
import Input from '@hackthe6ix/vue-ui/Input';
import Upload from '@hackthe6ix/vue-ui/Upload';

import {
  YEAR_OF_STUDY_ENUM,
  SCHOOLS,
  GRADUATION_YEARS,
  PROGRAMS,
} from '@graphql';

export default {
  name: 'Experience',
  components: {
    ComboBox,
    Input,
    Select,
    Upload,
    Checkbox,
  },
  props: {
    current: Boolean,
  },
  data() {
    return {
      yearsOfStudy: YEAR_OF_STUDY_ENUM,
      schools: SCHOOLS,
      graduationYears: GRADUATION_YEARS,
      programsOfStudy: PROGRAMS,
    };
  },
};
</script>
