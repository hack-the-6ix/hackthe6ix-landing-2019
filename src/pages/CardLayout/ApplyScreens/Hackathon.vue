<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Hackathon Experience</h2>
    <Input
      class="apply__input"
      name="hack_count"
      type="number"
      placeholder="Too many"
      label="How many Hackathons have you attended so far?"
      min="0"
      :tabindex="current ? undefined : -1"
      :validate="
        value =>
          !(value && value.length > 0 && value >= 0) &&
          'This field must be non-negative'
      "
      required
    />
    <Textarea
      class="apply__input"
      name="pitch"
      placeholder="Tell us about your thing"
      label="What would you like to build at the hackathon?"
      :tabindex="current ? undefined : -1"
      :maxlength="1500"
      :description="
        '(50-1500 Characters) Current count: ' +
          ((form_data.pitch && form_data.pitch.length) || 0)
      "
      :validate="
        value =>
          !(value && value.length >= 50 && value.length <= 1500) &&
          'You must have at least 50 characters'
      "
      required
    />
    <ListInput
      class="apply__input"
      name="team_members"
      label="List of preferred team members (Up to 4)"
      :limit="3"
      :maxlength="128"
      :validate="value => value.length > 3 && 'Teams have a max of 4 members'"
      :placeholderItems="[
        `${form_data.first_name} ${form_data.last_name} (You)`,
      ]"
      placeholder="Elon Musk"
    />
  </div>
</template>

<script>
import Input from '@hackthe6ix/vue-ui/Input';
import Textarea from '@hackthe6ix/vue-ui/Textarea';
import ListInput from '@hackthe6ix/vue-ui/ListInput';

export default {
  name: 'Hackathon',
  inject: ['form_data'],
  components: {
    Input,
    Textarea,
    ListInput,
  },
  methods: {
    add() {
      this.form_data.team_members.push('');
    },
  },
  props: {
    current: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.hack {
  &__team {
    @include flex(column);
    margin-bottom: 16px;
    font-weight: bold;
  }

  &__label {
    color: map-get($PRIMARY, TEAL);
    font-size: 0.95rem;
    margin-bottom: 8px;
  }

  &__member {
    flex-grow: 1;
    &--item {
      margin-right: 6px;
      margin-bottom: 0;
    }
  }

  &__item {
    @include flex();
    margin-bottom: 16px;
  }
}
</style>
