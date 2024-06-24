<script setup lang="ts">
import QuickButton from "./components/QuickButton.vue";
import gsap from "gsap";
import { onMounted } from "vue";

// Use onMounted to ensure QuickButtons array is populated after component mount
onMounted(() => {
  const QuickButtons = gsap.utils.toArray("#quick-buttons > div");

  gsap.fromTo(
    QuickButtons,
    { x: -100 },
    { x: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
  );
});

// Function to handle button click and smooth scroll
function handleButtonClick(hash: string) {
  const targetElement = document.querySelector(hash) as HTMLElement | null;
  if (targetElement) {
    window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
  }
}
</script>

<template>
  <div class="md:hidden flex flex-col" id="quick-buttons">
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
</template>
