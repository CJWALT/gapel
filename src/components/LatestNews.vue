<template>

    <div class="w-[90%] mx-auto py-[7.8rem]">
        
        <div class="flex flex-row items-center gap-2">
            <div class="">
                <h2 class="text-[#16386A] font-[Knewave] text-[2rem] font-bold">Latest News </h2>
            </div>
            <div class="flex flex-row gap-4">
                <span class="w-1 h-auto rounded-md bg-[#24549C] "></span>
                <span class="bg-[#18478D] rounded-full p-3">arrow</span>
            </div>

        </div>

        <div class="w-[75%] lg:border-2 lg:border-red-400 md:border-2 md:border-red-400 flex flex-col md:flex-row gap-[1.7rem] mx-auto pt-[3.7rem]">
           <NewsCard />  
           <NewsCard />  
           <NewsCard />  
        </div>

        
        
        
    </div>



</template>

<script setup> 
    import NewsCard from './NewsCard.vue';


</script>