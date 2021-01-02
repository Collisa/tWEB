<template>

  <div class="min-h-screen flex flex-col justify-between">
    <div>
      <Nav/>
      <router-view/>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>
