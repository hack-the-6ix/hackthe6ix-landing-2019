<template>
  <div>
    Event:
    <select id="events" />
    <h3 style="background-color:white;color:black" id="response">
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
      response_color: '#000000',
      event_id: 1,
      events: [],
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
          this.events = result;
          var select = document.getElementById('events');
          result.forEach(event => {
            var option = document.createElement('option');
            option.textContent = `${event.title} (${
              event.start.split('T')[0]
            } ${event.start.split('T')[1]})`;
            option.value = event.id;
            select.appendChild(option);
          });
        });
      } catch (error) {
        alert(error);
      }
    },
    async onDecode(decodedString) {
      if (decodedString == '') return;
      let events_select = document.getElementById('events');
      let event_id = events_select.options[events_select.selectedIndex].value;
      const auth_user = auth.fetch_user();
      const {message} = await query(
        ATTEND,
        {
          applicant: decodedString,
          event: event_id,
        },
        auth_user.token,
      );
      this.response = message;
      setTimeout(() => {
        this.response = 'Ready';
      }, 5000);
    },
  },
};
</script>
