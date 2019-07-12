<template>
  <div class="apply__page">
    <h2 class="apply__subtitle">Personal Information</h2>
    <Input
      class="apply__input"
      name="first_name"
      placeholder="e.g. Dennis"
      label="First Name"
      :onChange="handler"
      :value="first_name"
    />
    <Input
      class="apply__input"
      name="last_name"
      placeholder="e.g. Lyninx"
      label="Last Name"
      :onChange="handler"
      :value="last_name"
    />
    <Input
      class="apply__input"
      name="email"
      placeholder="e.g. hunter2@hackthe6ix.com"
      label="Email"
      :onChange="handler"
      :value="email"
    />
    <Select
      label="Gender"
      name="gender"
      :onChange="handler"
      :options='["Male", "Female", "Prefer not to say"]'
    />
  </div>
</template>

<script>
  import { Input, Select } from '@components';

  export default {
    name: 'Personal',
    components: {
      Input,
      Select
    },
    props: {
      handler: Function
    },
    data() {
      return {
        first_name: '',
        last_name: '',
        email: ''
      }
    },
    methods: {
      submit() {
        
      }
    }
  }
</script>