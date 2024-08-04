<template>
  <section
    class="fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-50 z-20"
    v-if="openModal"
    @click="changeModalState"
  >
    <div
      class="absolute right-0 top-0 h-full lg:w-3/12 md:w-6/12 w-10/12 rounded-2xl border bg-slate-100 px-10"
      @click.stop
    >
      <div class="flex flex-col items-center justify-center h-full gap-2">
        <img :src="product.images[0]" alt="" class="w-3/4 rounded-xl shadow-lg" />
        <h3 class="font-mono text-md">You added to your cart</h3>
        <h5 class="font-semibold text-2xl text-center">{{ product.title }}</h5>
        <p>1 unit</p>
        <button
          @click.stop="changeModalState"
          class="bg-[#FF5314] w-2/5 py-1 rounded-xl text-sm font-mono"
        >
          Continue browsing
        </button>
        <RouterLink
          class="bg-[#FF5314] w-2/5 py-1 rounded-xl text-sm text-center hover:cursor-pointer font-mono"
          :to="{ name: 'product-cart' }"
          @click="changeModalState"
          >Go to cart</RouterLink
        >
      </div>
      <button @click.stop="changeModalState">Close</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '@/module/shop/interfaces/product.interface';

interface Props {
  openModal: boolean;
  changeModalState: () => void;
  product: Product;
}

defineProps<Props>();
</script>

<style scoped></style>
