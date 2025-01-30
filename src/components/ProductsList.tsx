"use client"

import Loading from "@/app/loading";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "@/app/api/products/search/[...filters]/route";

interface ProductsListProps {
  filters?: Record<string, string>;
  layout?: "vertical" | "horizontal";
}

const gridClasses = `
  grid 
  grid-cols-[repeat(auto-fill,minmax(100px,1fr))] 
  sm:grid-cols-[repeat(auto-fill,minmax(130px,1fr))]
  gap-2 
  sm:gap-4 
  justify-items-center
`;

const ProductsList = ({ filters, layout = "horizontal" }: ProductsListProps) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const filterQuery = filters
          ? Object.entries(filters)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")
          : "";

        const response = await axios.get<ProductData[]>(
          `/api/products/search/${filterQuery}`
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return (
    <div className="w-full py-4">
      {isLoading ? (
        <Loading />
      ) : layout === "vertical" ? (
        <div className={`${gridClasses}`}>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} layout={layout}/>
            ))
          ) : (
            <p className="text-center text-gray-500">Nenhum produto disponível.</p>
          )}
        </div>
      ) : (
        <div className="flex overflow-x-auto gap-8 py-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} layout={layout}/>
            ))
          ) : (
            <p className="text-center text-gray-500 min-w-96">Nenhum produto disponível.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsList