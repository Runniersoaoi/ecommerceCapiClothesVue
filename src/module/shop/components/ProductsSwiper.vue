<template>
  <section class="lg:w-[78%] w-[90%] lg:min-w-[900px]">
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
        :breakpoints="{
          // when window width is >= 320px
          0: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          // when window width is >= 640px
          333: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          666: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1153: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          // when window width is >= 1280px
          1500: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
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
