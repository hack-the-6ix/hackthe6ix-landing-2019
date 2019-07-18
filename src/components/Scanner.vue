<template>
  <div>
    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
  import { QrcodeStream } from 'vue-qrcode-reader'
  import axios from 'axios';

  export default {
    name: 'Scanner',
    components: {
        QrcodeStream
    },
    methods: {
      async onInit (promise) {
      try {
        await promise
      } catch (error) {
        alert(error)
      }
    },
      onDecode (decodedString) {
        const query = `
        mutation {
          scan(code: "${decodedString}") {
            message
          }
        }
        `
        axios.post('https://api.hackthe6ix.com/graphql', { query: query }).then((response) => {

        })
      }
    },
  }
</script>