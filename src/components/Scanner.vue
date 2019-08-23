<template>
  <div class="wrap">
    Event:
    <select id="events" />
    <h3 :style="{backgroundColor: response_color}" id="response">
      {{ response }}
    </h3>
    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader';
import {query, auth} from '@utils';
import {ATTEND} from '@graphql';

export default {
  name: 'Scanner',
  components: {
    QrcodeStream,
  },
  data() {
    return {
      response: 'Ready',
      success: true,
      response_color: '#FFFFFF',
    };
  },
  methods: {
    handler({target}) {
      this[target.name] = target.value;
    },
    async onInit() {
      try {
        query(
          `{
          events {
            id
            title
            start
            finish
            location
            description
          }
        }
      `,
          {},
        ).then(result => {
          var select = document.getElementById('events');
          result.forEach(event => {
            var option = document.createElement('option');
            option.textContent = `${event.title} (${
              event.start.split('T')[0]
            })`;
            option.value = event.id;
            select.appendChild(option);
          });
        });
      } catch (error) {
        this.$router.push('/login');
        alert(error);
      }
    },
    async onDecode(decodedString) {
      if (decodedString == '') return;
      let events_select = document.getElementById('events');
      let event_id = events_select.options[events_select.selectedIndex].value;
      const auth_user = auth.fetch_user();
      const {message, success} = await query(
        ATTEND,
        {
          applicant: decodedString,
          event: event_id,
        },
        auth_user.token,
      );
      this.response = message;
      if (success) {
        this.response_color = '#00FF00';
      } else {
        this.response_color = '#FF0000';
      }
    },
  },
};
</script>
