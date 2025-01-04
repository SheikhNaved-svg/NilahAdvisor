<script setup>
import Formcontact from './Formcontact.vue';

</script>
<template>
    <div class="w-full bg-[#FFFFFF] font-custom px-5 md:px-10 xl:px-20 2xl:px-40 3xl:px-80  flex flex-col  lg:flex-row">
        <!--left-->
        <div class="w-full lg:w-[50%] flex flex-col gap-5 lg:py-12 lg:pr-28">
            <h1 class="font-semibold text-[48px] text-center  lg:text-start text-[#1A3261]">Contact Us</h1>
            <p class="font-medium text-[#38587E] text-center lg:text-start">Scelerisque nisl egestas ultricies mattis egestas porttitor ullamcorper lorem.</p>
            <div  style="box-shadow: -12px 19px 32px 0px #1B3DB60D;" class=" p-5 md:p-10 rounded-xl lg:rounded-3xl flex flex-col gap-5">
                <div class="flex gap-4 items-center">
                    <img class="w-6" src="../assets/svg/icon12.svg" alt="imag" loading="lazy"/>
                    <p class="font-medium text-[#5869A2]">nilahadvisors@nilahadvisors.com</p>
                </div>
                <div class="flex gap-4 items-center">
                    <img class="w-6" src="../assets/svg/icon13.svg" alt="imag" loading="lazy"/>
                    <p class="font-medium text-[#5869A2]">68586999999</p>
                </div>
                <div class="flex gap-4 items-center">
                    <img class="w-6" src="../assets/svg/icon14.svg" alt="imag" loading="lazy"/>
                    <p class="font-medium text-[#5869A2]">nilahadvisors@nilahadvisors.com</p>
                </div>
               
            </div>
        </div>
        <!--right-->
        <div class="w-full lg:w-[50%] flex justify-center ">
            <Formcontact />
        </div>

    </div>
</template>