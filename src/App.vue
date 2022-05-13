<template>
  <router-view/>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    onMounted(() => {  
      document.title = "Live Chat With VueJS"
    })
  }
}
</script>