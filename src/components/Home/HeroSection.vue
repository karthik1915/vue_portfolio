<template>
  <section class="w-full lg:row-span-2">
    <div class="flex justify-center lg:justify-end h-full">
      <div class="p-5 md:p-6 lg:p-8 max-w-[768px]">
        <div class="flex items-end gap-4 py-4 justify-center sm:justify-start">
          <p class="text-4xl font-telegraf">Hello, I'm</p>
          <span
            class="text-2xl rounded-full font-raleway px-5 py-1 bg-gradient-to-r to-[#FCF9BE] via-50% via-[#FFDCA9] from-[#FAAB78]"
            >Developer</span
          >
        </div>
        <p
          class="text-5xl font-telegraf tracking-wider font-bold text-center sm:text-left"
        >
          Karthikeyan J
        </p>
        <p
          class="font-varelaround py-5 text-center sm:w-3/4 sm:text-left mx-auto sm:mx-0"
        >
          Developing Robust Webapplication out of React, Next, Django out of 2
          Years of Experience
        </p>
        <HeroButtons />
        <HeroDetails />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroButtons from "./HeroButtons.vue";
import HeroDetails from "./HeroDetails.vue";
</script>

<style scoped></style>
