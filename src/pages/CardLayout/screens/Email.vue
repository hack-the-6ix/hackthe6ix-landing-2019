<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Join our Mailing List</h2>
    <Input
      class="apply__input"
      name="email"
      placeholder="e.g. hunter2@hackthe6ix.com"
      label="Email"
      :onChange="handler"
      :value="email"
    />
    <Input 
      type="checkbox"
      class="apply__input"
      name="acceptance"
      label="I Accept"
      :onChange="handler"
      :value="acceptance"
    />
  </div>
</template>

<script>
  import { Input, Select } from '@components';

  export default {
    name: 'Email',
    components: {
      Input,
      Select
    },
    props: {
      handler: Function
    },
    data() {
      return {
        email: '',
        acceptance: '',
        source: this.$route.query.src
      }
    },
    methods: {
      submit() {
        
      }
    }
  }
</script>