<!-- src/views/NotFound.vue -->
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">404 - Страница Не Найдена</h1>
        <p class="mb-6">Извините, но страница, которую вы ищете, не существует.</p>
        <router-link to="/" class="text-blue-500 hover:underline">Вернуться на Главную</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  /* Добавьте стили при необходимости */
  </style>
  