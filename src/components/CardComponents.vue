<script setup>
import { ref } from 'vue';

import likeone from '../assets/like-1.svg';
import liketwo from '../assets/like-2.svg';
import snekph from "../assets/sneakers/sneakers-1.jpg"

const isLiked = ref(true)

const onClickedLike = () => {
    isLiked.value = !isLiked.value
}
</script>

<template>
    <div class="relative flex flex-col max-w-[300px] shadow-2xl shadow-zinc-400 rounded-xl my-[10px] p-4 sm:p-6 cursor-pointer transition 
        hover:shadow-xl hover:shadow-[#7fffd4] hover:-translate-y-2 transform duration-300">
        <div @click="onClickedLike" class="absolute top-4 left-4 sm:top-6 sm:left-6">
            <img :src="isLiked ? likeone : liketwo" alt="Favorite" class="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        
        <img :src="snekph" class="sm:h-56 lg:w-54 object-center rounded-md" alt="Sneaker" />
        
        <p class="mt-4 text-sm sm:text-base lg:text-lg text-gray-700">Salam</p>
        
        <div class="flex justify-between items-center mt-4 sm:mt-6">
            <div class="flex flex-col">
                <span class="text-xs sm:text-sm text-slate-400">Qiymet</span>
                <span class="text-base sm:text-lg font-bold text-gray-900">12 manat</span>
            </div>
            <img src="../assets/plus.svg" alt="Plus" class="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
    </div>
</template>
