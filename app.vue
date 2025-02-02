<template>
  <div class="vue-app">
    <NuxtLayout />
    <UNotifications />
  </div>
</template>
<script setup>
import { version } from "@/package.json";
const env = useRuntimeConfig();

useHead({
  title: "Billixa Web",
});

onMounted(() => {
  console.log("🚀", env?.public?.name, version);
});
</script>

<style>
body {
  font-family: "Barlow", sans-serif;
}
</style>
