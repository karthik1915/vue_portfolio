<template>
  <RouterLink class="logo" to="/">
    <img src="../assets/logo.svg" :alt="altText" />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
const altText: string = "Logo";
</script>

<style scoped>
.logo {
  width: 100%;
  height: auto;
}
.logo img {
  width: 100%;
  height: auto;
}
</style>
