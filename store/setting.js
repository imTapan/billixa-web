import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSettingStore = defineStore("setting", () => {
  // State
  const data = ref(null);
  const isSidebarOpen = ref(false);

  // Getters
  const getData = computed(() => data.value);

  // Actions
  function setData(data) {
    data.value = data;
  }

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
  }

  function clearSettingStore() {
    data.value = null;
    isSidebarOpen.value = false;
  }

  return {
    getData,
    isSidebarOpen,
    setData,
    toggleSidebar,
    clearSettingStore,
  };
});
