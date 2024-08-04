<template>
  <nav
    class="lg:max-h-[96px] lg:flex-row flex flex-col justify-between lg:bg-[#fbfbfb] lg:pl-8 lg:rounded-3xl lg:w-[78%] lg:min-w-[900px] px-1 items-center lg:shadow-lg lg:shadow-[#00000023] min-w-0 w-[95%] shadow-none"
  >
    <div
      class="w-full px-8 lg:p-0 flex text-start lg:w-auto items-center justify-between gap-3 lg:h-full bg-[#fbfbfb] rounded-3xl h-[96px] shadow-lg shadow-[#00000023] lg:shadow-none"
    >
      <div class="flex gap-4">
        <IconLogo class="h-[40px]" /><span class="text-3xl font-mono font-semibold"
          >Capilothes</span
        >
      </div>
      <div>
        <ion-icon
          @click="toggleMenu"
          :name="isMenuOpen ? 'close' : 'menu'"
          class="text-3xl cursor-pointer lg:hidden"
        ></ion-icon>
      </div>
    </div>
    <div
      ref="navLinks"
      :class="[
        'nav-links duration-500 py-4 lg:py-0 gap-6 lg:gap-0 flex lg:h-[96px] items-center flex-col lg:flex-row mt-4 pt-4 lg:pt-0 lg:mt-0 bg-[#fbfbfb] w-[95%] lg:w-auto rounded-3xl lg:rounded-3xl shadow-lg shadow-[#00000023] lg:shadow-none lg:static absolute',
        isMenuOpen ? 'top-[100%]' : '-top-[170%]',
      ]"
    >
      <div class="nav-link">
        <RouterLink class="px-6 py-2 rounded-lg hover:bg-gray-200" to="/home">Home</RouterLink>
      </div>
      <div class="nav-link">
        <RouterLink to="/products" class="px-6 py-2 rounded-lg hover:bg-gray-200"
          >Products</RouterLink
        >
      </div>
      <div class="nav-link">
        <RouterLink to="/contact" class="px-6 py-2 rounded-lg hover:bg-gray-200"
          >Contact</RouterLink
        >
      </div>
      <div v-if="authStore.isAdmin" class="nav-link">
        <RouterLink to="/admin" class="px-6 py-2 rounded-lg hover:bg-gray-200">Admin</RouterLink>
      </div>
      <div
        class="nav-link lg:bg-[#FF5314] lg:rounded-3xl lg:h-[90px] lg:flex lg:justify-center lg:items-center"
      >
        <RouterLink to="/register">{{
          authStore.authStatus === AuthStatus.Authenticated ? 'Logout' : 'Register'
        }}</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/module/auth/stores/auth.store';
import IconLogo from '../icons/IconLogo.vue';
import { AuthStatus } from '@/module/auth/interfaces';

const authStore = useAuthStore();
const isMenuOpen = ref(false);
const navLinks = ref<HTMLDivElement | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.nav-link {
  @apply font-mono min-w-32 text-center;
}

.register-link {
  @apply bg-[#FF5314] rounded-3xl h-[90px] flex justify-center items-center;
}

.router-link-active {
  @apply bg-gray-200;
}
</style>
