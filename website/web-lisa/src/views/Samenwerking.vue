<template>

  <div class="max-w-screen overflow-hidden">
    <div class="w-full h-12 bg-lime-500 opacity-40"></div>
    <div class="w-full mt-6">
      <p class="py-12 relative sm:text-3xl text-center transform lg:translate-x-12">Ben je zelf web developer en heb je
        hulp nodig?</p>
      <p class="py-12 relative sm:text-3xl text-center transform lg:-translate-x-64">Of heb je een firma met teveel
        werk?</p>
      <p class="py-12 relative sm:text-3xl text-center transform lg:translate-x-48">Misschien kunnen we mekaar wel
        verder helpen?!</p>
    </div>
    <div class="flex justify-center items-center mt-20 text-center">
      <router-link class="text-lime-500 text-opacity-40 border border-lime-500 px-2 py-1 z-10 underline mb-6"
                   to="/contact">
        Vind hier je weg naar het contactformulier
      </router-link>
    </div>
  </div>

</template>

<script>
export default {}
</script>