<script setup>
    import { ref } from "vue";

    const isMenuOpen = ref(false);

    function toggleMenu() {
      isMenuOpen.value = !isMenuOpen.value;
    }
</script>

<template>
  <nav class="relative">
    <button
      v-if="!isMenuOpen"
      class="md:hidden flex items-center px-4 py-2 z-50"
      @click="toggleMenu"
      aria-label="Open menu">
      <img src="../assets/hamburger.svg" alt="Open menu" class="w-6 transition-transform duration-300"/>
    </button>

    <div
      class="fixed top-0 right-0 h-full bg-white shadow-lg p-6 flex flex-col gap-6 transform transition-transform w-2/4 duration-300 ease-in-out z-40"
      :class="[
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        'md:relative md:translate-x-0 md:flex md:flex-row md:shadow-none md:p-0 md:w-full'
      ]"
    >
      <button
        v-if="isMenuOpen"
        class="self-end mb-4 md:hidden"
        @click="toggleMenu"
        aria-label="Close menu">
        <img src="../assets/close.svg" alt="Close menu" class="w-6 transition-transform duration-300"/>
      </button>

      <button class="flex flex-row items-center" @click="toggleMenu">
        <img class="w-5 mx-1" src="../assets/cart.svg" alt="Basket" />
        <b>Basket</b>
      </button>
      <button class="flex flex-row items-center" @click="toggleMenu">
        <img class="w-5 mx-1" src="../assets/heart.svg" alt="Favourite" />
        <p>Favourite</p>
      </button>
      <button class="flex flex-row items-center" @click="toggleMenu">
        <img class="w-5 mx-1" src="../assets/profile.svg" alt="Profile" />
        <p>Profile</p>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
      @click="toggleMenu"
    ></div>
  </nav>
</template>
