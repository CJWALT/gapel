<template>

         
<section class="z-0 h-full relative lg:min-w-[77%] w-[100%]
                        before:absolute before:inset-0 before:bg-[#35598F] before:opacity-50
        ">
        
        <video class="h-full absolute w-full object-center object-cover -z-10 top-0 right-0" loop muted autoplay preload="auto">
            <source src="../assets/videobg/gapel-bg.mp4" type="video/mp4"> 
            Your browser does not support the video

        </video>


        <div class=" z-50 relative pt-[3rem] w-[90%] mx-auto flex flex-col gap-5 overflow-hidden">
          
            <div class="flex flex-col h-[100vh] gap-8 justify-center">

                <div
                class="
                text-center 
                z-20                
                overflow-hidden                
                text-[#E8F1FF]
                 
                lg:mt-0
                "
            >
                <h2 class=" leading-[1.7rem] md:leading-[3.3rem] mb-[1.4rem] lg:mb-[2rem] font-[Candal] text-[1.3rem] md:text-[54px] uppercase font-normal">Global Alliance <br/> for peace leadership</h2>
                <small class="font-[Kavoon] text-[#E1EDFF] text-[.7rem] md:text-[1rem] tracking-[.1rem] md:tracking-[.4rem] md:w-[40rem] md:max-w-[40rem] w-[20rem] mx-auto block text-center"> GAPEL: The peace leadership is everyday practice </small>
            </div>
                <div class=" relative w-full flex justify-center z-20">
                                <Button
                                btnRound="rounded-[35px]"
                                colorBtn="bg-[#052554]" 
                                children="Donate"
                                padBtn="lowPad"/>
                            </div>
            </div>
            
        </div>
        
       
        </section>


</template>

<script setup>
import Button from './Button.vue';

</script>