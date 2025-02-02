<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useUserStore } from "@/store/user";

const store = useUserStore();

const target = ref(null);
const dropdownOpen = ref(false);

onClickOutside(target, () => {
  dropdownOpen.value = false;
});
</script>

<template>
  <div class="relative" ref="target">
    <button class="flex items-center" @click="dropdownOpen = !dropdownOpen">
      <UIcon name="mdi:account-circle-outline" class="h-8 w-8 rounded-full">
      </UIcon>

      <UIcon
        name="mdi:menu-down"
        :class="dropdownOpen && 'rotate-180'"
        class="h-8 w-8"
      />
    </button>

    <div
      v-show="dropdownOpen"
      class="absolute right-0 mt-4 flex w-62.5 flex-col rounded-md border border-gray-500 bg-gray-900 shadow-default dark:border-strokedark dark:bg-boxdark p-4"
    >
      <button class="user-dropdow" @click="store.logoutUser(2)">
        <UIcon name="mdi:logout" />
        Logout
      </button>
    </div>
  </div>
</template>

<style>
.user-dropdow {
  @apply hover:bg-gray-700 rounded-md p-2 px-4 flex items-center justify-center gap-2 border border-gray-400 text-lg;
}

.user-dropdow .iconify {
  @apply h-6 w-6;
}
</style>
