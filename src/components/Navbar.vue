<script setup>
import { RouterLink } from 'vue-router';
import { burger ,cross} from '../assets/assets';
import { useNav } from '../composables/useNav';
const { togglemenu, sidebar, sidemenu, toggleFunction } = useNav();
</script> 

<template>
    <nav style="box-shadow: 0px 4px 34px 0px #2449C81A;" class="w-full  z-10 flex justify-between  px-5 md:px-10 lg:px-10 xl:px-20 2xl:px-40 3xl:px-80 pt-10 pb-5 lg:pb-0  shadow-sm bg-[#FFFFFF] top-0 fixed ">
    <!--logo-->
    <h1 class="font-semibold font-custom text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[20.35px] text-[#000000]"><router-link to="/">NILAH<br>ADVISORS</router-link></h1>
    
    <div class="hidden lg:flex 2xl:text-[18px] 3xl:text-[20px]  gap-[44px] font-custom font-medium tracking-[0.5px]  leading-[64px] text-[#263A6E]">
    <router-link to="/about" >About Us</router-link>
    <router-link to="/contact" >Contact Us</router-link>
    <router-link to="/services" >Services</router-link>
    <router-link to="/gallery" >Gallery</router-link>
    <router-link to="/blogs" >Blogs</router-link>
    </div>

    <!--burger menu-->
    <div class="lg:hidden z-30" @click="toggleFunction">
    <img v-if="togglemenu" class="w-[30px] h-[30px] " :src="cross" alt="image" loading="lazy" />
    <img v-else  class="w-[40px] " :src="burger" alt="image" loading="lazy" />
    </div>
    
    <div ref="sidebar" class="lg:hidden z-10  shadow-xl absolute bg-white w-[92%] h-screen top-0 right-0 translate-x-[100%]">
        <div ref="sidemenu" class="flex flex-col text-gray-600 font-customsecond font-medium text-xl pt-28 px-10">
             <router-link @click="toggleFunction" to="/about" class="opacity-0 border-b border-t py-3 translate-y-5 " >About Us</router-link>
             <router-link @click="toggleFunction" to="/contact" class="opacity-0 border-b py-3 translate-y-5" >Contact Us</router-link>
             <router-link @click="toggleFunction"  to="/services" class="opacity-0 border-b py-3 translate-y-5" >Services</router-link>
             <router-link @click="toggleFunction" to="/gallery" class="opacity-0 border-b py-3 translate-y-5" >Gallery</router-link>
             <router-link @click="toggleFunction"  to="/blogs" class="opacity-0 border-b py-3 translate-y-5" >Blogs</router-link>
        </div>
    </div>
   
    </nav>
</template>