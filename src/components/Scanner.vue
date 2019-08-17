<template>
  <div>
    Event:
    <select :onChange="handler" id="events" />
    <h3 style="background-color:white;" id="response" />
    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader';
import {ATTEND} from '@graphql';

export default {
  name: 'Scanner',
  components: {
    QrcodeStream,
  },
  data() {
    return {
      event_id: 1,
    };
  },
  methods: {
    handler({target}) {
      this[target.name] = target.value;
    },
    async onInit() {
      try {
      } catch (error) {
        alert(error);
      }
    },
    onDecode(decodedString) {
    },
  },
};
</script>
