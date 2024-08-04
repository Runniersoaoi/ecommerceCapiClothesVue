<template>
  <section
    :class="`lg:w-[78%] lg:px-1 flex lg:flex-row gap-6 lg:h-[85vh] lg:pb-4 mt-32 flex-col-reverse bg-[#212121] lg:bg-transparent lg:py-0 w-[90%] rounded-[50px] px-12 py-20`"
  >
    <div
      class="lg:bg-[#fbfbfb] lg:rounded-[50px] lg:w-[43%] flex flex-col lg:gap-6 gap-4 lg:p-10 justify-center lg:shadow-lg lg:shadow-[#00000023]"
    >
      <img
        :src="productStore.productShop?.images[0]"
        class="h-auto lg:w-[83%] mx-auto rounded-[24px] shadow-lg shadow-[#00000023]"
        alt=""
      />
    </div>
    <div class="lg:bg-[#212121] lg:rounded-[50px] lg:w-[57%] content-center lg:p-10">
      <ContentLogo class="w-[60px] pb-6" />
      <h1 class="text-[#FBFBFB] text-5xl font-bold tracking-tighter pb-3">
        {{ productStore.productShop?.title }}
      </h1>
      <p class="text-[#787878] text-normal font-mono">
        {{ productStore.productShop?.description }}
      </p>
      <p class="py-4 text-4xl text-[#FBFBFB] font-semibold">
        S/ {{ productStore.productShop?.price }}
      </p>

      <div class="flex gap-3">
        <div
          v-for="size in productStore.productShop?.sizes"
          :key="size"
          class="bg-[#FF5314] py-1 min-w-12 rounded-md text-center font-mono"
        >
          {{ size }}
        </div>
      </div>
      <div
        @click="addProductToCarAndModal"
        class="flex items-center space-x-1.5 rounded-lg bg-[#FF5314] px-4 py-1.5 text-black font-semibold duration-100 transition-all mt-5 max-w-32 hover:cursor-pointer"
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

        <button class="text-sm">Add to cart</button>
      </div>
    </div>
  </section>
  <TheModal
    :openModal="modalState"
    :changeModalState="changeModalState"
    :product="productStore.productShop"
  />
  <ProductsSwiper :productStore="productStore.productsShopRandom" />
</template>

<script lang="ts" setup>
import { onDeactivated, onMounted, ref, watch } from 'vue';
import ProductsSwiper from '../components/ProductsSwiper.vue';
import { useShopStore } from '../stores/shopStore';
import { useRoute } from 'vue-router';
import TheModal from '@/module/common/components/TheModal.vue';

const route = useRoute();
const productStore = useShopStore();
const modalState = ref<boolean>(false);

const { id } = defineProps<{ id: string }>();

const changeModalState = () => {
  modalState.value = !modalState.value;
  if (modalState.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};

const addProductToCarAndModal = () => {
  productStore.addProductToCar(productStore.productShop);
  changeModalState();
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

watch(
  () => route.params.id,
  (newId) => {
    productStore.loadProduct(newId);
    productStore.loadProductsRandom();
    scrollToTop();
  },
  { immediate: true },
);

onMounted(() => productStore.loadProduct(id));
onMounted(() => productStore.loadProductsRandom());
</script>
