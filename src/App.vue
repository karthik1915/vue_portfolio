<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "./components/Navbar.vue";

// Get the current route
const route = useRoute();

// Define a computed property to check if the current route is '/'
const isHomeRoute = computed(() => route.path === "/");
</script>

<template>
  <main
    :class="[
      'grid',
      isHomeRoute
        ? 'grid-rows-[80px_1fr] lg:grid-cols-2 min-h-screen'
        : 'grid-rows-[80px_1fr]',
    ]"
  >
    <Navbar :is-home-route="isHomeRoute" />
    <router-view />
  </main>
</template>
