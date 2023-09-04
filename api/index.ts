import axios from "axios";

let AxoisApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL,
});

export default AxoisApi