<script setup>
    import { onMounted } from "vue";
    import MainHeader from '../components/Header.vue';
</script>

<template>
    <div class="bg-white m-auto shadow-xl shadow-grey-200 lg:w-4/5 lg:mt-20 lg:rounded-xl p-5">
        <MainHeader/>

        <div>
            <RouterView v-slot={Component}>
                <keep-alive>
                    <component :is="Component"/>
                </keep-alive>
            </RouterView>
        </div>
    </div>
</template>