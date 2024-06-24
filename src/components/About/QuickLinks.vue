<script setup lang="ts">
import QuickButton from "./components/QuickButton.vue";

function handleButtonClick(hash: string) {
  const targetElement = document.querySelector(hash) as HTMLElement | null;
  if (targetElement) {
    window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
  }
}
</script>

<template>
  <div class="md:hidden flex flex-col">
    <QuickButton
      src="/assets/who.svg"
      alt="person_who"
      @click="handleButtonClick('#who-am-i')"
    />
    <QuickButton
      src="/assets/what.svg"
      alt="person_what"
      @click="handleButtonClick('#what-i-do')"
    />
    <QuickButton
      src="/assets/education.svg"
      alt="education"
      @click="handleButtonClick('#education')"
    />
  </div>
  <div class="md:flex flex-col w-[320px] px-3 mt-3 hidden">
    <a href="#who-am-i" class="text-xl font-telegraf flex gap-2 items-start"
      ><img src="/assets/who.svg" />who am i</a
    >
    <a href="#what-i-do" class="text-xl font-telegraf flex gap-2 items-start"
      ><img src="/assets/what.svg" />what i do</a
    >
    <a href="#education" class="text-xl font-telegraf flex gap-2 items-start"
      ><img src="/assets/education.svg" />education</a
    >
  </div>
</template>
