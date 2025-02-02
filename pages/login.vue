<template>
  <div class="login-page flex h-full">
    <div class="hidden md:flex w-2/5 h-full p-4">
      <img
        src="https://images.unsplash.com/photo-1523539693385-e5e891eb4465"
        class="w-full h-full object-cover object-center rounded-2xl"
      />
    </div>
    <div
      class="login-form w-full md:w-3/5 flex my-auto h-full px-4 flex-col gap-8 items-center justify-center"
    >
      <div class="auth-branding w-full">
        <div
          class="flex items-center justify-center gap-2 mx-auto whitespace-nowrap"
        >
          <img src="/public/logo.png" alt="Logo" class="h-12" />
          <h2 class="font-bold text-xl">Billix - Billing Software</h2>
        </div>
      </div>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-5 max-w-56 md:max-w-80 w-full"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton
          type="submit"
          icon="mdi:login"
          label="Login"
          :loading="isLoading"
          loading-icon="mdi:dots-circle"
          class="w-full !mt-8"
        />
      </UForm>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/store/user.js";
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string().required("Required"),
});

definePageMeta({
  layout: "auth",
});

useHead({
  title: "Login | Billixa",
});

const { $axios }: any = useNuxtApp();
const router = useRouter();
const store = useUserStore();
const toast = useToast();

const isLoading = ref(false);

type Schema = InferType<typeof schema>;

const state = reactive({
  email: undefined,
  password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isLoading.value = true;

  await $axios
    .post("/login", event.data)
    .then(({ data }: any) => {
      if (data?.id) {
        store.setUser(data);
      } else {
        console.log("data", data);

        toast.add({
          title: "Login Failed",
          description: data?.body?.message || "Something went wrong",
          icon: "mdi:alert-circle",
          color: "red",
        });
      }
    })
    .catch((err: any) => {
      toast.add({
        title: "Login Failed",
        description: "Something went wrong",
        icon: "mdi:alert-circle",
        color: "red",
      });
    })
    .finally(() => {
      isLoading.value = false;
    });
}
</script>
