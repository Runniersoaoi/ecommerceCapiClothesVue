<template>
  <section
    class="lg:w-[78%] px-1 flex lg:flex-row gap-4 lg:h-full lg:min-w-[900px] flex-col w-[90%]"
  >
    <div class="bg-white rounded-2xl lg:w-[50%] flex flex-col p-10 justify-center items-center">
      <h1 class="text-4xl font-black pb-1">Register</h1>
      <p class="font-mono pb-4">Enter your email and password</p>
      <form @submit.prevent="onRegister">
        <label for="name" class="block pb-1">Full name</label>
        <input
          v-model="myForm.fullName"
          ref="fullNameInputRef"
          type="text"
          id="name"
          name="name"
          class="w-full border border-gray-300 rounded-md py-2 px-3 outline-[#ff5314]"
          autocomplete="off"
          placeholder="Full name"
        />
        <label for="email" class="text-base mt-3">Email</label>
        <input
          v-model="myForm.email"
          ref="emailInputRef"
          type="email"
          id="email"
          name="email"
          class="w-full block min-h-10 border mt-1 mb-2 border-gray-300 rounded-md p-2 outline-[#ff5314]"
          placeholder="Email"
          autocomplete="off"
        />
        <label for="password" class="text-base">Password</label>
        <input
          v-model="myForm.password"
          ref="passwordInputRef"
          type="password"
          id="password"
          name="password"
          class="w-full block min-h-10 border mt-1 border-gray-300 rounded-md p-2 outline-[#ff5314]"
          placeholder="Password"
          autocomplete="off"
        />
        <button
          type="submit"
          class="min-w-80 bg-[#FF5314] text-white py-2 rounded-md font-mono mt-3"
        >
          Create my account
        </button>
        <div class="font-mono text-sm text-center pt-2">
          <span class="pr-2">Do you already have an account?</span
          ><RouterLink class="text-[#FF5314]" :to="{ name: 'login' }">Sign in</RouterLink>
        </div>
      </form>
      <!-- <RouterLink
        to=""
        class="min-h-[86px] w-[140px] bg-[#FF5314] content-center text-center font-semibold rounded-3xl"
        >Start for Free</RouterLink
      > -->
      <div
        class="text-center mt-10 font-mono bg-orange-100 border border-orange-500 p-2 rounded-xl w-3/4"
      >
        <div>Disclaimer</div>
        <p>The password requires at least one capital letter and one number.</p>
      </div>
    </div>
    <div
      class="bg-gradient rounded-2xl lg:w-[50%] content-center text-center shadow-lg shadow-[#00000023] lg:p-0 p-10"
    >
      <div class="flex flex-col">
        <IconLogoWhite class="h-10" />
        <h2 class="font-mono text-2xl text-white pb-10">Capilothes</h2>
        <div class="text-white w-full flex flex-col items-center gap-4">
          <div class="flex max-w-[430px] w-3/4 items-center gap-4">
            <div class="bg-[#212121] rounded-md p-1">
              <EcommerceLogo class="h-10" color="#ffffff" />
            </div>
            <div class="text-start">
              <div class="text-lg font-mono">Ecommerce prototipe</div>
              <p class="text-sm text-[#ECEEED]">
                This prototype includes the main representations of an eccommerce
              </p>
            </div>
          </div>
          <div class="flex max-w-[430px] w-3/4 items-center gap-4">
            <div class="bg-[#212121] rounded-md p-1">
              <MessagingIconTop class="h-10 inline" />
            </div>
            <div class="text-start">
              <div class="inline text-lg font-mono">Integrated messaging</div>
              <p class="text-sm text-[#ECEEED]">
                This prototype includes integrated messaging with pre-programmed messages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconLogoWhite from '@/module/common/icons/IconLogoWhite.vue';
import EcommerceLogo from '@/module/common/icons/EcommerceLogo.vue';
import MessagingIconTop from '@/module/common/icons/MessagingIconTop.vue';
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/auth.store';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const toast = useToast();
const router = useRouter();

const fullNameInputRef = ref<HTMLInputElement | null>(null);
const emailInputRef = ref<HTMLInputElement | null>(null);
const passwordInputRef = ref<HTMLInputElement | null>(null);

const myForm = reactive({
  fullName: '',
  email: '',
  password: '',
});

const onRegister = async () => {
  if (myForm.fullName.length < 2) {
    return emailInputRef.value?.focus();
  }

  if (myForm.email === '') {
    return emailInputRef.value?.focus();
  }

  if (myForm.password.length < 6) {
    return passwordInputRef.value?.focus();
  }

  const { ok, message } = await authStore.register(myForm.fullName, myForm.email, myForm.password);

  if (ok) {
    toast.success('Creación de cuenta exitoso');
    router.replace({ name: 'login' });
    return;
  }

  toast.error(message);
};
</script>

<style lang="scss" scoped></style>
