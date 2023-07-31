import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  slug: string;
  name: string;
  priceStart: number;
  priceEnd: number;
  rating: number;
  image: string;
};

const initState: ProductType[] = [
    {
        "slug": "hulu",
        "name": "hulu",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/hulu.png"
      },
      {
        "slug": "fanatics",
        "name": "fanatics",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/fanatics.png"
      },
      {
        "slug": "google-play",
        "name": "google play",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/google-play.png"
      },
      {
        "slug": "mtn",
        "name": "MTN",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/mtn.png"
      },
      {
        "slug": "hulu",
        "name": "hulu",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/hulu.png"
      },
      {
        "slug": "fanatics",
        "name": "fanatics",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/fanatics.png"
      },
      {
        "slug": "google-play",
        "name": "google play",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/google-play.png"
      },
      {
        "slug": "mtn",
        "name": "MTN",
        "priceStart": 5,
        "priceEnd": 5000,
        "rating": 4.7,
        "image": "/images/mtn.png"
      }
]

// const initState: ProductType[] = [];

export type UseProductContextType = { products: ProductType[] };

const initContextState: UseProductContextType = { products: [] };

const ProductContext = createContext<UseProductContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

//   useEffect(() => {
//     const fetchProducts = async (): Promise<ProductType[]> => {
//       const data = await fetch("http://localhost:3500")
//         .then((res) => {
//           return res.json();
//         })
//         .catch((err) => {
//           if (err instanceof Error) {
//             console.log(err.message);
//           }
//         });
//       return data;
//     };

//     fetchProducts().then((products) => setProducts(products));
//   }, []);
    
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
