<script setup>
import {ref} from 'vue';
let show=ref(0)
const data=ref([
    {
        id:1,
        que:"Sagittis odio eget tempus volutpat. Ullamcorper ",
        ans:"Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum. Non at eget nullam lacus aliquam lectus nulla vulputate mattis. Lorem molestie."
    },
    {
        id:2,
        que:"Sagittis odio eget tempus volutpat. Ullamcorper ",
        ans:"Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum. Non at eget nullam lacus aliquam lectus nulla vulputate mattis. Lorem molestie."
    },
    {
        id:3,
        que:"Sagittis odio eget tempus volutpat. Ullamcorper ",
        ans:"Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum. Non at eget nullam lacus aliquam lectus nulla vulputate mattis. Lorem molestie."
    },
    {
        id:4,
        que:"Sagittis odio eget tempus volutpat. Ullamcorper ",
        ans:"Sagittis odio eget tempus volutpat. Ullamcorper enim nunc urna feugiat volutpat quam risus amet. Enim imperdiet diam etiam posuere fringilla tellus interdum. Non at eget nullam lacus aliquam lectus nulla vulputate mattis. Lorem molestie."
    },
])

const togglefunction=(id)=>{
    if(show.value===id){
        show.value=0;
    }
    else{
        show.value=id;
    }
   
}
</script>
<template>
   <div class="w-full bg-[#F4FBFF] font-custom my-5 px-5 py-16 md:px-32 flex justify-center">
        <div class="w-full lg:w-[500px] xl:w-[550px] 2xl:w-[600px] 3xl:w-[800px] flex flex-col gap-10">
            <h1 class="font-medium text-[#263A6E] text-center  text-[28px] lg:text-[38px]">Frequently Asked Questions</h1>
            <div class="flex flex-col gap-3">
            <div v-for="(item,index) in data" :key="index" >
                <div @click="togglefunction(item.id)"  :class="['flex items-center justify-between py-2 px-3 md:px-5 md:py-3 2xl:px-8 2xl:py-5 rounded-lg', show === item.id ? 'bg-[#FFFFFF]' : 'bg-[#ECF5FF]']">
                    <h1 :class="['text-[#38587E] ',show===item.id?'font-semibold':'font-medium']">{{ item.que }}</h1> 
                    <div>
                        <img v-if="show===item.id" class="w-6" src="../assets/svg/icon16.svg"  />
                        <img v-else class="w-6" src="../assets/svg/icon15.svg"  />
                        
                    </div>
                </div>
                <p v-if="show===item.id" class="text-[#38587E] rounded-b-lg translate-y-[-12px] bg-[#FFFFFF] p-3 md:px-5 md:py-5 2xl:px-8 2xl:py-5">{{ item.ans }}</p>
            </div>
            </div>

        </div>
    </div>
</template>

    


