<template>

    <div class="w-[90%] mx-auto py-[7.8rem]">
        
        <div class="flex flex-row items-center gap-2">
            <div class="">
                <h2 class="text-[#16386A] font-[Knewave] text-[2rem] font-bold">Latest News </h2>
            </div>
            <div class="flex flex-row gap-4">
                <span class="w-1 h-auto rounded-md bg-[#24549C] "></span>
                <span class="bg-[#18478D] rounded-full text-white text-[1rem] cursor-pointer p-2 animate-arrow-right"><svg-icon type="mdi" :path="path" class="w-[1.7rem] h-[1.7rem]"></svg-icon></span>
            </div>

        </div>

        <div class="w-[95%] lg:w-[90%] flex flex-col md:flex-row md:gap-[2rem] justify-center lg:gap-[1.4rem] gap-[1.7rem] mx-auto pt-[3.7rem]">
           <NewsCard />  
           <NewsCard />  
           <NewsCard />  
        </div>

        
        
        
    </div>



</template>

<script setup> 
    import NewsCard from './NewsCard.vue';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiArrowRightDropCircle } from '@mdi/js';

    const path = mdiArrowRightDropCircle;


</script>