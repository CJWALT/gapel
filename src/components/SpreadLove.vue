<template>

    <div class="love-bg relative flex flex-col md:flex-row md:justify-between my-[6rem] lg:px-[3rem] w-full gap-4 h-[9rem]">
        <img src="../assets/img/right.png" class="w-[5rem] h-[2rem] object-contain absolute -top-7 hidden md:block left-0"  alt="spiral"/>
        <div class="self-center">
            <h4 class="font-[knewave] uppercase md:text-[2rem] lg:text-[2.6rem] md:text-left text-center text-[1.6rem] text-[#0048B5]">spread love: make a difference </h4>
            <p class="text-center md:text-left font-[mada] text-[.7rem] md:text-[.8rem] lg:text-[1rem] text-[#0048B5]">Your donation paves the way for a world filled with harmony and understanding</p>
        </div>
        <div class="self-center">
            <Button 
                children="Donate"
                padBtn="highPad"
                colorBtn="bg-[#0447AB]"
                btnRound="rounded-[0.8rem]"/>
            
        </div>
        <img src="../assets/img/left.png" alt="spiral"  class="hidden md:block absolute -bottom-9 w-[5.1rem] -right-0 h-[2rem]"/>
    </div>


</template>

<script setup>

import Button from '../components/Button.vue'


</script>