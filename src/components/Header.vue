<script setup>
    import NavigationMenu from './NavigationMenu.vue'
</script>

<template>
    <header class="flex flex-row justify-between">
        <div class="flex flex-row gap-2 items-center">
            <img class="w-[50px] rounded-full" src="../../public/logo.webp" alt="logo"/>
            <div>
                <h2 class="font-bold text-xl uppercase">Ecommerce Vue</h2>
                <p class="text-slate-400">The best Ecommerce project</p>
            </div>
        </div>

        <NavigationMenu/>
    </header>
</template>