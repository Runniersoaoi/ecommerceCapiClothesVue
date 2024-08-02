<template>
  <div class="fixed bottom-4 right-8">
    <div
      class="bg-[#ff5314] rounded-full h-12 w-12 p-3 hover:cursor-pointer hover:scale-110 transition-transform hover:shadow-2xl shadow-black"
    >
      <MessageLogo />
    </div>
    <RouterLink :to="{ name: 'product-cart' }"
      ><div
        class="bg-[#ff5314] rounded-full h-12 w-12 p-3 mt-2 hover:cursor-pointer hover:scale-110 transition-transform hover:shadow-2xl shadow-black flex items-center"
      >
        <div class="text-sm font-mono text-white">{{ productStore.productCar.length }}</div>
        <ShopingCartLogo /></div
    ></RouterLink>
  </div>
</template>

<script setup lang="ts">
import ShopingCartLogo from '@/module/common/icons/ShopingCartLogo.vue';
import MessageLogo from '@/module/common/icons/MessageLogo.vue';
import { useShopStore } from '../stores/shopStore';

const productStore = useShopStore();
</script>
