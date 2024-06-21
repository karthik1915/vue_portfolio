<template>
  <div id="hero-footer" class="row-span-1 p-10 bg-notblack">
    <section
      id="hero-footer-content"
      class="max-w-[768px] mx-auto grid grid-rows-[0.5fr_1fr] text-background items-center"
    >
      <div>
        <RouterLink
          to="/projects"
          class="text-wrap text-2xl font-telegraf py-2 hover:underline hover:underline-offset-4 hover:decoration-primary"
        >
          Projects Statistics 2024
        </RouterLink>
      </div>
      <div class="space-y-5">
        <div class="relative flex justify-between items-center">
          <p class="font-varelaround text-xl">Web Development</p>
          <p class="font-goodtimes">18</p>
          <span
            class="absolute w-full h-px rounded-full bg-background -bottom-1 left-0"
          />
        </div>
        <div class="relative flex justify-between items-center">
          <p class="font-varelaround text-xl">Mobile App Development</p>
          <p class="font-goodtimes">4</p>
          <span
            class="absolute w-full h-px rounded-full bg-background -bottom-1 left-0"
          />
        </div>
        <div class="relative flex justify-between items-center">
          <p class="font-varelaround text-xl">GitHub Commits</p>
          <p class="font-goodtimes">125</p>
          <span
            class="absolute w-full h-px rounded-full bg-background -bottom-1 left-0"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.fromTo(
    "#hero-footer",
    {
      opacity: 0,
      x: -200,
    },
    {
      x: 0,
      delay: 0.3,
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power3.out",
    }
  );
});
</script>
