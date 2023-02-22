<template>
  <div class="">
      <Header />
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/User/Layout/Header.vue'
import Footer from '@/components/User/Layout/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>
<style></style>
