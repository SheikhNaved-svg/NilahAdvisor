<script setup>
import { defineProps } from 'vue';
defineProps({
    title:String,
    content:String
})
</script>
<template>
    <div class="font-custom p-5 md:p-10 lg:p-8 2xl:p-10  4xl:p-16 shadow-customshadow rounded-[15px] ">
        <h1 class="font-medium text-[#1A3261] text-[32px] leading-[41.6px] tracking-[-3%]">{{ title }}</h1>
        <p class="mt-[10px] text-[18px] font-custom font-medium  leading-[27px] text-[#38587E]">{{ content }}</p>
    </div>
   

</template>