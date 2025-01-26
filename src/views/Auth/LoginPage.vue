<script>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/modules/authStore';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const username = ref('');
    const password = ref('');
    const authStore = useAuthStore();
    const router = useRouter();

    const handleLogin = () => {
      if (username.value === 'admin' && password.value === 'password') {
        authStore.login('fake-access-token');
        router.push('/');
      } else {
        alert('Неверные имя пользователя или пароль');
      }
    };

    return {
      username,
      password,
      handleLogin,
    };
  },
};
</script>


<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
        <h1 class="text-2xl font-bold text-center">Вход в систему</h1>
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="space-y-1">
            <label for="username" class="block text-sm">Имя пользователя</label>
            <input
              type="text"
              id="username"
              v-model="username"
              required
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div class="space-y-1">
            <label for="password" class="block text-sm">Пароль</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  </template>
  
