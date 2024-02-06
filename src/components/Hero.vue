<template>

         
<section class="z-0 relative lg:max-w-[80%] lg:min-w-[77%] w-[100%]
                        before:absolute before:inset-0 before:bg-[#35598F] before:opacity-50
        ">
        
        <video class="h-full absolute w-full object-center object-cover -z-10 top-0 right-0" loop muted autoplay preload="auto">
            <source src="../assets/videobg/gapel-bg.mp4" type="video/mp4"> 
            Your browser does not support the video

        </video>


        <div class=" z-50 relative pt-[3rem] w-[90%] mx-auto flex flex-col gap-5 overflow-hidden">
           <div class="p-[.5rem] items-center shadow-md mb-[3.5rem] self-end overflow-hidden whitespace-nowrap right-0 lg:flex hidden bg-[#18478D] rounded-[100%] h-[50px] w-[145px]">
            <span
             class="z-20 text-white font-bold marq"
            >Play your part by taking action</span>
           </div>
            
            <div
                class="
                text-center 
                z-20                
                overflow-hidden                
                text-[#E8F1FF]
                 mt-[4.5rem]
                lg:mt-0
                 md:mt-[4rem]
                "
            >
                <h2 class=" leading-[1.7rem] md:leading-[3.3rem] mb-[2rem] font-[Candal] text-[24px] md:text-[54px] uppercase font-normal">Global Alliance <br/> for peace leadership</h2>
                <small class="font-[Kavoon] tracking-[.2rem] md:tracking-[.4rem] w-[80%] md:w-[60%] mx-auto block text-center"> GAPEL: The peace leadership is everyday practice </small>
            </div>
        </div>
        <div class=" relative w-full flex -bottom-[5rem] md:-bottom-0 md:mt-[2rem] justify-center z-20">
            <Button
            btnRound="rounded-[35px]"
            colorBtn="bg-[#052554]" 
            children="Donate"
            padBtn="lowPad"/>
        </div>
       
        </section>


</template>

<script setup>

import { ref } from 'vue'
import Button from './Button.vue';
import SideNav from './SideNav.vue'


const showNav = ref(false)

const showMenu = () =>{ 
    showNav.value= !showNav.value;
}



</script>