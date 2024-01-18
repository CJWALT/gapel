<template> 

<div class="mt-[1rem] relative z-0 bg-[url(./assets/img/gap-banner.jpg)] bg-cover bg-no-repeat 
                before:absolute before:-z-10 before:top-0 before:h-[100%] before:w-[100%] before:bg-missionrgba">
    <div class="z-30 w-[90%] mx-auto py-[5rem]">
        <h2 class="text-[2rem] md:text-[2.8rem] font-[knewave] text-white">Our Mission</h2>
        <div>
            <p class="text-white text-center mt-[2rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dicta! Explicabo veritatis iusto rerum eaque ut pariatur voluptatibus accusamus enim blanditiis et. Similique quas dolores deserunt minima quibusdam qui voluptatem velit quo, ipsa fuga animi vel totam, recusandae facere voluptatibus?
            </p>
            <div class="flex justify-center mt-[2rem]">
                <Button
                children="learn more"/>
            </div>
          
        </div>
    </div>
</div>

</template>

<script setup>
import Button from './Button.vue';

 

</script>