import { useEffect, useState } from "react";
import { getProductLists } from "./api";

export interface Product {
  skuId: number;
  name: string;
  category: string;
  description: string;
  brand: string;
  modelNumber: string;
}

export function Products() {
  const [productList, setProductList] = useState<Product[]>([]);

  const init = async () => {
    try {
      const list = await getProductLists();
      setProductList(list as Product[]);
    } catch {
      alert("Error");
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <>
    <h2>Products Listing</h2>
    <ul>
      {
        productList.map(product => (
          <li>{product.skuId} - {product.name}</li>
        ))
      }
    </ul>
  </>;
}
