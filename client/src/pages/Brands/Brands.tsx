import { useEffect, useState } from "react";
import { ADD_BRAND, GET_BRANDS } from "./queries";
import { useMutation, useQuery } from "@apollo/client";
import "./brands.css";

export interface Brand {
  id: number;
  name: string;
}

export function Brands() {
  const { loading, error, data, refetch } = useQuery(GET_BRANDS);
  const [
    addBrand,
    { data: brandData, loading: brandLoading, error: addBrandError },
  ] = useMutation(ADD_BRAND);
  const [brandName, setBrandName] = useState("");

  useEffect(() => {
    if (brandData && !brandLoading && refetch) {
      refetch();
    }
  }, [brandData, refetch, brandLoading]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h2>Brand Listing</h2>
      <ul style={{ maxHeight: "400px", overflow: "auto" }}>
        {data?.brands?.map((brand: Brand) => (
          <li key={brand.id}>
            {brand.id} - {brand.name}
          </li>
        ))}
      </ul>
      {addBrandError?.message && (
        <div className="error-notification">{addBrandError?.message}</div>
      )}
      <label>Brand Name</label>
      <input
        type="string"
        value={brandName}
        onChange={(e) => setBrandName(e?.target?.value || "")}
      />
      <button
        onClick={() => {
          addBrand({ variables: { input: { name: brandName } } });
          setBrandName("");
        }}
      >
        Add Brand
      </button>
    </>
  );
}
