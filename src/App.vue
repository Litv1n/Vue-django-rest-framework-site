<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {Navbar, Footer}
}
</script>

<style lang="scss">
#app {
  max-width: 1320px;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
}

</style>
