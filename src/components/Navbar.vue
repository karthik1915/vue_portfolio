<template>
  <nav
    :class="[
      'flex row-span-1 justify-between relative px-8 py-3 items-center flex-grow-0 border-b border-notblack',
      props.isHomeRoute ? 'lg:col-span-2' : '',
    ]"
  >
    <div class="logo"><Logo /></div>
    <div class="space-x-3 hidden md:block">
      <RouterLink
        class="font-varelaround lg:text-xl hover:underline decoration-2 hover:underline-offset-4 decoration-primary"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="font-varelaround lg:text-xl hover:underline decoration-2 hover:underline-offset-4 decoration-primary"
        to="/about"
        >About</RouterLink
      >
      <RouterLink
        class="font-varelaround lg:text-xl hover:underline decoration-2 hover:underline-offset-4 decoration-primary"
        to="/projects"
        >Projects</RouterLink
      >
    </div>
    <div class="hidden md:block">
      <button
        class="px-6 py-2 ring-1 ring-primary hover:bg-primary hover:text-notblack rounded-xl font-varelaround text-md"
        href="#"
      >
        Contact
      </button>
    </div>
    <div class="md:hidden block">
      <img @click="handleMenu" src="/assets/menu.svg" alt="menu icon" />
    </div>
    <!-- Fullscreen overlay for mobile menu -->
    <div
      id="phone-menu-overlay"
      class="hidden fixed opacity-0 top-0 left-0 z-50 h-screen w-screen bg-background transition-opacity duration-300"
    >
      <!-- Cancel button -->
      <button
        title="menu"
        type="button"
        class="absolute top-10 right-8"
        @click="handleMenu"
      >
        <img src="/assets/cancel.svg" alt="cancel" />
      </button>
      <!-- Phone menu -->
      <div
        id="phone-menu"
        class="h-1/2 w-full absolute flex items-center flex-col justify-evenly top-1/2 -translate-y-1/2 px-3"
      >
        <a href="/" class="text-2xl capitalize font-telegraf">Home</a>
        <a href="/about" class="text-2xl capitalize font-telegraf">About</a>
        <a href="/projects" class="text-2xl capitalize font-telegraf"
          >Projects</a
        >
        <a class="text-2xl capitalize font-telegraf">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import Logo from "./Logo.vue";
import { RouterLink } from "vue-router";
import gsap from "gsap";

const props = defineProps<{
  isHomeRoute: boolean;
}>();

// Reactive variable to track menu open state
const isMenuOpen = ref(false);

// Function to handle menu animation
const animateMenu = () => {
  // Get the links in the phone menu
  const PhoneLinks = gsap.utils.toArray("#phone-menu > a");

  // Create a GSAP timeline for the animation
  const tl = gsap.timeline();

  if (!isMenuOpen.value) {
    gsap.set("#phone-menu-overlay", { display: "block" });
    tl.fromTo(
      "#phone-menu-overlay",
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "none" }
    ).fromTo(
      PhoneLinks,
      {
        opacity: 0,
        x: (index) => {
          if (index === 1) return -100; // Move left for the second link
          if (index === 2) return 100; // Move right for the third link
          return 0;
        },
        y: (index) => {
          if (index === 0) return -100; // Move up for the first link
          if (index === 3) return 100; // Move down for the fourth link
          return 0;
        },
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  } else {
    // If menu is open, play animation to close
    tl.to(
      PhoneLinks,
      {
        opacity: 0,
        x: (index) => {
          if (index === 1) return -100; // Move left for the second link
          if (index === 2) return 100; // Move right for the third link
          return 0;
        },
        y: (index) => {
          if (index === 0) return -100; // Move up for the first link
          if (index === 3) return 100; // Move down for the fourth link
          return 0;
        },
        duration: 0.2,
        stagger: -0.1, // Reverse stagger
        ease: "power3.in",
      },
      0 // Start immediately
    )
      .to("#phone-menu-overlay", { opacity: 0, duration: 0.3, ease: "none" })
      .set("#phone-menu-overlay", { display: "none" });
  }

  // Toggle menu state
  isMenuOpen.value = !isMenuOpen.value;
};

// Expose function to the template
const handleMenu = () => {
  animateMenu();
};
</script>
