<script setup>
import { onMounted } from 'vue';
import Contactcontact from '../components/Contactcontact.vue';
import ContactHero from '../components/ContactHero.vue';
import Contactque from '../components/Contactque.vue';

onMounted(()=>{
    window.scrollTo(0,0);
})
</script>
<template>
    <ContactHero />
    <Contactcontact />
    <Contactque />

</template>