<template>
  <ul class='accordion'>
    <li
        class=''
        v-for='(item, key) in items'
        :key='key'
    >
        <h3 :is='labelAs'>{{ item.title }}</h3>
        <div>
        </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Accordion',
    data() {
        return {
            expanded: new Array(this.items.length).fill(false)
        };
    },
    props: {
        labelAs: String,
        columns: {
            type: Number,
            default: () => 2
        },
        items: {
            type: Array,
            default: () => []
        }
    }
  }
</script>

<style lang='scss' scoped>
  @import '~@styles/_mixins.scss';
  @import '~@styles/_variables.scss';

  .accordion {
    
  }
</style>
