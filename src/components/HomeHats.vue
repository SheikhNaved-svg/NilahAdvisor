<script setup>
import con1 from '../assets/svg/con1.vue';
import con2 from '../assets/svg/con2.vue';
import con3 from '../assets/svg/con3.vue';
import con4 from '../assets/svg/con4.vue';
import con5 from '../assets/svg/con5.vue';
import con6 from '../assets/svg/con6.vue';
</script>
<template>
    <div class="w-full font-custom bg-[#FFFFFF] py-20 px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-40 3xl:px-80 flex flex-col lg:flex-row gap-10 lg:gap-5 2xl:gap-20">
        <!--left-->
        <div class="w-full flex flex-col items-center sm:block lg:w-[60%] p-5 md:p-10 lg:p-5 3xl:px-20 4xl:px-40 bg-cover bg-center bg-cgd rounded-lg lg:rounded-2xl">
           <h1 class="font-custom text-center font-semibold text-[32px] sm:text-[48px] lg:text-[48px] text-[#1A3261]">We Wear Many Hats</h1>
           <div class="mt-5 flex flex-col sm:flex-row gap-5 lg:gap-0 justify-between text-[18px]">

            <div class="flex flex-col gap-5">
            <div class="flex gap-2 items-center"> 
                <div class="w-[50px]"><con1 /></div>
                <p class="font-medium text-[#4A4A49]">Advisory Service</p>
            </div>

            <div class="flex gap-2 items-center">
                <div class="w-[50px]"><con2 /></div>
               
                <p class="font-medium text-[#4A4A49]">Global Business 
                    Expansion</p>
            </div>

            <div class="flex gap-2 items-center">
                <div class="w-[50px]"><con3 /></div>
                <p class="font-medium text-[#4A4A49]">Market Research</p>
            </div>
            </div>

            <div class="flex flex-col gap-5">
            <div class="flex gap-2 items-center">
                <div class="w-[50px]"><con4 /></div>
                <p class="font-medium text-[#4A4A49]">VC Funding</p>
            </div>

            <div class="flex gap-2 items-center">
                <div class="w-[50px]"><con5 /></div>
                <p class="font-medium text-[#4A4A49]">Marketing & Business <br>
                    Strategy Development</p>
            </div>

            <div class="flex gap-2 items-center">
                <div class="w-[50px]"><con6 /></div>
                <p class="font-medium text-[#4A4A49]">Pitch Coach</p>
            </div>
            </div>
        </div>
 </div>

        <!--right-->
        <div class="relative bg-white w-full lg:w-[40%] rounded-lg lg:rounded-2xl p-5 2xl:px-10 flex flex-col justify-center gap-5 shadow-customshadow2 gradient-border">
  
  <div class="bg-[#F1F5FB] px-5 rounded-lg flex gap-5 items-center justify-center">
    <span class="font-semibold text-[28px] lg:text-[40px] leading-[72.8px] tracking-[-3%] text-[#1A3261]">25+</span>
    <span class="font-medium text-[18px] lg:text-[24px] text-[#1A3261]">Startups Engaged</span>
  </div>

  <div class="bg-[#F1F5FB] px-5 rounded-lg flex gap-5  items-center justify-center">
    <span class="font-semibold text-[28px] lg:text-[40px] leading-[72.8px] tracking-[-3%] text-[#1A3261]">30+</span>
    <span class="font-medium text-[18px] lg:text-[24px] text-[#1A3261]">Satisfied Clients</span>
  </div>

  <div class="bg-[#F1F5FB] px-5 rounded-lg flex gap-5 items-center justify-center">
    <span class="font-semibold text-[28px] lg:text-[40px] leading-[72.8px] tracking-[-3%] text-[#1A3261]">5+</span>
    <span class="font-medium text-[18px] lg:text-[24px] text-[#1A3261]">Global Partners</span>
  </div>
</div>
    </div>
   
</template>
<style>
.gradient-border {
  position: relative;
  border: 0.5px solid transparent;
  border-radius: 1rem; /* Matches Tailwind's rounded-lg */
  background-clip: padding-box;
  background-origin: border-box;
  background: linear-gradient(#fff, #fff) padding-box, /* Background color */
              linear-gradient(253.64deg, #211F98 0.72%, rgba(33, 31, 152, 0) 76.59%) border-box; /* Gradient border */
}
</style>