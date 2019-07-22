<template>
  <div>
    Event: <select :onChange="handler" id="events"/>
    <h3 style="background-color:white;" id="response" />
    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
  import { QrcodeStream } from 'vue-qrcode-reader'
  import { Select } from '@components';
  import axios from 'axios';

  export default {
    name: 'Scanner',
    components: {
        QrcodeStream,
        Select
    },
    data() {
      return {
        event_id: 1
      };
    },
    methods: {
      handler({ target }) {
        this[target.name] = target.value;
        console.log(target)
      },
      async onInit (promise) {
      try {
        await promise
        let query = `
          query {
            events {
              id
              title
            }
          }
        `
        axios.post('http://localhost:4000/graphql', { query: query }).then((response) => {
          let events = response.data.data.events
          events.forEach((event) => {
            var option = document.createElement("option")
            option.text = event.title
            document.getElementById('events').add(option)
          })
        })
      } catch (error) {
        alert(error)
      }
    },
      onDecode (decodedString) {
        console.log(decodedString)
        let query = `
        mutation {
          scan(code: "${decodedString}") {
            id
            email
            name
            lname
          }
        }
        `
        axios.post('http://localhost:4000/graphql', { query: query }).then((response) => {
          let applicant = response.data.data.scan[0]
          let query = `
            mutation {
                attendEvent(applicant_id: "${applicant.id}", event_id: "5d262776d5d05003b6e825ab") {
                  success
                }
              }
          `;
          axios.post('http://localhost:4000/graphql', { query: query }).then((response) => {
            let success = response.data.data.attendEvent.success;
            let status = success ? "Registered" : "Error: Already Registered"
            document.getElementById('response').innerHTML = `Applicant: ${applicant.name} ${applicant.lname} [${status}]`;
          })
        })
      }
    },
  }
</script>