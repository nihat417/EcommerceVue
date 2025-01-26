<script setup>
import NavigationMenu from './NavigationMenu.vue'
</script>

<template>
    <header class="flex flex-row justify-between items-center p-4 sm:p-6 lg:p-8">
        <div class="flex flex-row gap-2 items-center">
            <img
                class="w-8 sm:w-10 md:w-12 lg:w-14 rounded-full transition-all duration-300"
                src="/logo.webp"
                alt="logo"
            />
            <div>
                <h2 class="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase transition-all duration-300">
                    Ecommerce Vue
                </h2>
                <p class="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 transition-all duration-300">
                    The best Ecommerce project
                </p>
            </div>
        </div>

        <NavigationMenu/>
    </header>
</template>
