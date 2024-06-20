<template>
  <nav
    :class="[
      'flex row-span-1 justify-between px-8 py-3 items-center flex-grow-0 border-b border-notblack',
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
    <div>
      <button
        class="px-6 py-2 ring-1 ring-primary hover:bg-primary hover:text-notblack rounded-xl font-varelaround text-md"
        href="#"
      >
        Contact
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  isHomeRoute: boolean;
}>();
</script>
