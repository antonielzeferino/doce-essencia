"use client";

import { ProductData } from "@/app/api/products/route";
import Loading from "@/app/loading";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductData[]>("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full p-4">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex overflow-x-auto gap-4">
          {products.length > 0 ? (
            products.map((product) => {
              const { id, name, description, price, discountPercentage, imageUrl } = product;

              const discountPrice =
                discountPercentage &&
                ((price - (price * discountPercentage) / 100).toFixed(2));

              return (
                <div
                  key={id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md w-[240px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`/produtos/${id}`}>
                    <Image
                      src={
                        imageUrl ||
                        "https://via.placeholder.com/300x400.png?text=Imagem+Indisponível"
                      }
                      alt={name}
                      width={320}
                      height={240}
                      className="w-full h-60 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-3">
                    <Link href={`/produtos/${id}`}>
                      <h5 className="text-sm font-medium text-gray-800 mb-1">
                        <span className="hover:text-indigo-500 transition-colors duration-300">
                          {name}
                        </span>
                      </h5>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {description}
                      </p>
                    </Link>
                    <div className="flex flex-col items-start">
                      <span className="text-sm font-semibold text-gray-700">
                        {discountPercentage ? (
                          <>
                            <span className="line-through text-gray-400 text-xs mr-1">
                              {price.toFixed(2)} R$
                            </span>
                            <span className="text-pink-500">
                              {discountPrice} R$
                            </span>
                          </>
                        ) : (
                          <span className="text-green-700">{price.toFixed(2)} R$</span>
                        )}
                      </span>
                      {discountPercentage && (
                        <span className="text-xs text-pink-400">
                          Economize {discountPercentage}%!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">Nenhum produto disponível.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
