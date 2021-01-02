<template>

  <!--  bovenste blok in overzicht  -->
  <div class="flex flex-row max-w-7xl mx-auto">

    <div class="relative flex-1 rounded-r-3xl h-96 transform translate-y-8 overflow-hidden">
      <div class="z-20 w-full h-full absolute right-0 bg-purplepink-600 bg-opacity-50 md:max-w-3xl xl:rounded-3xl"></div>
      <div class="absolute z-10 top-40 left-20 text-center text-2xl hidden xl:block">
        <img src="../assets/tWEB.png" alt="">
        <p>by <br> Lisa</p>
      </div>
      <img class="bg-white p-1 absolute z-10 top-10 right-10 h-40 sm:h-48 md:h-56 lg:top-6 lg:right-6 lg:h-64 rounded-lg" src="../assets/monitor.svg" alt="pc" />
    </div>

    <div class="flex-1">
      <div class="m-12 text-center">
        <h1 class="sm:text-2xl md:text-3xl">Web development op maat?!</h1>
        <h1 class="sm:text-2xl md:text-3xl">Vraag het hier!</h1>

        <div class="my-10">
          <img class="arrow w-4 sm:w-6 md:w-8 mx-auto" src="../assets/Vector 1.png" alt="vector arrow down"/>
          <img class="arrow w-4 sm:w-6 md:w-8 mx-auto" src="../assets/Vector 1.png" alt="vector arrow down"/>
        </div>

        <button class="bg-purplepink-500 bg-opacity-70 py-1 px-2 rounded-lg text-pink-200 text-opacity-40 text-xs sm:text-sm md:text-base">Let's talk!</button>
      </div>
    </div>

  </div>

  <div class="w-3/4 lg:w-3/5 bg-purplepink-400 bg-opacity-40 h-28 absolute right-0 rounded-l-3xl transform -translate-y-12"></div>
  <div class="hidden 2xl:block w-32 bg-purplepink-400 bg-opacity-40 h-96 absolute left-0 rounded-r-3xl transform -translate-y-28"></div>

  <!--  middelste blok in overzicht  -->
  <div>
    <div class="mt-36 pb-20 mb-20 flex flex-col sm:flex-row max-w-7xl mx-auto">

      <div class="flex-1">
        <div class="m-12 relative">
          <div class="absolute w-full h-full bg-purplepink-500 bg-opacity-50 rounded-2xl"></div>
          <div class="p-10">
            <div class="text-justify">
              -- Heb je nog geen website? Maar je zou wel graag een website hebben?
              Deel jouw visie met mij en we maken er samen realiteit van! --
            </div>
            <div class="flex justify-end">
              <button
                  class="z-10 bg-purplepink-500 bg-opacity-70 py-1 px-2 my-6 rounded-lg text-pink-200 text-opacity-40 text-xs sm:text-sm md:text-base">
                Let's talk!
              </button>
            </div>
            <div class="flex justify-start mt-2">
              <img class="h-36 bg-white p-1 rounded-lg" src="../assets/web_design.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 transform -translate-y-16 ml-6 sm:ml-0">
        <div class="mt-20 mr-32">
          <div class="flex justify-end">
            <img class="w-24 bg-white p-1 rounded-lg" src="../assets/key_1.svg" alt=""/>
          </div>
          <div class="text-justify my-8">
            -- Beschik je al over een website? Maar is deze niet meer up-to-date met je diensten?
            Of wil je moderniseren of je design vernieuwen? --
          </div>
          <button
              class="z-30 bg-purplepink-500 bg-opacity-70 py-1 px-2 rounded-lg text-pink-200 text-opacity-40 text-xs sm:text-sm md:text-base">
            Let's talk!
          </button>
        </div>
      </div>
    </div>
    <div class="z-10 absolute w-1/2 rounded-l-2xl h-16 bg-purplepink-600 right-0 bg-opacity-50 hidden md:block transform -translate-y-60"></div>
    <div class="absolute right-0 bg-purplepink-400 bg-opacity-40 w-20 h-96 rounded-tl-2xl transform -translate-y-96">
      <div class="absolute right-0 bg-purplepink-400 w-20 h-36 bottom-0 transform translate-y-36 rounded-bl-2xl bg-opacity-40"></div>
    </div>
  </div>



  <!--  onderste blok in overzicht  -->
  <div class="relative transform -translate-y-28">
    <div class="flex flex-row mx-auto max-w-7xl">
      <div class="w-2/3 flex flex-row relative mr-6">
        <img class="ml-12 mb-12 bg-white p-1 rounded-lg w-16 self-end hidden md:block" src="../assets/website.svg"/>
        <div class="m-10 flex flex-col text-justify">
          -- Ben je niet alleen op zoek naar een website, maar naar een web applicatie op maat gemaakt?
          Ook hiervoor ben je bij mij op de juiste plaats! Samen kunnen we net datgene maken dat jij nodig hebt! --
          <button
              class="z-10 mt-6 self-end bg-purplepink-500 bg-opacity-70 py-1 px-2 rounded-lg text-pink-200 text-opacity-40 text-xs sm:text-sm md:text-base">
            Let's talk!
          </button>
        </div>
      </div>
      <div class="flex justify-end items-start">
        <img class="bg-white p-1 rounded-xl w-24 transform sm:transform-none -translate-x-12 -translate-y-32 xl:transform xl:translate-x-44" src="../assets/code.svg"/>
      </div>
    </div>
    <div class="absolute h-full top-0 w-2/3 h-44 bg-purplepink-600 bg-opacity-50 rounded-r-2xl"></div>
  </div>



</template>
<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    gsap.timeline().fromTo(".arrow", {y: -25, opacity: 0}, {y: 5, opacity:1, duration: 1.5, stagger: 0.15, repeat: -1, ease: "sine", yoyo: false, repeatDelay: 0.5});
  }
}

</script>