<template> 

<nav class="border-red-400 border-2 w-[100%] ">

    <div class="w-[90%] mx-auto flex flex-row justify-between">
        <div class="w-[8rem]">
            <img src="../assets/img/gapel.png" alt="logo"/>
        </div>

        <div>
            <svg-icon type="mdi" :path="path" class="w-[3rem] h-[3rem]"></svg-icon>
        </div>
    </div>
    

</nav>

</template> 



<script setup> 

    import SvgIcon from '@jamescoyle/vue-icon';
    import { mdiMenu } from '@mdi/js';


</script>