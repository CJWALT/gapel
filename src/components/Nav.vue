<template>
        <div class="py-[4rem] max-h-auto flex flex-col bg-[#16386A] w-[20%] items-center  justify-center"> 

            <div class="mb-[4.25rem] ">
                <img src="../assets/img/gapel.png" class="w-[8rem] rounded-[5px]" alt="gapel logo">
            </div>
            <div class="flex flex-col font-[inter] font-semibold text-white text-center space-y-5">
                <router-link to='/' >home</router-link>
                <router-link to='/' >Who</router-link>
                <router-link to='/' >What</router-link>
                <router-link to='/' >Gallery</router-link>
                <router-link to='/' >Latest news</router-link>
            </div>

            <div class="mt-[5rem]">
                <Button
                    children="Donate"
                    padBtn = 'highPad'/>
            </div>

        </div>
</template>

<script setup> 

    import Button from './Button.vue'

</script>