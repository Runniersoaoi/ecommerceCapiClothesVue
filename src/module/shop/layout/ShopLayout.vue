<template>
  <div class="h-screen">
    <header class="w-full justify-center flex pt-8 fixed"><NavBar /></header>
    <div class="w-full pt-4 flex flex-col items-center">
      <RouterView />
    </div>
    <div class="w-full flex justify-center">
      <section
        class="w-[78%] px-1 flex flex-col gap-4 bg-[#181818] rounded-[50px] items-center justify-center mb-5"
      >
        <div class="flex items-center gap-3 h-full flex-col p-10">
          <div class="flex items-center gap-4 pb-5">
            <IconLogoWhite class="w-[30px]" /><span class="text-2xl font-mono text-[#fbfbfb]"
              >Capilothes</span
            >
          </div>
          <div class="flex gap-8">
            <div
              class="flex w-[280px] h-[80px] items-center justify-center gap-4 bg-[#212121] border-2 border-[#353535] rounded-[24px]"
            >
              <EcommerceLogo class="h-[30px] auto" />
              <p class="text-[#fbfbfb] text-normal font-semibold">Ecommerce prototipe</p>
            </div>
            <div
              class="flex w-[280px] h-[80px] items-center justify-center gap-4 bg-[#212121] border-2 border-[#353535] rounded-[24px]"
            >
              <MessagingIcon class="h-[30px] auto" />
              <div class="text-[#fbfbfb] text-normal font-semibold">Integrated messaging</div>
            </div>
          </div>
          <div class="text-[#fbfbfb] font-mono pt-6">
            Create with ❤️ by Matias Aquino inspired by Depcit 🌍
          </div>
        </div>
      </section>
    </div>
    <ProductCar />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/module/common/components/NavBar.vue';
import IconLogoWhite from '@/module/common/icons/IconLogoWhite.vue';
import EcommerceLogo from '@/module/common/icons/EcommerceLogo.vue';
import MessagingIcon from '@/module/common/icons/MessagingIcon.vue';
import ProductCar from '../components/ProductCar.vue';
</script>
