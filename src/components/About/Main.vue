<template>
  <header id="heading" class="text-center text-4xl font-telegraf my-6">
    About Me
  </header>
  <div class="grid md:grid-cols-[0.6fr_1fr] mx-auto max-w-screen-2xl">
    <div
      id="hero-image-about"
      class="flex items-center justify-center md:justify-start md:flex-col mb-8"
    >
      <HeroImage />
      <QuickButtons />
      <QuickLink />
    </div>
    <div class="px-4 space-y-3" id="about-me">
      <section id="who-am-i">
        <h2>Who Am I ?</h2>
        <p>
          &emsp;I'm Karthikeyan J from Korattur, Chennai, Tamil Nadu, India. A
          Graduated Engineer who is passionate about Software Development and
          Project Management. I am constantly seeking knowledge for career
          improvement and keeping track of current trends in technology. My
          drive to stay updated with the latest advancements ensures that I can
          deliver innovative and efficient solutions in my projects.
        </p>
      </section>
      <section id="what-i-do">
        <h2>What I Do ?</h2>
        <p>
          &emsp;I am a Full Stack Developer with a passion for building scalable
          and maintainable web applications. I have worked on a wide range of
          projects from web applications to mobile applications. I am proficient
          in the following technologies:
        </p>
        <Skills />
      </section>
      <section id="education">
        <h2>Education</h2>
        <Education />
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <div class="flex gap-2 flex-col md:flex-row">
          <p>Internship:</p>
          <p>Lucas TVS Limited, Padi</p>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import HeroImage from "./HeroImage.vue";
import Education from "./Education.vue";
import QuickButtons from "./QuickButtons.vue";
import Footer from "./Footer.vue";
import QuickLink from "./components/QuickLink.vue";
import Skills from "./components/Skills.vue";
import gsap from "gsap";
import { onMounted } from "vue";
onMounted(() => {
  gsap.fromTo(
    "#about-me h2",
    { x: 50, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.8 }
  );
  gsap.fromTo(
    "#about-me p",
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  );
});
</script>

<style scoped>
h2 {
  @apply font-raleway text-2xl py-2 text-center md:text-left text-stroke;
}
p {
  @apply font-varelaround text-lg text-notblack;
}
</style>
