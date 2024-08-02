import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getProductsAction } from '../actions/get-products.action';
import type { Product } from '../interfaces/product.interface';
import { useRoute } from 'vue-router';
import { getProductByIdAction } from '../actions/get-product-by-id.action';

export const useShopStore = defineStore('shop', () => {
  const productCarInitial = localStorage.getItem('productCart');
  console.log(productCarInitial);
  const productsShop = ref<Product[]>([]);
  const productCar = ref<Product[]>(productCarInitial ? JSON.parse(productCarInitial) : []);
  const productsShopRandom = ref<Product[]>([]);
  const route = useRoute();
  const productShop = ref<Product>();

  const addProductToCar = (product: Product) => {
    try {
      productCar.value.push(product);
      localStorage.setItem('productCart', JSON.stringify(productCar.value));
      console.log(productCar.value);
    } catch (error) {
      console.error('Error agregando al carrito');
    }
  };

  const deleteProductToCar = (id: string) => {
    try {
      productCar.value = productCar.value.filter((product) => product.id !== id);
      console.log(productCar.value);
      localStorage.setItem('productCart', JSON.stringify(productCar.value));
    } catch (error) {
      console.error('Error eliminando producto del carrito');
    }
  };

  const loadProduct = async (id: string) => {
    try {
      productShop.value = await getProductByIdAction(id);
    } catch (error) {
      console.error('Error loading product');
    }
  };
  const loadProducts = async () => {
    try {
      productsShop.value = await getProductsAction(Number(route.query.page) || 1);
    } catch (error) {
      console.error('Error loading products');
    }
  };

  const loadProductsRandom = async () => {
    try {
      productsShopRandom.value = await getProductsAction(Math.floor(Math.random() * 5) + 1);
    } catch (error) {
      console.error('Error loading random products');
    }
  };
  return {
    loadProducts,
    route,
    productsShop,
    loadProduct,
    productShop,
    loadProductsRandom,
    productsShopRandom,
    addProductToCar,
    productCar,
    deleteProductToCar,
  };
});
