<template>
  <aside
    class="absolute left-0 top-0 z-[9999] flex h-screen w-60 flex-col overflow-y-auto duration-200 ease-linear md:static md:translate-x-0 bg-gray-900 text-gray-100"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      '-translate-x-full': !sidebarStore.isSidebarOpen,
    }"
    ref="target"
  >
    <!-- SIDEBAR HEADER -->
    <div class="">
      <button
        class="block md:hidden ml-auto mx-4 mt-4"
        @click="sidebarStore.isSidebarOpen = false"
      >
        <UIcon name="mdi:window-close" />
      </button>
      <NuxtLink
        to="/"
        class="flex items-center justify-center gap-1 flex-col w-full py-2"
      >
        <img src="/public/logo.png" alt="Logo" class="w-24" />
        <h2 class="font-bold text-2xl">Billixa</h2>
      </NuxtLink>
    </div>

    <!-- Navigations -->
    <div class="flex flex-col duration-300 ease-linear grow">
      <!-- Sidebar Menu -->
      <nav class="mt-5 py-4 px-4 md:mt-9 md:px-6 space-y-2">
        <NuxtLink
          v-for="item in sidebarRoutes"
          class="group relative flex items-center gap-2.5 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-gray-800 rounded dark:hover:bg-meta-4"
          activeClass="bg-gray-700/50"
          :to="item.route"
        >
          <UIcon :name="item.icon" />
          {{ item.label }}
        </NuxtLink>
      </nav>
      <!-- Sidebar Menu -->
    </div>

    <!-- Version -->
    <div class="flex items-center justify-center bg-gray-800/50 py-1">
      version : {{ version }}
    </div>
  </aside>
</template>
<script setup lang="ts">
import { version } from "@/package.json";
import { useSettingStore } from "@/store/setting";
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

const sidebarStore = useSettingStore();

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false;
});

const sidebarRoutes = ref([
  {
    icon: `tabler:layout-dashboard`,
    label: "Dashboard",
    route: "/",
  },
  {
    icon: `ri:auction-line`,
    label: "Auctions",
    route: "/auctions",
  },
  {
    icon: `material-symbols:leaderboard-outline-rounded`,
    label: "Leads",
    route: "/leads",
  },
  {
    icon: `streamline:investment-selection`,
    label: "Investors",
    route: "/investors",
  },
]);
</script>
