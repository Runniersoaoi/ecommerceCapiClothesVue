<template>
  <div>
    <RouterLink :to="`/product/${product.id}`">
      <article
        class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 min-h-[410px] max-h-[410px]"
      >
        <div class="flex items-end overflow-hidden rounded-xl">
          <img :src="product.images[0]" alt="" class="h-[250px] object-cover" />
        </div>

        <div class="mt-1 p-2 flex flex-col h-full justify-between min-h-[132px]">
          <h2 class="text-slate-700">{{ product.title }}</h2>
          <p class="mt-1 text-sm text-slate-400 capitalize font-mono">{{ product.gender }}</p>

          <div class="mt-3 flex items-end justify-between">
            <p class="text-lg font-mono text-[#FF5314]">${{ product.price }}</p>

            <div
              v-if="!isSwiper"
              class="flex items-center space-x-1.5 rounded-lg bg-[#FF5314] px-4 py-1.5 text-white duration-100 hover:bg-orange-500 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <button class="text-sm" @click="shopStore.addProductToCar(product)">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { Product } from '../interfaces/product.interface';
import { useShopStore } from '../stores/shopStore';

const shopStore = useShopStore();

interface Props {
  product: Product;
  isSwiper: boolean;
}

defineProps<Props>();
</script>
