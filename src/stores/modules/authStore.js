import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user') || 'null'));

  const login = (accessToken) => {
    user.value = { accessToken };
    localStorage.setItem('user', JSON.stringify(user.value));
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem('user');
  };

  const isAuthenticated = () => {
    return !!user.value?.accessToken;
  };

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
});
