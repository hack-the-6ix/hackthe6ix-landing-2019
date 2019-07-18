<template>
  <qrcode-stream @decode="onDecode"></qrcode-stream>
</template>

<script>
  import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
  import axios from 'axios';

  export default {
    name: 'Scanner',
    components: {
        QrcodeStream,
        QrcodeDropZone,
        QrcodeCapture
    },
    methods: {
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