<template>
  <section class="w-[78%] px-1 flex flex-row gap-4 h-[85vh] pb-4 mt-32">
    <div class="bg-[#212121] rounded-[50px] w-[44%] flex flex-col gap-6 p-10 justify-center">
      <h1 class="text-[#FBFBFB] text-7xl font-bold tracking-tighter">
        Where <br />
        Brand meets Performance
      </h1>
      <p class="text-[#787878] text-lg font-mono">
        Manage Shopify collections <br />
        like it's your digital flagship <br />
        store
      </p>
      <RouterLink
        to=""
        class="min-h-[86px] w-[140px] bg-[#FF5314] content-center text-center font-semibold rounded-3xl"
        >Start for Free</RouterLink
      >
    </div>
    <div
      class="bg-[#fbfbfb] rounded-[50px] w-[56%] content-center text-center shadow-lg shadow-[#00000023]"
    >
      <img
        src="../../../assets/images/homePageImage.png"
        class="h-auto w-[76%] mx-auto shadow-lg shadow-[#00000023]"
        alt=""
      />
    </div>
  </section>
  <section class="w-[78%] px-1 flex flex-row gap-4 h-[85vh] pb-4">
    <div
      class="bg-[#fbfbfb] rounded-[50px] w-[57%] flex flex-col gap-6 p-10 justify-center shadow-lg shadow-[#00000023]"
    >
      <img
        src="../../../assets/images/productosImage.jpeg"
        class="h-auto w-[83%] mx-auto rounded-[24px] shadow-lg shadow-[#00000023]"
        alt=""
      />
    </div>
    <div class="bg-[#212121] rounded-[50px] w-[43%] content-center p-10">
      <ContentLogo class="w-[60px] pb-6" />
      <h1 class="text-[#FBFBFB] text-7xl font-bold tracking-tighter pb-3">
        Content <br />
        Merchandising
      </h1>
      <p class="text-[#787878] font-mono text-lg">
        Add stunning content blocks to collections to reflect your brand identity. Decide default
        and hover product images per page.
      </p>
    </div>
  </section>
  <section class="w-[78%] px-1 flex flex-row gap-4 h-[85vh] pb-4">
    <div class="bg-[#212121] rounded-[50px] w-[43%] flex flex-col gap-6 p-10 justify-center">
      <AdministrationLogo class="w-[60px] pb-2" />
      <h1 class="text-[#FBFBFB] text-7xl font-bold tracking-tighter">
        Strategic <br />
        Merchandising
      </h1>
      <p class="text-[#787878] text-lg font-mono">
        Set sorting rules for all your collection pages at once. Boost products up, or bury them at
        the bottom. Rules can be set based on collections, tags, and data.
      </p>
    </div>
    <div
      class="bg-[#fbfbfb] rounded-[50px] w-[57%] content-center p-10 shadow-lg shadow-[#00000023]"
    >
      <img
        src="../../../assets/images/homeAdministrationImage.jpg"
        class="h-auto w-[86%] mx-auto rounded-[24px] shadow-lg shadow-[#00000023]"
        alt=""
      />
    </div>
  </section>
  <section
    class="w-[78%] px-1 flex flex-col gap-4 h-[83vh] bg-[#FF5314] rounded-[50px] items-center justify-center mb-5"
  >
    <h3
      class="text-[180px] text-[#181818] font-bold tracking-tighter text-center leading-[150px] mb-4"
    >
      Merchandising made simple
    </h3>
    <div class="flex flex-row gap-8 button-contact">
      <div class="rounded-3xl h-[90px] flex justify-center items-center">
        <RouterLink
          class="h-full w-[176px] bg-[#181818] content-center text-center font-semibold rounded-3xl text-white"
          >Try for Free
        </RouterLink>
      </div>
      <div class="rounded-3xl h-[90px] flex justify-center items-center">
        <RouterLink
          class="min-h-[86px] w-[176px] bg-[#FF5314] content-center text-center font-semibold rounded-3xl border-2 border-[#181818] text-[#181818]"
          >Book a Demo
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ContentLogo from '@/module/common/icons/ContentLogo.vue';
import AdministrationLogo from '@/module/common/icons/AdministrationLogo.vue';
</script>
