<script setup>
import { useSettingStore } from "@/store/setting";

const { toggleSidebar } = useSettingStore();
const sidebarStore = useSettingStore();
</script>

<template>
  <header class="sticky top-0 z-999 flex w-full bg-gray-900 text-gray-100">
    <div
      class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11"
    >
      <div class="flex items-center gap-2 sm:gap-4 md:hidden w-full">
        <UButton
          @click="
            () => {
              toggleSidebar();
            }
          "
          icon="tabler:layout-sidebar-right-collapse"
          class="md:hidden"
        />

        <!-- Hamburger Toggle BTN -->
        <NuxtLink
          class="flex items-center justify-center gap-2 mx-auto whitespace-nowrap"
          to="/"
        >
          <img src="/public/logo.png" alt="Logo" class="h-12" />
          <h2 class="font-bold text-xl">Billixa</h2>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7 md:w-full">
        <UserDropdown class="ml-auto" />
      </div>
    </div>
  </header>
</template>
