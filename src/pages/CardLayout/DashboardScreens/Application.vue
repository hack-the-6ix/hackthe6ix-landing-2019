<template>
  <div class="apply__page">
    <div class="dash__app">
      <div v-if="accepted || attending" class="dash__app-page">
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>
          Congratulations! You're Invited to Hack the 6ix!<br /><br />
          <b>
            Please RSVP for the event from by Monday August 10th at 11:59 PM EST
          </b>
        </p>
        <div class="dash__controls">
          <Button
            class="dash__button"
            :loading="submitting"
            color="success"
            v-if="accepted"
            v-on:click.native="showAcceptModal = true"
          >
            Accept Invitation
          </Button>
          <Button
            :class="['dash__button', attending && 'dash__button--full']"
            :loading="submitting"
            color="error"
            v-on:click.native="showDeclineModal = true"
          >
            Decline Invitation
          </Button>
        </div>
        <div v-if="user.application_status === 'attending'">
          <p>
            We look forward to seeing you on August 21st! Remember to join our
            <b>Discord</b> by clicking the button below!
          </p>
          <p>
            Issue this command in the
            <b>#verification</b> channel to get started:
          </p>
          <p class="apply__verification">
            <b>!verify {{ user.email }}</b>
          </p>
        </div>
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
          due to the immense number of applications that we received this year,
          we are only able to offer you a conditional waitlist acceptance at
          this time. We would love to see you at our event and you will be
          notified via e-mail as soon as more space opens up!
        </p>
      </div>
      <div v-else class="dash__app-page">
        <p class="dash__status">Current application status:</p>
        <p class="dash__large">{{ caps }}</p>
        <p>Check here later for updates.</p>
      </div>
    </div>
    <Modal :show.sync="showDiscordModal">
      <h2 class="apply__title">Join our Discord</h2>
      <p>
        Congratulations, you've successfully confirmed your attendance for Hack
        the 6ix!<br /><br />
        Join our Discord server to get access to the latest updates and meet
        fellow hackers! Issue this command in the
        <b>#verification</b> channel to get started:
      </p>
      <p class="apply__verification">
        <b>!verify {{ user.email }}</b>
      </p>
      <div class="apply__rightAlign">
        <Button
          class="apply__button"
          color="grey"
          v-on:click.native="showDiscordModal = false"
          icon="address-card"
        >
          Close
        </Button>
        <Button
          class="apply__button"
          v-on:click.native="discordMe()"
          icon="address-card"
        >
          Join Discord
        </Button>
      </div>
    </Modal>
    <Modal :show.sync="showDeclineModal">
      <h2 class="apply__title">Hey!</h2>
      <p>
        Are you sure you want to <b>decline</b> your invitation to Hack the 6ix?
      </p>
      <div class="apply__rightAlign">
        <Button
          class="apply__button"
          v-on:click.native="showDeclineModal = false"
          icon="address-card"
        >
          No
        </Button>
        <Button
          class="apply__button"
          color="error"
          v-on:click.native="submit(false)"
          icon="address-card"
        >
          Yes
        </Button>
      </div>
    </Modal>
    <Modal :show.sync="showAcceptModal">
      <h2 class="apply__title">Some legal stuff</h2>

      <p>We're almost there! We just need a bit more information.</p>
      <div class="dash__checkboxes" v-if="accepted">
        <Checkbox
          name="casl_acceptance"
          v-model="casl_acceptance"
          label="I allow Hack the 6ix to send me emails containing information from the event sponsors."
          class="dash__checkboxes--box"
        />
        <Checkbox
          name="resume_permission"
          v-model="resume_permission"
          label="I allow Hack the 6ix to distribute my resume to its event sponsors"
          class="dash__checkboxes--box"
        />
        <br />
        <Checkbox
          name="mlh_b"
          v-model="mlh_privacy"
          class="dash__checkboxes--box"
        >
          <template v-slot:label>
            I authorize you to share my application/registration information
            with Major League Hacking for event administration, ranking, and MLH
            administration in-line with the
            <a href="https://mlh.io/privacy">MLH Privacy Policy</a>.
          </template>
        </Checkbox>
        <Checkbox
          name="mlh_c"
          v-model="mlh_messages"
          label="I authorize Major League Hacking to send me occasional messages about hackathons including pre- and post-event informational emails."
          class="dash__checkboxes--box"
        />
        <p>
          You <b>must</b> agree the MLH Code of Conduct to attend Hack the 6ix:
        </p>
        <Checkbox
          name="mlh_a"
          v-model="mlh_acceptance"
          class="dash__checkboxes--box"
          required
        >
          <template v-slot:label>
            I have read and agree to the
            <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
              MLH Code of Conduct</a
            >. I further agree to the terms of both the
            <a
              href="https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions"
            >
              MLH Contest Terms</a
            >
            and Conditions and the
            <a href="https://mlh.io/privacy">MLH Privacy Policy</a>.
          </template>
        </Checkbox>
        <br />
      </div>
      <div class="apply__rightAlign">
        <Button
          class="apply__button"
          color="error"
          v-on:click.native="showAcceptModal = false"
          icon="address-card"
        >
          Cancel
        </Button>
        <Button
          class="apply__button"
          color="success"
          v-on:click.native="submit(true)"
          :disabled="!mlh_acceptance"
          icon="address-card"
        >
          Accept Invitation
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Checkbox from '@hackthe6ix/vue-ui/Checkbox';
import Button from '@hackthe6ix/vue-ui/Button';
import {RSVP} from '@graphql';
import {query} from '@utils';
import {Modal} from '@components';

export default {
  name: 'Application',
  components: {
    Button,
    Modal,
    Checkbox,
  },
  data() {
    return {
      submitting: false,
      showDeclineModal: false,
      showAcceptModal: false,
      showDiscordModal: false,
      casl_acceptance: false,
      resume_permission: false,
      mlh_acceptance: false,
      mlh_privacy: false,
      mlh_messages: false,
    };
  },
  props: {
    user: Object,
    token: String,
    discordMe: Function,
  },
  methods: {
    async submit(status) {
      this.submitting = true;
      try {
        let mutation = {
          id: this.user.id,
          attending: status,
        };

        if (status) {
          mutation.casl_acceptance = this.casl_acceptance;
          mutation.resume_permission = this.resume_permission;
          mutation.mlh_acceptance = this.mlh_acceptance;
          mutation.mlh_privacy = this.mlh_privacy;
          mutation.mlh_messages = this.mlh_messages;
        }

        const {success} = await query(RSVP, mutation, this.token);

        this.submitting = false;

        if (!success) throw new Error('Unable to update status.');

        this.$emit('update:user', {
          ...this.user,
          application_status: status ? 'attending' : 'not_attending',
        });

        if (status === true) {
          this.showDiscordModal = true;
          this.showAcceptModal = false;
        } else {
          this.showDeclineModal = false;
        }
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
    accepted() {
      return this.user.application_status === 'accepted';
    },
    attending() {
      return this.user.application_status === 'attending';
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

.dash__checkboxes {
  text-align: left;

  margin-bottom: 12px;

  &--box {
    margin-bottom: 8px;
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
