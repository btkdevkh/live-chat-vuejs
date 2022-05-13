<template>
  <form @submit.prevent="handleSubmit">
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
    <button>Log In</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup(props, context) {
    const { error, login } = useLogin()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      await login(email.value, password.value)

      if(!error.value) {
        context.emit('login')
      }
    }

    return { error, email, password, handleSubmit }
  }
}
</script>

<style>

</style>