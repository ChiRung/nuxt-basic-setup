<template>
  <div>
    <h1>{{ error?.message }}</h1>
    There was an error 😱
    <button @click="handleError">Go To Home</button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<style scoped lang="scss"></style>
