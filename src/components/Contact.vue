<template> 

    <div class="bg-contactbgrgba">
        <div class="w-[90%] mx-auto py-[4rem] md:gap-[5%] gap-[10%] lg:gap-[15%] md:flex md:flex-row">

            <div class="md:self-center md:w-[45%] lg:w-[40%]">
                <h2 class="font-[knewave] mb-[1rem] text-[1.8rem] md:text-[2.8rem] leading-none text-[#294877]">Contact us</h2>
                <p class="text-[1rem] lg:text-[1.2rem] text-[#061F45] font-[mada]">We value your thoughts and inquiries as they help us in our mission to create a better world. Contact us today through our form to share your thoughts:</p>
             </div>
            <div class="md:w-[50%] lg:w-[45%] mt-[3rem]">
                <form action="#">
                    <div class="">
                        <input type="text" placeholder="Name:"  :class="fieldClass">
                    </div>
                    <div>
                        <input type="text" placeholder="Email:" :class="fieldClass">
                    </div>
                    <div>
                        <textarea name="" :class="[fieldClass, 'resize-none'] " placeholder="message" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div class="flex justify-end">
                        <Button
                            children="Send"/>
                        </div>
                </form>
            </div>

        </div>

        
    </div>
    

</template>

<script setup>
import Button from './Button.vue';

    const fieldClass = 'w-full capitalize pl-3 placeholder:font-[Montserrat] mb-2  py-3 placeholder:text-[0.9rem] placeholder:font-bold placeholder:text-[#fff] bg-fieldrgba border-2 border-[#7C9BCA] rounded-[0.4rem]'

</script>