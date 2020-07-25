<template>
  <div class="apply__page">
    <div class="dash__app">
      <div v-if="canEdit" class="dash__app-page">
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <Select
          class="dash__app-select"
          name="rsvp"
          :options="['🎉 Attending 🎉', '😔 Not Attending 😔']"
        />
        <p>
          Congratulations! You're Invited! Please RSVP for the event from your
          dashboard by August 10th at midnight. We look forward to seeing you on
          August 21st!
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
          hackathon. We would love to be able to accept everyone, but we have a
          fixed amount of resources. Thank you for your interest in Hack the
          6ix!
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
          if you are still interested in attending Hack the 6ix.
        </p>
      </div>
      <div
        v-else-if="user.application_status === 'not_attending'"
        class="dash__app-page"
      >
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>
          We're sorry to hear that you aren't able to attend Hack the 6ix this
          year. Thank you for applying and we hope to see you again next
          year!<br /><br />
          If you would like to change your decision, please contact us at
          hello@hackthe6ix.com
        </p>
      </div>
      <div
        v-else-if="user.application_status === 'waitlist'"
        class="dash__app-page"
      >
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>
          Thank you for your application for Hack the 6ix. We were very
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
    <div class="dash__controls" v-if="canEdit">
      <Button
        class="dash__button dash__button--full"
        :loading="submitting"
        :disabled="form_data.rsvp.length === 0"
        v-on:click.native="submit()"
      >
        Save RSVP
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@hackthe6ix/vue-ui/Button';
import Select from '@hackthe6ix/vue-ui/Select';
import {RSVP} from '@graphql';
import {query} from '@utils';
const canEdit = ['accepted', 'attending'];
import formProvider from '@hackthe6ix/vue-ui/utils/mixins/formProvider';

export default {
  name: 'Application',
  mixins: [
    formProvider({
      rsvp: '0',
    }),
  ],
  components: {
    Button,
    Select,
  },
  data() {
    return {
      submitting: false,
    };
  },
  props: {
    user: Object,
    token: String,
  },
  methods: {
    async submit() {
      this.submitting = true;
      try {
        const {success} = await query(
          RSVP,
          {
            id: this.user.id,
            attending: !parseInt(this.form_data.rsvp),
          },
          this.token,
        );
        if (!success) throw new Error('Unable to update status.');
        window.location.reload();
      } catch (err) {
        alert(err);
      }
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
};
</script>

<style lang="scss">
@import '~@styles/_mixins.scss';
@import '~@styles/_variables.scss';

.dash__app {
  &-select {
    width: calc(100% - 18px);
    margin: 30px 12px -10px;

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
