<template>
  <div class="p-2 bg-primary border rounded-r-2xl" @click="handleClick">
    <img :src="src" :alt="alt" width="24" height="24" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
});

const emits = defineEmits(["click"]);

function handleClick() {
  emits("click");
  props.onClick();
}
</script>
