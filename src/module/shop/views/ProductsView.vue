<template>
  <section
    class="lg:w-[78%] px-1 grid gap-4 mt-36 lg:min-w-[900px] 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 w-[94%]"
  >
    <ProductCard
      v-for="product in productStore.productsShop"
      :key="product.id"
      :product="product"
      class="col-span-1"
      :is-swiper="true"
    />
  </section>
  <div class="w-full flex items-center justify-center mt-8 mb-10">
    <RouterLink class="link-navProducts" :to="{ name: 'products', query: { page: 1 } }"
      >1</RouterLink
    >
    <RouterLink class="link-navProducts" :to="{ name: 'products', query: { page: 2 } }"
      >2</RouterLink
    >
    <RouterLink class="link-navProducts" :to="{ name: 'products', query: { page: 3 } }"
      >3</RouterLink
    >
    <RouterLink class="link-navProducts" :to="{ name: 'products', query: { page: 4 } }"
      >4</RouterLink
    >
    <RouterLink class="link-navProducts" :to="{ name: 'products', query: { page: 5 } }"
      >5</RouterLink
    >
    <p class="pl-4 font-mono">Next...</p>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from '../components/ProductCard.vue';
import { watch } from 'vue';
import { useShopStore } from '../stores/shopStore';

const productStore = useShopStore();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

watch(
  () => productStore.route.query.page,
  () => {
    productStore.loadProducts();
    scrollToTop();
  },
  { immediate: true },
);
</script>

<style scoped>
.link-navProducts {
  @apply px-5 py-2 rounded-xl font-mono;
}
</style>
