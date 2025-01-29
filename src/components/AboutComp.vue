<script setup></script>
<template>
    <div class="w-full bg-[#FFFFFF] font-custom p-5  md:px-20 lg:px-10 xl:px-20 2xl:px-40 3xl:px-80 flex flex-col gap-16 lg:gap-5 2xl:gap-7 3xl:gap-10 lg:flex-row">
        <!--left-->
        <div class="relative w-full lg:w-[70%] shadow-[-8px_8px_32px_0px_#2347c71a] rounded-xl p-5 bg-white gradient-border">
  
         <div class="relative  flex flex-col gap-7 lg:px-5 xl:px-10">
    <h1 class="text-[28px] lg:text-[48px] md:text-center  lg:text-start font-semibold text-[#1A3261]">
      Tortor Turpis Ante<br class="hidden lg:block"> Hendrerit Cras. Ipsum.
    </h1>
    <div class="flex flex-wrap justify-center lg:justify-between gap-5">
      <img class="w-16" src="../assets/svg/icon.svg" alt="icon" loading="lazy" />
      <img class="w-16" src="../assets/svg/icon1.svg" alt="icon" loading="lazy" />
      <img class="w-16" src="../assets/svg/icon2.svg" alt="icon" loading="lazy" />
      <img class="w-16" src="../assets/svg/icon3.svg" alt="icon" loading="lazy" />
      <img class="w-16" src="../assets/svg/icon4.svg" alt="icon" loading="lazy" />
    </div>
  </div>
</div>
        <!--right-->
        <div class="relative w-full lg:w-[30%] p-5 lg:py-10 xl:px-10 flex  shadow-[-8px_8px_32px_0px_#2347c71a] rounded-xl gradient-border">
  <!-- Content -->
  <div class="relative  flex flex-col w-full h-full justify-between">
    <div class="flex justify-between py-3 px-5 2xl:px-10 w-full bg-[#F1F5FB] rounded-lg">
      <img class="w-12" src="../assets/svg/icon9.svg" alt="icon" loading="lazy" />
      <div class="font-semibold text-[30px]">25,000+</div>
    </div>

    <div class="flex justify-between py-3 px-5 2xl:px-10 w-full bg-[#F1F5FB] rounded-lg mt-5">
      <img class="w-12" src="../assets/svg/icon9.svg" alt="icon" loading="lazy" />
      <div class="font-semibold text-[30px]">350,000+</div>
    </div>
  </div>
</div>

    </div>
</template>
<style>
.gradient-border {
  position: relative;
  border: 0.5px solid transparent;
  border-radius: 1rem; /* Matches Tailwind's rounded-xl */
  background-clip: padding-box;
  background-origin: border-box;
  background: linear-gradient(#fff, #fff) padding-box, /* Background color */
              linear-gradient(253.64deg, #211F98 0.72%, rgba(33, 31, 152, 0) 76.59%) border-box; /* Gradient border */
}
</style>