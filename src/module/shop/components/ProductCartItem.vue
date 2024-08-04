<template>
  <div
    class="flex gap-5 items-center border p-5 rounded-lg bg-white justify-between flex-col md:flex-row"
  >
    <div><img :src="product.images[0]" alt="" class="h-16" /></div>
    <div>
      <h4 class="w-[300px]">{{ product.title }}</h4>
      <p
        class="mr-4 font-mono text-[#FF5314] hover:cursor-pointer"
        @click="productStore.deleteProductToCar(product.id)"
      >
        Delete
      </p>
      <!-- <a href="" class="font-mono text-[#FF5314]">Guardar</a> -->
    </div>
    <div class="flex gap-5 h-full items-center">
      <SubtractionLogo
        class="h-3 hover:cursor-pointer"
        @click="amount > 1 ? amount-- : (amount = 1)"
      />
      <p class="text-[#FF5314] font-mono">{{ amount }}</p>
      <PlusLogo
        class="h-4 hover:cursor-pointer"
        @click="amount + 1 <= product.stock ? amount++ : (amount = product.stock)"
      />
    </div>
    <div class="text-sm">Available {{ product.stock }}</div>
    <div class="font-mono">
      <p>S/ {{ amountAccumulated }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../interfaces/product.interface';
import PlusLogo from '@/module/common/icons/PlusLogo.vue';
import SubtractionLogo from '@/module/common/icons/SubtractionLogo.vue';
import { ref, watch, defineEmits } from 'vue';
import { useShopStore } from '../stores/shopStore';

interface Props {
  product: Product;
}

const { product } = defineProps<Props>();
const emit = defineEmits(['updateAmountAccumulated']);

const amount = ref<number>(1);
const amountAccumulated = ref<number>(product.price);
const productStore = useShopStore();

watch(amount, (newAmount) => {
  amountAccumulated.value = newAmount * product.price;
  emit('updateAmountAccumulated', amountAccumulated.value);
});
</script>
