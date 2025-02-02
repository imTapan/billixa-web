<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useUserStore } from "@/store/user";

const store = useUserStore();

const target = ref(null);
const dropdownOpen = ref(false);

const userDetail = computed(() => store.getUser);

onClickOutside(target, () => {
  dropdownOpen.value = false;
});
</script>

<template>
  <div class="relative" ref="target">
    <button class="flex items-center gap-1" @click="dropdownOpen = !dropdownOpen">
      <div class="flex items-center justify-center md:gap-2">
        <img
          v-if="userDetail?.avatar"
          :src="userDetail.avatar"
          class="h-8 w-8 rounded-full"
        />
        <UIcon
          v-else
          name="mdi:account-circle-outline"
          class="h-8 w-8 rounded-full"
        >
        </UIcon>
        <p class="text-lg hidden md:flex" v-if="userDetail?.name">{{ userDetail?.name }}</p>
      </div>
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
