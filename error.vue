<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="flex items-center justify-center h-screen bg-gray-800 flex-col py-10"
  >
    <div>
      <NuxtLink class="flex items-center justify-center flex-col" to="/">
        <img src="/public/logo.png" alt="Logo" class="h-20" />
        <h2 class="text-gray-100 font-semibold text-xl">Billixa Web</h2>
      </NuxtLink>
    </div>
    <div class="h-full my-auto flex items-center justify-center">
      <div class="bg-gray-900 shadow-md rounded-lg p-8 max-w-sm w-full mt-10">
        <h2 class="text-4xl font-bold text-center text-red-500">
          {{ error?.statusCode }}
        </h2>
        <p class="mt-4 text-center text-gray-300">
          Oops! Something went wrong. Please try again later.
        </p>
        <div class="mt-6">
          <button
            @click="handleError"
            class="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-2 px-4 rounded transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
