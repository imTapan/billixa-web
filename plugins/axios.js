import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const axiosInstance = axios.create({
    baseURL: runtimeConfig.public.ENDPOINT,
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // token.value = null;
      }
      return Promise.reject(error);
    }
  );
  return {
    provide: { axios: axiosInstance },
  };
});
