<template>

    <!-- side nav -->

    <div :class="[showNav ? showSideNavClass + ' slide-nav-in' : sideNavClass + ' slide-nav-out', 'pt-[4rem]', 'h-full', 'bg-[#16386A]', 'shadow', 'shadow-right', 'shadow-[#C1DAFE]', 'navShadow']">
    
            <div class="md:mb-[2.2rem] ">
                <img src="../assets/img/gapel.png" class="w-[8rem] rounded-[5px] hidden lg:block" alt="gapel logo">
            </div>
            <div class="flex flex-col mx-auto w-[70%] lg:mt-[0rem] mt-[5rem] font-[inter] font-semibold text-white">
                <router-link to='/' :class="[navStyles, 'navBorderGrad']" >home</router-link>
                <router-link to='/whoweare' :class="[navStyles, 'navBorderGrad']">who we are</router-link>
                <router-link to='/whatwedo' :class="[navStyles, 'navBorderGrad']"> what we do</router-link>
                <router-link to='/latestnews' :class="[navStyles, 'navBorderGrad']">latest news</router-link>
            </div>
            
                <router-link to='/gallery' class=" relative rounded-md shadow-[#629DF54D] hover:shadow-md hover:shadow-white shadow-md flex justify-center px-3 py-2 mx-auto mt-[1.8rem] font-bold text-white" >gallery</router-link>
            
            <div class="mt-[4.2rem] w-[90%] flex flex-row gap-[1.6rem] mx-auto items-center">
                <Button
                    children="Donate"
                    padBtn = 'highPad'/>
                <small class="font-bold text-white text-lg cursor-pointer">Fn</small>
            </div>

        </div>
        <!-- mobile nav -->


        <div class="absolute top-0 right-0 z-50 w-[90%] py-[3rem] mx-auto left-0 flex flex-row justify-between lg:hidden items-center">
                <div class="w-[25%] md:w-[20%]">
                    <img src="../assets/img/gapel.png" class=" rounded-md" alt="logo">
                </div>
                <span @click="showMenu" class="font-bold shadow-md text-white cursor-pointer">
                    <svg-icon type="mdi" :path="path" class="w-[3rem] h-[3rem]"></svg-icon>
                </span>
                
            </div>
</template>

<script setup> 
    
    import {ref} from 'vue';
    import Button from './Button.vue';
    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiMenu } from '@mdi/js';

    
  const path = mdiMenu;

    const navStyles = 'pt-[1.2rem] pb-1 pl-2 hover:text-[#052554] transform transition-transform translate-x-0 duration-900 ease-in leading-none hover:rounded-[.1rem] hover:bg-[#E8F1FF] sm:left-[-30px] md:left-[0px]'

    const sideNavClass = 'hidden lg:flex max-h-auto lg:flex-col items-center gap-[.2rem] lg:max-w-[20rem] lg:w-[20rem]'
    const showSideNavClass = 'absolute z-30 top-0 left-0 flex flex-col items-center w-[15rem] max-w-[15rem]'



    const showNav = ref(false);

    const showMenu = () =>{
        showNav.value = !showNav.value
        
    }
    

</script>