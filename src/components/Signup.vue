<template>
  <form @submit.prevent="handleSubmit">
    <input 
      required
      type="text" 
      placeholder="Display name"
      v-model="displayname"
    >
     <input 
      required
      type="email" 
      placeholder="Email"
      v-model="email"
    >
     <input 
      required
      type="password" 
      placeholder="Password"
      v-model="password"
    >
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup(props, context) {
    const { error, signup } = useSignup()
    const displayname = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayname.value)
      
      if(!error.value) {
        context.emit('signup')
      }
    }

    return { error, displayname, email, password, handleSubmit }
  }
}
</script>

<style>

</style>