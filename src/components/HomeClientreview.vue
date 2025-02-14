<script setup>
import { ref } from 'vue';
import Icon7 from '../assets/svg/icon7.vue';
import Iconleft from '../assets/svg/iconleft.vue';
import Iconright from '../assets/svg/iconright.vue';

const carouselRef = ref(null);
const custom = ref(20);
const count = ref(1);

const scrollLeft = () => {
    if (carouselRef.value) {
        const cardWidth = carouselRef.value.querySelector('.shrink-0').offsetWidth + 20;
        carouselRef.value.scrollBy({ left: -cardWidth, behavior: 'smooth' });

        if (custom.value > 20) {
            custom.value -= 20;
            count.value -= 1;
        }
    }
};

const scrollRight = () => {
    if (carouselRef.value) {
        const cardWidth = carouselRef.value.querySelector('.shrink-0').offsetWidth + 20;
        carouselRef.value.scrollBy({ left: cardWidth, behavior: 'smooth' });

        if (custom.value < 100) {
            custom.value += 20;
            count.value += 1;
        }
    }
};
</script>

<template>
    <div class="bg-[#FFFFFF] flex flex-col items-center w-full font-custom py-10 px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-40 3xl:px-80 ">
        <div class="w-full  flex flex-col items-center gap-10 lg:gap-0 lg:flex-row lg:items-center">
            <h1 class="text-[40px] text-center w-full lg:w-[30%] font-semibold text-[#1A3261]">
                What Our<br class='hidden lg:block 3xl:hidden'> Clients Say
            </h1>
            <!--Carousel-->
            <div class="relative flex gap-5 w-full lg:w-[70%] overflow-hidden">
                <div ref="carouselRef" class="flex gap-5 3xl:gap-10 rounded-l-lg overflow-x-auto no-scrollbar lg:w-full">
                    <div
                        v-for="(card, index) in 5"
                        :key="index"
                        :class="index % 2 === 0 ? 'bg-[#FAE4F6]' : 'bg-[#E4EAFA]'"
                        class="w-full lg:w-[600px] xl:w-[750px] 3xl:w-[850px] 4xl:w-[950px] rounded-lg lg:rounded-[16px] p-5 md:p-10  shrink-0">
                        <p :class="index % 2 ===0? 'text-[#551388]': 'text-[#151388]'" class="font-medium ">
                            “Nilah Advisors is indispensable for Startup Founders. Not only they guide you with a good
                            direction, but they also give you the courage to try to solve problems together and never
                            give up.”
                        </p>
                        <div class="flex items-center mt-7 gap-4">
                            <Icon7 />
                            <div :class="index % 2 ===0? 'text-[#551388]': 'text-[#151388]'">
                                <p class="font-medium text-xl">Ms. Ji Hyun Chong</p>
                                <p>CEO & Co-Founder, Giftiicon</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!--scroll bar-->
        <div class="mt-10  flex flex-col lg:flex-row lg:items-center w-full  lg:w-[600px] xl:w-[750px]  gap-5 items-end">
            <div class="w-full">
                <div class="w-full h-[1px] bg-gray-300 relative"></div>
                <div
                    :style="{ width: custom + '%' }"
                    class="h-[2px] duration-500 translate-y-[-1px] bg-[#254FC9] rounded-2xl">
                </div>
            </div>

            <div class="flex gap-5 items-center">
                <div class="">{{ count }}/5</div>
                <button @click="scrollLeft">
                    <Iconleft />
                </button>
                <button @click="scrollRight">
                    <Iconright />
                </button>
            </div>
        </div>
    </div>
</template>


<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
