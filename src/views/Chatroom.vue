<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import { watch } from '@vue/runtime-core'
import ChatForm from '../components/ChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
  components: { Navbar, ChatForm, ChatWindow },
  setup() {
    const router = useRouter()
    const { user } = getUser()
    
    watch(user, () => !user.value && router.push({ name: 'Welcome'}))
  }
}
</script>

<style>

</style>