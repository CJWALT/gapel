<template>

         
<section class="z-0 relative w-[80%] max-w-[1180px] bg-[url('./assets/img/mainbg.jpg')] bg-no-repeat bg-center bg-cover
                        before:absolute before:inset-0 before:bg-[#35598F] before:opacity-50
        ">
           
        <div class=" z-20 relative pt-[3rem] w-[90%] mx-auto flex flex-col gap-5 overflow-hidden">
           <div class="p-[.5rem] items-center shadow-md mb-[3.5rem] self-end overflow-hidden whitespace-nowrap right-0 lg:flex md:hidden bg-[#18478D] rounded-[100%] h-[50px] w-[145px]">
            <span
             class="z-20 text-white font-bold marq"
            >Play your part by taking action</span>
           </div>
            
            <div
                class="
                text-center 
                z-20                
                overflow-hidden                
                text-[#E8F1FF] grid-col-2
                "
            >
                <h2 class="leading-[3.3rem] mb-[2rem] font-[Candal] text-[54px] uppercase font-normal">Global Alliance <br/> for peace leadership</h2>
                <small class="font-[Kavoon] tracking-[.4rem] w-[60%] mx-auto block text-center"> GAPEL: The peace leadership is everyday practice </small>
            </div>
        </div>
        <div class=" relative w-full flex justify-center mt-[3.7rem] z-20">
            <Button
            btnRound="rounded-[35px]"
            colorBtn="bg-[#052554]" 
            children="Donate"
            padBtn="lowPad"/>
        </div>
       
        </section>


</template>

<script setup>
import Button from './Button.vue';

 

</script>