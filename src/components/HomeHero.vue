<script setup>
import { blueball } from '../assets/assets';
import Contactbtn from './Contactbtn.vue';
import { useText } from '../composables/useText';
const { textone,texttwo,textthree}= useText();
</script>

<template>
    <div class="bg-[#FFFFFF] scroll-smooth w-full pt-[220px] pb-10 lg:pt-0 px-5 lg:pl-10 lg:pr-0 xl:pl-40 2xl:pl-40 3xl:pl-80 flex flex-col lg:flex-row gap-14 lg:gap-0">
        <!--left-->
        <div class="w-full lg:pt-[220px] xl:pt-[300px] 2xl:pt-[370px] lg:w-[40%] flex flex-col items-center lg:items-start gap-4 lg:gap-0 ">
            <h1 class="text-[32px] font-customsecond   md:text-[48px] lg:text-[64px] 2xl:text-[80px] 3xl:text-[100px] 4xl:text-[140px] z-[1]   font-bold flex flex-col lg:flex-row lg:gap-5 ">
                <div  class=" h-[48px] md:h-[60px]  lg:h-[80px] 2xl:h-[100px] 3xl:h-[120px] 4xl:h-[160px]  overflow-y-hidden flex flex-col  lg:items-end ">
                    <div ref="textone" class="bg-custom-gradient bg-clip-text text-transparent ">STARTUPS</div>
                    <div ref="texttwo" class="bg-custom-gradient bg-clip-text text-transparent">BUSINESS</div>
                    <div ref="textthree" class="bg-custom-gradient bg-clip-text text-transparent">LEADERS</div>
                </div>
              <div>WELCOME</div>
            </h1>
            <p class="text-center font-custom lg:text-xl  text-gray-600 lg:text-[#000000] lg:pb-5 tracking-wide"> Your Business Success Is Our Business.</p>
           <Contactbtn />
        </div>
        <!--right-->
        <div class="w-full lg:pt-[90px] overflow-x-hidden  lg:w-[60%] flex justify-center lg:justify-normal 2xl:justify-end ">
            <img class="w-full sm:w-[607px]  lg:w-[200%] 2xl:w-[1200px] lg:translate-x-[43%] 2xl:translate-x-[43%] "  :src="blueball" loading="lazy" />
        </div>
        
    </div>
</template>