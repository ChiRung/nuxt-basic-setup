<template>
  <div>
    <h1>Router Index Page</h1>
    <MockLinkBtn />
  </div>
</template>

<script setup lang="ts">
import { useMockState } from "~/composables/useGlobalMock";

definePageMeta({
  middleware: ["home-route-mw"],
  layout: "default",
});

const {
  customServerSideKey,
  public: { customClientSideKey },
} = useRuntimeConfig();
const { darkMode } = useAppConfig();
const mockState = useMockState();
</script>

<style scoped lang="scss"></style>
