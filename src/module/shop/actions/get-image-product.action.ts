export const getImageProductsAction = (imageUrl: string) => {
  return imageUrl.includes('http')
    ? imageUrl
    : `http://localhost:3000/api/files/product/${imageUrl}`;
};
