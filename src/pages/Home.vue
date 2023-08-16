<template>
  <Swiper/>
  <HeaderContent/>
  <Services/>
  <Popular/>
  <Useplace/>
  <Offer/>
  <Blog/>
  <Footer/>

</template>

<script>
  import Swiper from '@/components/Swiper.vue';
  import HeaderContent from '@/components/HeaderContent.vue';
  import Services from '@/components/Services.vue';
  import Popular from '@/components/Popular.vue';
  import Useplace from '@/components/Useplace.vue';
  import Offer from '@/components/Offer.vue';
  import Blog from '@/components/Blog.vue';
  import Footer from '@/components/Footer.vue';
export default {
    components: { Swiper, HeaderContent, Services, Popular, Useplace, Offer, Blog, Footer }
}
</script>

<style>

</style>