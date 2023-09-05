import AxoisApi from "@/api";
import { APIS } from "@/api/api";

export const getProducts = (country_code: string) => {
  return new Promise((resolve, reject) => {
    AxoisApi.get(`${APIS.PRODUCTS.GET_PRODUCTS(country_code)}`)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
