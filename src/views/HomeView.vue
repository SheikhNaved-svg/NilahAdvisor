<script setup>
import { onMounted } from 'vue';
import HomeCards from '../components/HomeCards.vue';
import HomeClientreview from '../components/HomeClientreview.vue';
import HomeComp from '../components/HomeComp.vue';
import HomeContact from '../components/HomeContact.vue';
import HomeHats from '../components/HomeHats.vue';
import HomeHero from '../components/HomeHero.vue';
import Homepartner from '../components/Homepartner.vue';
import Homecomp2 from '../components/Homecomp2.vue';
onMounted(()=>{
    window.scrollTo(0,0);
})
</script>
<template>
    <div class="scroll-smooth">
    <HomeHero />
    <HomeCards />
    <HomeComp />
    <HomeHats />
    <HomeContact />
    <HomeClientreview />
    <Homepartner />
    <Homecomp2 />
    </div>
</template>