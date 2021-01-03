<template>

  <div class="bg-teal-500 bg-opacity-40 text-center max-w-7xl mx-auto">
    <h2 class="py-8 text-2xl font-semibold uppercase">Wat heb ik je te bieden...</h2>
    <div class="flex flex-row mx-16 py-8 justify-center items-center space-x-8 sm:space-x-20">
      <div class="bg-black rounded-2xl px-6">
        <h2 class="text-2xl font-semibold py-6 uppercase">Responsive design</h2>
        <p class="pb-6 px-6">Elke website is bedoeld om weer te geven op zowel een klein en een groot scherm.</p>
      </div>
      <div class="hidden sm:block w-72 sm:w-48">
        <img src="../assets/responsive.svg" alt="">
      </div>
    </div>
  </div>

  <div class="flex flex-col sm:flex-row p-24 space-y-8 sm:space-x-8 text-center items-center justify-center max-w-7xl mx-auto">
    <div class="bg-teal-500 bg-opacity-40 rounded-2xl">
      <div class="p-2 rounded-2xl w-60">
        <img class="w-full" src="../assets/project_management.svg" alt="">
      </div>
    </div>
    <div class="bg-teal-500 bg-opacity-40 rounded-2xl">
      <div class="bg-black m-4 rounded-2xl p-6">
        <h2 class="text-2xl font-semibold pb-4 uppercase">Flexibel ontwerp</h2>
        <p>Als je zelf al een idee hebt over hoe aller er uit moet zien... Dan mag jij alles in de juiste richting leiden. Ik zorg enkel voor de realisatie van jouw project.</p>
        <br>
        <p>En is dat niet het geval? Geen probleem, ik help je mee met het zoeken naar jouw stijl!</p>
      </div>
    </div>
  </div>
  
  <div class="bg-teal-500 bg-opacity-40 flex flex-col sm:flex-row justify-center items-center px-12 sm:space-x-8 sm:space-x-20 text-center max-w-7xl mx-auto">
    <div class="bg-black my-12 rounded-2xl px-6 pb-8">
      <h2 class="py-8 text-xl font-semibold uppercase">Back-end development</h2>
      <p>Heb je iets meer nodig dan een website?
      Zoek je een webapplicatie die een deel van je werk kan verlichten?
      Of een applicatie die net dat beetje extra kan?</p>
      <br>
      <p>Ook hiervoor kan gezorgd worden. Ik help je met het ontwikkelen van net datgene dat jij nodig hebt!</p>
    </div>
    <div>
      <img class="w-40 sm:w-96 pb-12 sm:pb-0" src="../assets/analysis.svg" alt="">
    </div>
  </div>

  <div class="flex flex-row p-24 sm:space-x-8 text-center items-center justify-center max-w-7xl mx-auto">
    <div class="bg-teal-500 bg-opacity-40 rounded-2xl hidden sm:block">
      <div class="p-2 rounded-2xl sm:w-60">
        <img class="w-full" src="../assets/idea.svg" alt="">
      </div>
    </div>
    <div class="bg-teal-500 bg-opacity-40 rounded-2xl">
      <div class="bg-black m-4 rounded-2xl p-6">
        <h2 class="text-2xl font-semibold pb-4 uppercase">Ideeën-bus</h2>
        <p>Kortom, ik ben er klaar voor. Ik hoop jij ook!
        Laat je ideeën maar komen.</p>
        <button
              class="z-10 mt-6 self-end bg-teal-500 bg-opacity-40 py-1 px-2 rounded-lg text-teal-500 text-opacity-50 text-xs sm:text-sm md:text-base">
            Let's talk!
          </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {}
</script>