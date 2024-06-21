<script setup lang="ts">
import { RouterLink } from "vue-router";
import gsap from "gsap";
import { onMounted } from "vue";
type ButtonStyles = {
  default: string;
  outline: string;
};

const buttonStyles: ButtonStyles = {
  outline:
    "font-telegraf decoration-primary px-8 py-3 text-xl hover:underline hover:underline-offset-4 transition-colors duration-300",
  default:
    "font-telegraf px-8 py-3 border-notblack border text-xl bg-primary hover:bg-background transition-colors duration-300",
};

onMounted(() => {
  gsap.fromTo(
    "#hero-button",
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
      delay: 0.3,
      ease: "bounce.out",
    }
  );
  // gsap.fromTo("", {}, {});
});
</script>

<template>
  <div class="flex gap-5 py-4 justify-center sm:justify-start">
    <RouterLink id="hero-button" to="/about" :class="buttonStyles.default"
      >Hire Me</RouterLink
    >
    <RouterLink id="hero-button" to="/projects" :class="buttonStyles.outline">
      Projects
      <img
        class="inline size-5"
        title="External Link"
        alt="external_link svg"
        src="../../assets/external_link.svg"
      />
    </RouterLink>
  </div>
</template>
