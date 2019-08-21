<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Application Status</h2>
    <div v-if="!loading" class="dash__app">
      <div v-if="canEdit" class="dash__app-page">
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <Select
          class="dash__app-select"
          name="rsvp"
          v-model="rsvp"
          :options="['🎉 Attending 🎉', '😔 Not Attending 😔']"
        />
        <p>
          Congratulations! You're Invited! Please RSVP for the event from your
          dashboard by August 20th at midnight. We look forward to seeing you on
          August 23rd!
        </p>
      </div>
      <div
        v-else-if="user.application_status === 'rejected'"
        class="dash__app-page"
      >
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>
          Unfortunately, due to the overwhelming number of applications that we
          have received, we are not able to offer you admission to this year's
          hackathon. We would love to be able to accept everyone, but our venue
          space has a fixed capacity limit. If you'd still like to get involved
          with the event, please consider
          <a href="https://forms.gle/menPcPpwi3TE6b1M9"
            >volunteering at the event.</a
          >
          Thank you for your interest in Hack the 6ix!
        </p>
      </div>
      <div
        v-else-if="user.application_status === 'acceptance_expired'"
        class="dash__app-page"
      >
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>
          The RSVP window has passed. Please contact us at hello@hackthe6ix.com
          if you are still interested in attending Hack The 6ix 2019.
        </p>
      </div>
      <div
        v-else-if="user.application_status === 'waitlist'"
        class="dash__app-page"
      >
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>
          Thank you for your application for Hack the 6ix 2019. We were very
          impressed with your application, resume, and accomplishments. However,
          due to the immense number of applications that we received this year
          and our physical venue constraints, we are only able to offer you a
          conditional waitlist acceptance at this time. We would love to see you
          at our event and you will be notified via e-mail as soon as more space
          opens up!
        </p>
      </div>
      <div v-else class="dash__app-page">
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>Check here later for updates.</p>
      </div>
    </div>
    <div class="dash__controls">
      <Button
        class="dash__button dash__button--full"
        :loading="submiting"
        :disabled="!dirty"
        v-if="canEdit"
        :click="submit"
      >
        Save RSVP
      </Button>
      <Button
        class="dash__button dash__button--full"
        :secondary="canEdit"
        :click="() => to(0)"
      >
        Back to Home
      </Button>
    </div>
  </div>
</template>

<script>
import {Button, Select} from '@components';
import {RSVP} from '@graphql';
import {query} from '@utils';
const canEdit = ['accepted', 'attending', 'not_attending'];

export default {
  name: 'Application',
  components: {
    Button,
    Select,
  },
  data() {
    return {
      rsvp: -1,
      submiting: false,
      dirty: false,
    };
  },
  props: {
    user: Object,
    loading: Boolean,
    to: Function,
    token: String,
  },
  methods: {
    async submit() {
      this.submiting = true;
      try {
        const {success} = await query(
          RSVP,
          {
            id: this.user.id,
            attending: !this.rsvp,
          },
          this.token,
        );
        if (!success) throw new Error('Unable to update status.');
        this.dirty = false;
        this.$emit('update:user', {
          ...this.user,
          application_status: canEdit[this.rsvp + 1],
        });
      } catch (err) {
        alert(err);
      }
      this.submiting = false;
    },
  },
  computed: {
    caps() {
      const str = this.user.application_status;
      return (str.charAt(0).toUpperCase() + str.slice(1)).replace(
        /_.{1}/g,
        s => ' ' + s.slice(1).toUpperCase(),
      );
    },
    canEdit() {
      return canEdit.includes(this.user.application_status);
    },
  },
  watch: {
    rsvp(val, old) {
      if (val !== old) this.dirty = true;
    },
    user(val) {
      this.rsvp = canEdit.indexOf(val.application_status) - 1;
    },
  },
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.dash__app {
  &-select {
    margin: 30px 0 -10px;

    & .select__items {
      justify-content: center;
    }

    & .select__item {
      margin: 5px;
      width: calc(50% - 70px);
    }
  }
}

@include media(TABLET) {
  .dash__app {
    &-select {
      & .select__item {
        margin: 5px 0;
        width: 100%;
      }
    }
  }
}
</style>
