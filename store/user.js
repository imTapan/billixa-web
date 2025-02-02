import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  // State
  const userId = useCookie("bw_auth");
  const router = useRouter();
  const toast = useToast();
  const user = ref(null);

  // Getters
  const getUser = computed(() => user.value);

  // Actions
  function setUser(data) {
    const userId = useCookie("bw_auth");
    userId.value = data?.id;
    user.value = data;

    toast.add({
      title: "Welcome back!",
      description: "You have successfully logged in as " + data?.fullName,
      icon: "mdi:login-variant",
      status: "success",
      color: "green",
    });
    router.push("/");
  }

  function logoutUser(status = 0) {
    userId.value = "";
    user.value = null;
    // Notify Logged Out
    if (status == 1) {
      toast.add({
        title: "Session Expired",
        description: "Please Login Again",
        status: "error",
        color: "red",
      });
    } else if (status == 2) {
      toast.add({
        title: "Logged Out",
        description: "You have been successfully logged out.",
        status: "success",
        color: "green",
      });
    } else {
      // Silent Logged Out
    }
    router.push("/login");
  }

  return {
    user,
    getUser,
    setUser,
    logoutUser,
  };
});
