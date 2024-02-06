<template> 
    <main class="block lg:flex relative h-screen overflow-hidden">
      
      
        <SideNav/>
        <Hero/>
    </main>

    <div class="relative animate-arr lg:bg-[url(./assets/img/arranimate.png)]">
        
        <LatestNews/>
    </div>
    <div class="bg-sponsorgba"> 
        <Sponsor/>

    </div>
    <OurMission/>
    <ImpDonate/>
    <Contact/>
    <Footer/>


</template> 


<script setup> 
import Hero from '../components/Hero.vue'
import SideNav from '../components/SideNav.vue'
import LatestNews from '../components/LatestNews.vue'
import OurMission from '../components/OurMission.vue'
import ImpDonate from '../components/ImpDonate.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
import Sponsor from '../components/Sponsor.vue'

 

</script>  