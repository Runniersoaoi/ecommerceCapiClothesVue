<template>
  <section
    ref="section1"
    class="lg:w-[78%] lg:px-1 flex lg:flex-row lg:gap-4 gap-6 lg:h-[85vh] lg:pb-4 lg:mb-0 mb-4 mt-32 lg:min-w-[900px] w-[94%] flex-col bg-[#212121] lg:bg-transparent lg:rounded-none rounded-[50px] lg:p-4 px-12 py-20 lg:py-0"
  >
    <div
      class="lg:bg-[#212121] lg:min-w-[568px] lg:rounded-[50px] lg:w-[44%] flex flex-col lg:gap-6 gap-4 justify-center w-full lg:p-10"
    >
      <h1 class="text-[#FBFBFB] text-7xl font-bold tracking-tighter">
        Where <br />
        Brand meets Performance
      </h1>
      <p class="text-[#787878] text-lg font-mono">
        Manage your products <br />
        like it's your digital flagship <br />
        store
      </p>
      <RouterLink
        to="/register"
        class="min-h-[86px] w-[140px] bg-[#FF5314] content-center text-center font-semibold rounded-3xl"
        >Sign up</RouterLink
      >
    </div>
    <div
      class="lg:bg-[#fbfbfb] lg:rounded-[50px] lg:w-[56%] content-center text-center lg:shadow-lg lg:shadow-[#00000023] w-full"
    >
      <img
        src="../../../assets/images/homePageImage.png"
        class="h-auto lg:w-[76%] mx-auto lg:shadow-lg lg:shadow-[#00000023] w-full"
        alt=""
      />
    </div>
  </section>
  <section
    ref="section2"
    class="lg:w-[78%] lg:px-1 flex lg:flex-row gap-4 lg:h-[85vh] mb-4 pb-4 lg:min-w-[900px] w-[94%] bg-[#fbfbfb] lg:bg-transparent lg:rounded-none lg:shadow-none flex-col-reverse rounded-[50px] shadow-lg shadow-[#00000023] px-12 py-20 lg:py-0"
  >
    <div
      class="lg:bg-[#fbfbfb] lg:rounded-[50px] lg:w-[57%] flex flex-col gap-6 lg:p-10 justify-center lg:shadow-lg lg:shadow-[#00000023]"
    >
      <img
        src="../../../assets/images/productosImage.jpeg"
        class="h-auto lg:w-[83%] mx-auto rounded-[24px] shadow-lg shadow-[#00000023]"
        alt=""
      />
    </div>
    <div class="lg:bg-[#212121] lg:rounded-[50px] lg:w-[43%] content-center lg:p-10 min-w-[490px]">
      <ContentLogo class="w-[60px] pb-6" />
      <h1
        class="lg:text-[#FBFBFB] font-bold tracking-tighter pb-3 lg:text-6xl text-5xl text-[#212121]"
      >
        Content Merchandising
      </h1>
      <p class="text-[#787878] font-mono text-lg">
        Add stunning content blocks to collections to reflect your brand identity. Decide default
        and hover product images per page.
      </p>
    </div>
  </section>
  <section
    ref="section3"
    class="lg:w-[78%] lg:px-1 flex lg:flex-row gap-4 lg:h-[85vh] lg:pb-4 lg:min-w-[900px] w-[94%] flex-col bg-[#212121] lg:bg-transparent lg:py-0 rounded-[50px] px-12 py-20 mb-4"
  >
    <div
      class="lg:bg-[#212121] lg:rounded-[50px] lg:w-[43%] flex flex-col lg:gap-6 gap-4 lg:p-10 justify-center lg:min-w-[490px]"
    >
      <AdministrationLogo class="w-[60px] pb-2" />
      <h1 class="text-[#FBFBFB] font-bold tracking-tighter text-6xl">
        Administrative <br />
        Panel
      </h1>
      <p class="text-[#787878] text-lg font-mono">
        This project has a user who has the ability to manage products, create collections, and
        alter stock, sizes and categories
      </p>
    </div>
    <div
      class="lg:bg-[#fbfbfb] lg:rounded-[50px] lg:w-[57%] content-center lg:p-10 lg:shadow-lg lg:shadow-[#00000023]"
    >
      <img
        src="../../../assets/images/homeAdministrationImage.jpg"
        class="h-auto lg:w-[86%] mx-auto rounded-[24px] shadow-lg shadow-[#00000023]"
        alt=""
      />
    </div>
  </section>
  <section
    ref="section4"
    class="lg:w-[78%] lg:px-1 flex flex-col gap-4 lg:h-[83vh] bg-[#FF5314] rounded-[50px] items-center justify-center mb-5 lg:min-w-[900px] w-[94%] px-12 py-20"
  >
    <h3
      class="2xl:text-[180px] xl:text-[150px] lg:text-[120px] lg:font-bold lg:leading-[150px] md:leading-[100px] leading-[60px] text-[#181818] font-bold tracking-tighter text-center mb-4 text-7xl"
    >
      Merchandising made simple
    </h3>
    <div class="flex flex-row gap-8 button-contact">
      <div class="rounded-3xl h-[90px] flex justify-center items-center">
        <RouterLink
          to="/register"
          class="h-full w-[176px] bg-[#181818] content-center text-center font-semibold rounded-3xl text-white"
          >Sign up
        </RouterLink>
      </div>
      <div class="rounded-3xl h-[90px] flex justify-center items-center">
        <RouterLink
          to="/products"
          class="min-h-[86px] w-[176px] bg-[#FF5314] content-center text-center font-semibold rounded-3xl border-2 border-[#181818] text-[#181818]"
          >Show products
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ContentLogo from '@/module/common/icons/ContentLogo.vue';
import AdministrationLogo from '@/module/common/icons/AdministrationLogo.vue';
</script>
