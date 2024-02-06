<template>

    <!-- side nav -->
        <div class="py-[4rem] hidden lg:flex max-h-auto flex-col bg-[#16386A] w-[20%] items-center"> 

            <div class="mb-[4.25rem] ">
                <img src="../assets/img/gapel.png" class="w-[8rem] rounded-[5px]" alt="gapel logo">
            </div>
            <div class="flex flex-col w-[70%] font-[inter] font-semibold text-white space-y-7">
                <router-link to='/' :class="[navStyles]" >home</router-link>
                <router-link to='/' :class="[navStyles]" >who we are</router-link>
                <router-link to='/' :class="[navStyles]" >what we do</router-link>
                <router-link to='/' :class="[navStyles]" >latest news</router-link>
            </div>
            <div class="relative rounded-md shadow-[#629DF54D] hover:shadow-md hover:shadow-white shadow-md flex justify-center p-4 mx-auto mt-[1.8rem]">
                <router-link to='/' class=" font-bold text-white" >gallery</router-link>
            </div>

            <div class="mt-[3rem] w-full flex flex-row gap-[1.6rem] pl-4  items-center">
                <Button
                    children="Donate"
                    padBtn = 'highPad'/>
                <small class="font-bold text-white text-lg cursor-pointer">Fr</small>
            </div>

        </div>
        <!-- mobile nav -->


        <div class="border-2 border-red-400 flex flex-row justify-between lg:hidden items-center">
                <div class="w-[25%] md:w-[20%]">
                    <img src="../assets/img/gapel.png" class=" rounded-md" alt="logo">
                </div>
                <span @click="showMenu" class="font-bold shadow-md text-pink-400 cursor-pointer">
                    menu
                </span>
                <div class="absolute">
                <SideNav  v-if="showNav"/>

                </div>
            </div>
</template>

<script setup> 

    import Button from './Button.vue'

    const navStyles = 'border-b-2 pb-2 border-[#629DF54D] hover:border-b-0 hover:text-[#052554] transition duration-300 ease linear leading-none hover:py-2 pl-[.1rem] hover:rounded-[.1rem] hover:bg-[#E8F1FF]'

</script>