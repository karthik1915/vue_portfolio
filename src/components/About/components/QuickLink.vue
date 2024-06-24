<template>
  <div class="md:flex flex-col w-[320px] px-3 hidden">
    <a
      id="quick-link"
      href="#who-am-i"
      class="w-full text-xl py-1 bg-primary border rounded-b-2xl font-telegraf flex justify-center gap-2 items-start"
      ><img src="/assets/who.svg" />who am i</a
    >
    <a
      id="quick-link"
      href="#what-i-do"
      class="text-xl bg-primary py-1 w-[260px] mx-auto rounded-b-2xl justify-center font-telegraf flex gap-2 items-start"
      ><img src="/assets/what.svg" />what i do</a
    >
    <a
      id="quick-link"
      href="#education"
      class="text-xl w-[223px] mx-auto py-1 border rounded-b-2xl justify-center bg-primary font-telegraf flex gap-2 items-start"
      ><img src="/assets/education.svg" />education</a
    >
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  const QuickLinks = gsap.utils.toArray("#quick-link");
  gsap.fromTo(
    QuickLinks,
    {
      y: -100,
    },
    {
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    }
  );
});
</script>
