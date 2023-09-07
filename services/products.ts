import AxoisApi from "@/api";
import { APIS } from "@/api/api";

export const getProducts = (
  category: string,
  country_code: string,
  limit: number
) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.PRODUCTS.GET_PRODUCTS(category, country_code, limit)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getSingleProduct = (id: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.PRODUCTS.GET_SINGLE_PRODUCT(id)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
