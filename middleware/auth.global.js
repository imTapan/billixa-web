export default defineNuxtRouteMiddleware(async (to, from) => {
  const userId = useCookie("bw_auth");

  // Fix Trailing Slash
  if (to.path !== "/" && to.path.endsWith("/")) {
    return navigateTo(to.path.slice(0, -1), { replace: true });
  }

  // Check for logged in
  if (!userId.value && to.path !== "/login") {
    return navigateTo("/login");
  } else if (userId.value && to.path === "/login") {
    return navigateTo("/");
  }
});
