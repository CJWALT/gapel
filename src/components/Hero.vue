<template>

         
<section class="z-0 relative lg:w-[80%] w-[100%] bg-[url('./assets/img/mainbg.jpg')] bg-no-repeat bg-center bg-cover
                        before:absolute before:inset-0 before:bg-[#35598F] before:opacity-50
        ">
           
        <div class=" z-20 relative pt-[3rem] w-[90%] mx-auto flex flex-col gap-5 overflow-hidden">
           <div class="p-[.5rem] items-center shadow-md mb-[3.5rem] self-end overflow-hidden whitespace-nowrap right-0 lg:flex hidden bg-[#18478D] rounded-[100%] h-[50px] w-[145px]">
            <span
             class="z-20 text-white font-bold marq"
            >Play your part by taking action</span>
           </div>
            <div class="flex flex-row justify-between lg:hidden items-center">
                <div class="w-[25%] md:w-[20%]">
                    <img src="../assets/img/gapel.png" class=" rounded-md" alt="logo">
                </div>
                <span class="font-bold shadow-md text-pink-400 cursor-pointer">
                    menu
                </span>
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
import Button from './Button.vue';
import SideNav from './SideNav.vue';

 

</script>