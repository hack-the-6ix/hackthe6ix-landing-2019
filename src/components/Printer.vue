<template>
  <div>
    Printer
  </div>
</template>

<script>
  import { Select } from '@components';
  import axios from 'axios';

  export default {
    name: 'Printer',
    components: {
    },
    data() {
      return {
        event_id: 1
      };
    },
    mounted() {
      this.onInit()
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
          mutation {
            qr(code:"test")
          }
        `
        axios.post('http://localhost:4000/graphql', { query: query }).then((response) => {
          console.log(response)
        })
      } catch (error) {
        alert(error)
      }
      }
    }

}
</script>