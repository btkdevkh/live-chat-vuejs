<template>
  <div class="welcome">
    <div v-if="showForm">
      <h2>Login</h2>
      <Login @login="enterChat" />

      <p>No account ? 👉 <span class="link-form" @click="showForm = !showForm">Signup</span></p>
    </div>
    <div v-else>
      <h2>Signup</h2>
      <Signup @signup="enterChat" />

      <p>Have an account ? 👉 <span class="link-form" @click="showForm = !showForm">Login</span></p>
    </div>
  </div>
</template>

<script>
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
  components: { Signup, Login },
  setup() {
    const router = useRouter()
    const showForm = ref(true)

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    return { showForm, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
  .link-form {
    text-decoration: underline;
    cursor: pointer;
  }
</style>