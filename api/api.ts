const api = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

export const APIS = {
  PRODUCTS: {
    GET_PRODUCTS: (category: string, country_code: string, limit: number) =>
      `${api}/products?category=${category}&country=${country_code}&limit=${limit}`,
    GET_SINGLE_PRODUCT: (id: string) => `${api}/products/${id}`,
  },
};
