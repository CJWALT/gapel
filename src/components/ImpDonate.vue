<template> 

    <div class="w-[90%] mx-auto py-[3.4rem]"> 
        <h2 class="text-center font-[knewave] text-[#294877] text-[2.8rem]">Our Impact</h2>
        
        

        
            <div class="relative flex flex-row gap-5 xl:pl-[7rem] xl:pr-[7rem] overflow-x-scroll"> 
                <ImpactCard/>
                <ImpactCard/>
                <ImpactCard/>
            </div>


            <SpreadLove/>
        
        
        

    </div> 

    
</template>

<script setup>
import ImpactCard from './ImpactCard.vue';
import SpreadLove from './SpreadLove.vue';


</script>