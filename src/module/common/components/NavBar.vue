<template>
  <nav
    class="max-h-[96px] flex justify-between bg-[#fbfbfb] pl-8 rounded-3xl w-[78%] px-1 items-center shadow-lg shadow-[#00000023]"
  >
    <div class="flex items-center gap-3 h-full">
      <IconLogo class="h-[40px]" /><span class="text-3xl font-mono font-semibold">Capilothes</span>
    </div>
    <div class="flex h-[96px] items-center">
      <div class="nav-link">
        <RouterLink class="" to="/home">Home</RouterLink>
      </div>
      <div class="nav-link"><RouterLink to="/products">Products</RouterLink></div>
      <div class="nav-link"><RouterLink to="/contact">Contact</RouterLink></div>
      <div v-if="authStore.isAdmin" class="nav-link">
        <RouterLink to="/admin">Admin</RouterLink>
      </div>
      <div class="nav-link register-link">
        <RouterLink to="/register">{{
          authStore.authStatus === AuthStatus.Authenticated ? 'Logout' : 'Register'
        }}</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/module/auth/stores/auth.store';
import IconLogo from '../icons/IconLogo.vue';
import { AuthStatus } from '@/module/auth/interfaces';

const authStore = useAuthStore();
</script>

<style scoped>
.nav-link {
  @apply font-mono  min-w-32 text-center;
}

.register-link {
  @apply bg-[#FF5314] rounded-3xl h-[90px] flex justify-center items-center;
}

.router-link-active {
  @apply bg-gray-200 px-6 py-2 rounded-lg;
}
</style>
