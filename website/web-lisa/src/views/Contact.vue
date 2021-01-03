<template>

  <div class="text-center mx-auto">

    <div class="flex w-full">
      <div class="flex-1 flex justify-start items-center">
        <div class="triangle-left opacity-40"></div>
      </div>
      <div class="flex-1 flex flex-col justify-center items-end -space-y-12">
        <div class="triangle-right opacity-40"></div>
        <div class="triangle-right opacity-40"></div>
      </div>
    </div>
    <h2 class="font-semibold uppercase text-2xl">Hoe kan je me bereiken?</h2>
    <div class="flex w-full">
      <div class="flex-1 flex flex-col justify-center items-start -space-y-12">
        <div class="triangle-left opacity-40"></div>
        <div class="triangle-left opacity-40"></div>
      </div>
      <div class="flex-1 flex justify-end items-center">
        <div class="triangle-right opacity-40"></div>
      </div>
    </div>

    <div class="m-6">
      <div class="flex justify-between items-center">
        <div class="hidden sm:block triangle-top opacity-40"></div>
        <div class="space-y-6 mx-auto">
          <div class="">
            <img class="w-32 bg-white rounded-2xl p-1 mx-auto mb-2" src="../assets/phone_receiver.svg" alt="">
            <a href="tel:+32472767328">+32472767328</a>
          </div>
          <div>
            <img class="w-32 bg-white rounded-2xl p-1 mx-auto mb-2" src="../assets/mail.svg" alt="">
            <a href="mailto:lisa.collignon@hotmail.be">lisa.collignon@hotmail.be</a>
          </div>
        </div>
        <div class="hidden sm:block triangle-bottom opacity-40"></div>
      </div>
      <div class="triangle-right-big opacity-40 mx-auto mt-4"></div>
    </div>


    <div class="flex justify-around items-center">
      <div class="hidden lg:block triangle-bottom opacity-40 transform -rotate-45"></div>
      <div class="w-full sm:max-w-xl mx-auto text-center rounded-2xl bg-orange-500 bg-opacity-40 p-6 w-1/2 my-20">
        <form class="flex flex-col" @submit.prevent="sendEmail">
          <label>Naam</label>
          <input
              class="w-full p-4 rounded my-2 text-black font-semibold mb-12"
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
          >
          <label>Email</label>
          <input
              class="w-full p-4 rounded my-2 text-black font-semibold mb-12"
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
          >
          <label>Bericht</label>
          <textarea
              class="w-full p-4 rounded my-2 text-black font-semibold mb-12"
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Message">
            </textarea>

          <div class="" v-show="emailSent">Je bericht is verzonden, ik neem zo snel mogelijk contact met je op!</div>

          <input class="bg-orange-500 bg-opacity-60 px-2 py-1 rounded-xl hover:bg-opacity-90 hover:text-black"
                 type="submit" value="Verstuur">
        </form>
      </div>
      <div class="hidden lg:block triangle-bottom opacity-40 transform rotate-45"></div>
    </div>


  </div>




</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      emailSent: false
    }
  },
  methods: {
    sendEmail: function (e){
      emailjs.sendForm("service_tWEB_lisa", "template_20e3qoq", e.target, "user_J7mkjvrN7EWrkTrsz05XK");
      //  Reset form field
      this.emailSent = true;
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
  .triangle-left {
    width: 0;
    height: 0;
    border-top: 3rem solid transparent;
    border-left: 50vw solid #FF7A00;
    border-bottom: 3rem solid transparent;
  }
  .triangle-right {
    width: 0;
    height: 0;
    border-top: 3rem solid transparent;
    border-right: 50vw solid #FF7A00;
    border-bottom: 3rem solid transparent;
  }
  .triangle-top {
    width: 0;
    height: 0;
    border-left: 6vw solid transparent;
    border-bottom: 35rem solid #FF7A00;
    border-right: 6vw solid transparent;
  }
  .triangle-bottom {
    width: 0;
    height: 0;
    border-left: 6vw solid transparent;
    border-top: 35rem solid #FF7A00;
    border-right: 6vw solid transparent;
  }
  .triangle-right-big {
    width: 0;
    height: 0;
    border-top: 3rem solid transparent;
    border-right: 80vw solid #FF7A00;
    border-bottom: 3rem solid transparent;
  }
</style>