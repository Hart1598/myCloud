<template>
  <component :is="layout">
    <router-view />
  </component>
</template>


<script>
import EmptyLayout from './layouts/Empty.vue'
import DefaultLayout from './layouts/Default.vue'
import { computed } from 'vue'
export default {
  components: {
    EmptyLayout,DefaultLayout
  },


 computed:{
   layout(){
     return (this.$route.meta.layout || 'Default') + 'Layout'
   }
 }


}
</script>

<style lang="scss">

</style>
