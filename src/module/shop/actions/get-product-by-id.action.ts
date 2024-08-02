import { tesloaApi } from '@/api/tesloApi';
import { getImageProductsAction } from './get-image-product.action';
import type { Product } from '../interfaces/product.interface';

export const getProductByIdAction = async (id: string = '') => {
  try {
    if (id == '') return;
    const { data } = await tesloaApi.get<Product>(`/products/${id}`);
    console.log(data);

    if (data) {
      return {
        ...data,
        images: data?.images.map(getImageProductsAction),
      };
    }
  } catch (error) {
    throw new Error('No se pudo obtener el producto ');
  }
};
