<template>
  <header class="text-center text-4xl font-telegraf my-6">About Me</header>
  <div class="grid md:grid-cols-[0.6fr_1fr] mx-auto max-w-screen-2xl">
    <div
      id="hero-image-about"
      class="flex items-center justify-center md:justify-start md:flex-col mb-8"
    >
      <HeroImage />
      <QuickLinks />
    </div>
    <div class="px-4 space-y-3">
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
        <div class="flex flex-wrap justify-center py-4">
          <article>Python</article>
          <article>C/C++</article>
          <article>Java</article>
          <article>Python</article>
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
import QuickLinks from "./QuickLinks.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
h2 {
  @apply font-raleway text-2xl py-2 text-center md:text-left text-stroke;
}
p {
  @apply font-varelaround text-lg text-notblack;
}
article {
  @apply inline py-1 px-4 mx-4 my-1 lg:my-2 shadow-sm hover:shadow-lg cursor-pointer bg-gradient-to-r to-[#FAAB78] via-50% via-[#FFDCA9] from-[#FAAB78] rounded-xl;
}
</style>
