import { tesloaApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/product.interface';
import { getImageProductsAction } from './get-image-product.action';

export const getProductsAction = async (page: number = 1) => {
  try {
    const { data } = await tesloaApi.get<Product[]>(`/products?offset=${(page - 1) * 10}`);

    return data.map((product) => ({
      ...product,
      images: product.images.map(getImageProductsAction),
    }));
  } catch (error) {
    throw new Error('No se pudo obtener los productos ');
  }
};
