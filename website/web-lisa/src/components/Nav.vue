<template>

  <nav class="">


    <div class="flex flex-row justify-between px-8 py-5 items-center relative">
      <div class="pl-2 font-semibold text-xl flex flex-row items-center space-x-6">
        <p>Lisa Collignon</p>
        <img class="h-4" src="../assets/tWEB.png" alt="">
      </div>

      <button @click="isActive = !isActive" v-click-away="onClickAway" class="lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-purplepink-400 focus:ring-opacity-40">
        <svg v-show="!isActive" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-show="isActive" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="absolute lg:hidden top-16 right-8 z-10">

        <div v-show="isActive" class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3 items-end lg:items-center bg-gray-950 p-4 lg:p-0 rounded-xl lg:bg-black">
          <div class="inline-block relative">
            <router-link
                exact-active-class="bg-purplepink-400 bg-opacity-40 text-pink-300 text-opacity-50"
                class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
                :class="getCurrentHoverColor"
                to="/">Home
            </router-link>
          </div>
          <div class="inline-block relative">
            <router-link
                exact-active-class="bg-teal-500 bg-opacity-40 text-teal-500 text-opacity-50"
                class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
                :class="getCurrentHoverColor"
                to="/about">About
            </router-link>
          </div>
          <div class="inline-block relative">
            <router-link
                exact-active-class="bg-white bg-opacity-40 text-white text-opacity-50"
                class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
                :class="getCurrentHoverColor"
                to="/portfolio">Portfolio
            </router-link>
          </div>
          <div class="inline-block relative">
            <router-link
                exact-active-class="bg-orange-500 bg-opacity-40 text-orange-500 text-opacity-50"
                class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
                :class="getCurrentHoverColor"
                to="/contact">Contact
            </router-link>
          </div>
          <div class="inline-block relative">
            <router-link
                exact-active-class="bg-lime-500 bg-opacity-40 text-lime-500 text-opacity-50"
                class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
                :class="getCurrentHoverColor"
                to="/samenwerking">Samenwerking
            </router-link>
          </div>

          <div class="inline-block relative">
            <a href="https://github.com/LisaCollignon" target="_blank" class="">
              <img class="w-7 p-1 rounded hover:bg-opacity-20"
                   :class="getCurrentHoverColor"
                   src="../assets/GitHub-Mark-Light-32px.png"/>
            </a>
          </div>

          <div class="inline-block relative">
            <a href="http://localhost:8000/dashboard" class="">
              <p class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50 bg-white text-gray-950 font-semibold text-sm"
                   :class="getCurrentHoverColor">
                Costumer Area
              </p>
            </a>
          </div>

        </div>
      </div>


      <div class="hidden lg:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 items-end md:items-center bg-gray-950 p-4 md:p-0 rounded-xl md:bg-black">
        <div class="inline-block relative">
          <router-link
              exact-active-class="bg-purplepink-400 bg-opacity-40 text-pink-300 text-opacity-50"
              class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
              :class="getCurrentHoverColor"
              to="/">Home
          </router-link>
        </div>
        <div class="inline-block relative">
          <router-link
              exact-active-class="bg-teal-500 bg-opacity-40 text-teal-500 text-opacity-50"
              class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
              :class="getCurrentHoverColor"
              to="/about">About
          </router-link>
        </div>
        <div class="inline-block relative">
          <router-link
              exact-active-class="bg-white bg-opacity-40 text-white text-opacity-50"
              class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
              :class="getCurrentHoverColor"
              to="/portfolio">Portfolio
          </router-link>
        </div>
        <div class="inline-block relative">
          <router-link
              exact-active-class="bg-orange-500 bg-opacity-40 text-orange-500 text-opacity-50"
              class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
              :class="getCurrentHoverColor"
              to="/contact">Contact
          </router-link>
        </div>
        <div class="inline-block relative">
          <router-link
              exact-active-class="bg-lime-500 bg-opacity-40 text-lime-500 text-opacity-50"
              class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50"
              :class="getCurrentHoverColor"
              to="/samenwerking">Samenwerking
          </router-link>
        </div>

        <div class="inline-block relative">
          <a href="https://github.com/LisaCollignon" target="_blank" class="">
            <img class="w-7 p-1 rounded hover:bg-opacity-20"
                   :class="getCurrentHoverColor"
                   src="../assets/GitHub-Mark-Light-32px.png"/>
          </a>
        </div>

        <div class="inline-block relative">
          <a href="http://localhost:8000/dashboard" class="">
            <p class="p-1 rounded-md hover:bg-opacity-20 hover:text-opacity-50 bg-white font-semibold text-sm text-gray-950"
               :class="getCurrentHoverColor">
              Customer Area
            </p>

          </a>
        </div>

      </div>


    </div>
  </nav>




</template>

<script>
import { mixin as VueClickAway } from "vue3-click-away";
export default {
  name: 'Nav',
  props: {},
  mixins: [VueClickAway],
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    onClickAway() {
      this.isActive = false;
      return this.isActive;
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    getCurrentHoverColor() {
      switch(this.currentRouteName) {
        case "Home":
          return "hover:text-pink-200 hover:bg-purplepink-400";
        case "About":
          return "hover:text-teal-500 hover:bg-teal-500";
        case "Portfolio":
          return "hover:text-white hover:bg-white";
        case "Contact":
          return "hover:text-orange-500 hover:bg-orange-500";
        case "Samenwerking":
          return "hover:text-lime-500 hover:bg-lime-500";
      }
    }
  },
}
</script>
