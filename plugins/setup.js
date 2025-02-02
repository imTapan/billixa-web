import { useUserStore } from "@/store/user";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { $axios } = useNuxtApp();
  const store = useUserStore();
  const toast = useToast();
  const router = useRouter();

  const userId = useCookie("bw_auth");

  if (userId.value) {
    return await $axios
      .get(`/user/${userId.value}`)
      .then(({ data }) => {
        store.setUser(data);
      })
      .catch((error) => {
        store.logoutUser(1);
      });
  } else {
    store.logoutUser();
  }
});
