const api = process.env.NEXT_PUBLIC_REACT_APP_API_URL

export const APIS = {
    PRODUCTS: {
        GET_PRODUCTS: (country_code: string,) =>`${api}/products?category=airtime&country=GH&limit=5`
    }
}
