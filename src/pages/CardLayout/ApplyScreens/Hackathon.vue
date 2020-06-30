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
      :validate="
        value =>
          !(value && value.length > 0 && value >= 0) &&
          'This field must be non-negative'
      "
      required
    />
    <Input
      class="apply__input"
      name="pitch"
      placeholder="Tell us about your thing"
      label="What would you like to build at the hackathon? (Minimum 50 Characters)"
      :validate="
        value =>
          !(value && value.length >= 50) &&
          'You must have at least 50 characters'
      "
      required
    />
    {{(form_data.pitch && form_data.pitch.length) || 0}}
    <!--
    <div class="hack__team">
      <label class="hack__label"
        >List of preferred team members (Up to 4)</label
      >
      <Input class="hack__member" placeholder="You" name="you" disabled />
      <div v-for="(member, i) in team_members_" class="hack__item" :key="i">
        <Input
          class="hack__member hack__member--item"
          placeholder="Shia LaBeouf"
          v-model="team_members_[i]"
          :name="'member-' + i"
        />
        <Button
          icon="trash"
          v-on:click.native="team_members_.splice(i, 1)"
          secondary
        />
      </div>
      <Button
        icon="plus"
        v-on:click.native="add()"
        :disabled="team_members_.length > 2"
        >Add a team member</Button
      >
    </div>-->
  </div>
</template>

<script>
import Button from '@hackthe6ix/vue-ui/Button';
import Input from '@hackthe6ix/vue-ui/Input';
import {Textarea} from '@components';

export default {
  name: 'Hackathon',
  inject: ['form_data'],
  components: {
    Input,
    Button,
    Textarea,
  },
  methods: {
    add() {
      this.team_members_.push('');
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
