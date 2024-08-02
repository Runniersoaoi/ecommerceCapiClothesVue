<template>
  <section class="w-[78%]">
    <!-- <h3 class="font-popins text-2xl font-normal text-[#212121] pl-5 pb-5">
      Productos relacionados
    </h3> -->
    <div>
      <swiper
        :slides-per-view="5"
        :space-between="10"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="mySwiper"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay, Pagination, Navigation]"
      >
        <swiper-slide
          v-for="product in productStore"
          :key="product.id"
          class="max-w-72 pl-4 min-h-[450px] pt-4"
          ><ProductCard :product="product" :is-swiper="true"
        /></swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import type { Product } from '../interfaces/product.interface';
import ProductCard from './ProductCard.vue';

interface Props {
  productStore: Product[];
}

defineProps<Props>();

const onSwiper = (swiper) => {};

const onSlideChange = () => {};
</script>

<style scoped>
.mySwiper {
  max-width: 100%;
  overflow: hidden;
}
</style>
