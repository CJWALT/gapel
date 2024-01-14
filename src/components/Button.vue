<template> 

                <button :class='[getPadClass(), bgColor, " rounded-[.8rem] text-white font-bold hover:bg-[#fff] hover:text-[#18478D] text-[1.5rem]"]'>{{ props.children }}</button>

            

</template>

<script setup> 

    
import {defineProps}from 'vue'
        const highPad = 'py-[.9rem] px-[2.1rem]'
        const lowPad = 'py-[.9rem] px-[1.63rem]'

         const btnColor =['red', 'bg-[#052554]', 'green']
         const roundBtn = ['rounded-[35px]', 'rounded-md']
         


         const props = defineProps({ 
            padBtn : String, 
            children: String,
            colorBtn: String,
            btnRound: String
         }
         )


         


        //  const pdBtn = btnPad.includes(props.padBtn) ? `${props.padBtn}` : null;
         const bgColor = btnColor.includes(props.colorBtn) ? `${props.colorBtn}` : 'bg-[#18478D]';
         const btnRounded = roundBtn.includes(props.btnRound) ? `${props.btnRound}` : 'rounded-md';

        const getPadClass = () => {
            return props.padBtn === 'highPad' ? highPad : lowPad;
            };

</script>   