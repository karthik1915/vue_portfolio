<template>
  <div id="skills" class="flex flex-wrap justify-center py-4">
    <article>python</article>
    <article>C/C++</article>
    <article>Java</article>
    <article>React</article>
    <article>Next Js</article>
    <article>Django</article>
    <article>Docker</article>
    <article>Vue</article>
    <article>Tailwindcss</article>
    <article>MongoDB</article>
    <article>Git</article>
    <article>Flutter</article>
  </div>
</template>

<style scoped>
article {
  @apply inline py-1 relative px-4 mx-4 my-1 lg:my-2 shadow-sm hover:shadow-lg cursor-pointer bg-gradient-to-r to-[#FAAB78] via-50% via-[#FFDCA9] from-[#FAAB78] rounded-xl;
}
</style>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
onMounted(() => {
  const Skills = gsap.utils.toArray("article");
  gsap.fromTo(
    Skills,
    { rotateX: 180, opacity: 0 },
    { rotateX: 0, duration: 0.8, opacity: 1, stagger: 0.2, ease: "bounce.out" }
  );
});
</script>
