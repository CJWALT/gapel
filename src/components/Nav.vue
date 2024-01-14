<template>
        <div class="py-[4rem] md:hidden max-h-auto flex flex-col bg-[#16386A] w-[20%] items-center  justify-center"> 

            <div class="mb-[4.25rem] ">
                <img src="../assets/img/gapel.png" class="w-[8rem] rounded-[5px]" alt="gapel logo">
            </div>
            <div class="flex flex-col w-[70%] font-[inter] font-semibold text-white space-y-5">
                <router-link to='/' :class="[navStyles]" >home</router-link>
                <router-link to='/' :class="[navStyles]" >who we are</router-link>
                <router-link to='/' :class="[navStyles]" >what we do</router-link>
                <router-link to='/' :class="[navStyles]" >latest news</router-link>
            </div>
            <div class="relative flex w-full justify-center p-3 mx-auto mt-[1.6rem]">
                <router-link to='/' class=" font-bold text-white" >Gallery</router-link>
            </div>

            <div class="mt-[5rem] w-full flex flex-row gap-[2rem] pl-4  items-center">
                <Button
                    children="Donate"
                    padBtn = 'highPad'/>
                <small class="font-bold text-white text-lg">Fn</small>
            </div>

        </div>
</template>

<script setup> 

    import Button from './Button.vue'

    const navStyles = 'border-b-2 pb-1 border-[#629DF54D] hover:border-b-0 hover:text-[#052554] transition duration-300 ease linear leading-none hover:py-2 px-[.1rem] hover:rounded-[.1rem] hover:bg-[#E8F1FF]'

</script>