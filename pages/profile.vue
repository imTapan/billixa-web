<template>
  <pre>
    {{ userDetail }}
  </pre>
</template>
<script setup>
import { useUserStore } from "@/store/user";

const store = useUserStore();

const userDetail = computed(() => store.getUser);
</script>
