<template>
  <p class="text-center text-2xl font-telegraf my-6">About Me</p>
  <div class="grid md:grid-cols-2 mt-4">
    <div class="flex justify-center h-[400px]">
      <HeroImage />
    </div>
    <div class="px-4">ABoutme</div>
  </div>
</template>

<script setup lang="ts">
import HeroImage from "./HeroImage.vue";
</script>
