<template>
  <section
    class="lg:w-[78%] lg:px-1 flex lg:flex-row gap-4 lg:pb-4 mt-32 lg:min-h-[85vh] flex-col mb-4 lg:min-w-[900px] w-[90%]"
  >
    <div class="lg:w-[70%] flex flex-col gap-3 w-full">
      <ProductCartItem
        v-for="product in productStore.productCar"
        :key="product.id"
        :product="product"
        @updateAmountAccumulated="updateTotal"
      />
    </div>
    <div class="bg-[#fbfbfb] rounded-lg lg:w-[30%] w-full shadow-lg shadow-[#00000023] p-4 h-1/4">
      <h3 class="text-xl border-b-2 pb-2 mb-4">Purchase summary</h3>
      <div class="pb-1 flex justify-between">
        <div>
          Products <span class="text-[#FF5314]">({{ productStore.productCar.length }})</span>
        </div>
        <!-- <div>
          {{ totalAmount }}
        </div> -->
      </div>
      <div class="pb-1">Total</div>
      <div class="w-full text-center">
        <button class="bg-[#FF5314] text-white w-3/4 py-2 rounded-xl">Continue shopping</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useShopStore } from '../stores/shopStore';
import ProductCartItem from '../components/ProductCartItem.vue';
import { ref } from 'vue';

const productStore = useShopStore();
const totalAmount = ref<number>(0);
const updateTotal = (newAmount: number) => {
  totalAmount.value += newAmount;
  console.log(newAmount);
};
</script>

<style scoped></style>
