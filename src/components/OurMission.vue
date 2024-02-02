<template> 

<div class="mt-[1rem] relative z-0 bg-[url(./assets/img/gap-banner.jpg)] bg-cover bg-center bg-no-repeat 
                before:absolute before:-z-10 before:top-0 before:h-[100%] before:w-[100%] before:bg-missionrgba">
    <div class="z-30 w-[90%] mx-auto py-[5rem] overflow-hidden">
        <h2 class="text-[2rem] md:text-[2.8rem] font-[knewave] text-white">Our Mission</h2>
        <div class="flex flex-col items-center">
            <p class="w-[80%] md:w-[70%] text-[1rem] lg:text-[1.5rem] font-semibold text-white text-center mt-[2rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt laboriosam cum expedita dolorem modi, voluptates autem praesentium similique dolorum consequuntur ipsam iste sed quasi beatae velit alias eum ullam doloremque excepturi repudiandae voluptas odio! Natus consequatur in quas atque. Veniam nulla ipsa provident officiis qui! Incidunt libero eius saepe.
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