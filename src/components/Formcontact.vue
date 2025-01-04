<script setup>
import {reactive } from 'vue'
let formData=reactive({
    name:"",
    phone:"",
    email:"",
    msg:"",
})
const submitfun=()=>{
    formData.name="";
    formData.phone="";
    formData.email="";
    formData.msg="";
    
    console.log(formData)
}
</script>
<template>
    <form @submit.prevent="submitfun" class="w-full md:w-[530px] 2xl:w-[700px] flex flex-col items-center gap-3   rounded-xl bg-cgd2 bg-center bg-cover  my-14 px-5  py-10">
            <div class="flex flex-col gap-3 w-full md:flex-row ">
                <input v-model="formData.name" type="text" placeholder="Name" required class="w-full px-3 py-2  text-[#757575] font-medium rounded-md focus:outline-none"/>
                <input v-model="formData.phone" type="number" placeholder="Phone" required class="w-full  px-3 py-2  text-[#757575] font-medium rounded-md focus:outline-none"/>
            </div>
            <input v-model="formData.email" type="email" placeholder="Email" required class="w-full  px-3 py-2  text-[#757575] font-medium rounded-md focus:outline-none"/>
            <textarea
            v-model="formData.msg"
            rows="4"
            placeholder="Message"
            class="w-full px-4 py-2  text-[#757575] resize-none   rounded-md focus:outline-none font-medium "
            ></textarea>
            <button type="submit" class="text-[#FFFFFF] mt-2 font-medium  bg-custom-gradient rounded-md w-[150px] lg:w-full py-2">Submit</button>
</form>
</template>