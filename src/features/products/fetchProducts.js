import axios from "axios";
import { useEffect, useState } from "react";

export default function getProducts() {
  const [dataProducts, setDataProducts] = useState([]);

  const getData = async () => {
    try {
      const responApi = await axios.get("http://localhost:2000/products");

      setDataProducts(responApi.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data: dataProducts,
  };
}
