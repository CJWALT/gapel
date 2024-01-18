<template>

    <div class="w-[90%] mx-auto py-[7.8rem] md:border-2 md:border-red-400">
        
        <div class="flex flex-row items-center gap-2">
            <div class="">
                <h2 class="text-[#16386A] font-[Knewave] text-[2rem] font-bold">Latest News </h2>
            </div>
            <div class="flex flex-row gap-4">
                <span class="w-1 h-auto rounded-sm bg-[#24549C] "></span>
                <span class="bg-[#18478D] rounded-full p-3">arrow</span>
            </div>

        </div>

        <div class="w-[75%] flex flex-col md:flex-row gap-[1.7rem] mx-auto pt-[5.6rem]">
           <NewsCard />  
           <NewsCard />  
           <NewsCard />  
        </div>
        
        
    </div>



</template>

<script setup> 
    import NewsCard from './NewsCard.vue';


</script>