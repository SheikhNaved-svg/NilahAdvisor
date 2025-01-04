<script setup>

</script>
<template>
    <footer class="bg-[#FFFFFF] p-5 pb-20 md:px-20 lg:px-20 2xl:px-40 3xl:px-80 w-full font-custom flex flex-col lg:flex-row lg:justify-between gap-10">
        <!--left-->
        <div class="flex flex-col gap-5">
            <h1 class="text-[24px] font-semibold leading-[24px] text-[#000000]">NILAH <br>
            ADVISORS</h1>
            <p class="text-[#38587E] "> Scelerisque nisl egestas ultricies mattis<br> egestas porttitor ullamcorper lorem.</p>
        </div>
        <!--right-->
        <div class="flex flex-col gap-12 items-center lg:items-end">
            <div class="flex flex-wrap gap-7 justify-center text-[#263A6E] font-medium">
                <router-link to="/about" >About Us</router-link>
                <router-link to="/contact" >Contact Us</router-link>
                <router-link to="/services" >Services</router-link>
                <router-link to="/gallery" >Gallery</router-link>
                <router-link to="/careers">Careers</router-link>
                <router-link to="/blogs" >Blogs</router-link>
            </div>

            <div class="flex gap-10">
                <img src="../assets/svg/icon5.svg" alt="image" loading="lazy"/>
                <img src="../assets/svg/icon6.svg" alt="image" loading="lazy"/>
                <img src="../assets/svg/icon7.svg" alt="image" loading="lazy"/>
                <img src="../assets/svg/icon8.svg" alt="image" loading="lazy"/>
            </div>
        </div>


    </footer>
</template>