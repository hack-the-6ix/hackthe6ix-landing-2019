<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Hackathon Experience</h2>
    <Input
      class="apply__input"
      name="hack_count"
      type="number"
      placeholder="Too many"
      label="How many Hackathons have you attended so far?"
      v-model.number="hack_count_"
      errorMsg="Pick provide a number"
      :state="Number.isInteger(hack_count_)"
      min="0"
      required
    />
    <Textarea
      class="apply__input"
      name="pitch"
      placeholder="Tell us about your thing"
      label="What type of thing would you like to build at the hackathon?"
      v-model="pitch_"
      required
    />
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
          :click="() => team_members_.splice(i, 1)"
          secondary
        />
      </div>
      <Button icon="plus" :click="add" :disabled="team_members_.length > 2"
        >Add a team member</Button
      >
    </div>
  </div>
</template>

<script>
import {Input, Button, Textarea} from '@components';

export default {
  name: 'Hackathon',
  components: {
    Input,
    Button,
    Textarea,
  },
  props: {
    hack_count: Number,
    pitch: String,
    team_members: Array,
    valid: Boolean,
  },
  data() {
    return {
      hack_count_: this.hack_count,
      pitch_: this.pitch,
      team_members_: this.team_members,
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
          Number.isInteger(this.hack_count_) &&
            this.pitch_.length > 50 &&
            this.team_members_.reduce(
              (acc, curr) => acc && curr.length > 0,
              true,
            ),
        ),
      );
    },
    add() {
      this.team_members_.push('');
    },
  },
  watch: {
    hack_count_(val) {
      this.$emit('update:hack_count', val);
    },
    pitch_(val) {
      this.$emit('update:pitch', val);
    },
    team_members_(val) {
      this.$emit('update:team_members', val);
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
