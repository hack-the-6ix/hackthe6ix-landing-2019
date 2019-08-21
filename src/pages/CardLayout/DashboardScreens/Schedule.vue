<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Schedule</h2>
    <div v-if="!loading">
      <center>Coming Soon</center>
      <Button v-show="false" :click="() => (this.showModal = !this.showModal)"
        >Show Modal Test</Button
      >
    </div>
    <div class="dash__controls">
      <Button class="dash__button dash__button--full" :click="() => to(0)"
        >Back to Home</Button
      >
    </div>
    <Modal :show.sync="showModal">
      <h2 style="margin-top: 0; font-size: 2.4rem;">DRILL SHIIIBBBBAAA</h2>
      <img
        style="margin: -15px 0 20px;"
        src="https://thumbs.gfycat.com/PartialSelfreliantHornedtoad-size_restricted.gif"
        width="100%"
      />
      <Button :click="() => (showModal = false)">End me now</Button>
    </Modal>
  </div>
</template>

<script>
import {Button, Modal} from '@components';

export default {
  name: 'Schedule',
  components: {
    Button,
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  props: {
    user: Object,
    loading: Boolean,
    to: Function,
  },
};
</script>
