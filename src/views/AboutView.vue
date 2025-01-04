<script setup>
import { onMounted } from 'vue';
import AboutComp from '../components/AboutComp.vue';
import AboutFounded from '../components/AboutFounded.vue';
import AboutHero from '../components/AboutHero.vue';
import Homecomp2 from '../components/Homecomp2.vue';

onMounted(()=>{
    window.scrollTo(0,0);
})

</script>
<template>
    <AboutHero />
    <AboutFounded />
    <AboutComp />
    <Homecomp2 />
    
</template>