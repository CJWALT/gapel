<template> 
    <main class="flex relative h-screen overflow-hidden">
      
      
        <SideNav/>
        <Hero/>
    </main>

    <div class="relative">
        <span class="hidden md:block radialBox w-[5rem] h-[4rem] absolute top-0"></span>
        <NewsSponsor/>

    </div>
    <OurMission/>
    <ImpDonate/>
    <Contact/>
    <Footer/>


</template> 


<script setup> 
import Hero from '../components/Hero.vue'
import SideNav from '../components/SideNav.vue'
import NewsSponsor from '../components/NewsSponsor.vue'
import OurMission from '../components/OurMission.vue'
import ImpDonate from '../components/ImpDonate.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'

 

</script>  