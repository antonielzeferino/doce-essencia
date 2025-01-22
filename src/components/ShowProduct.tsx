"use client";

import { ProductData } from "@/app/api/products/route";
import Loading from "@/app/loading";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const ShowProduct = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<ProductData>();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get<ProductData>(`/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao buscar os detalhes do produto:", error);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (!product) return <Loading />;

  const {
    name,
    description,
    price,
    discountPercentage,
    promotionEndDate,
    imageUrl,
  } = product;

  const discountPrice =
    discountPercentage &&
    (price - (price * discountPercentage) / 100).toFixed(2);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
      <main className="w-full max-w-3xl flex flex-col md:flex-row">
        {/* Imagem do produto */}
        <div className="w-full md:w-1/2">
          <Image
            src={
              imageUrl ||
              "https://via.placeholder.com/600x400.png?text=Imagem+Indisponível"
            }
            alt={name}
            width={700}
            height={500}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Informações do Produto */}
        <div className="text-center md:text-left mt-4 md:mt-0 md:pl-6">
          <h1 className="text-xl sm:text-2xl font-medium text-gray-800 mb-2">{name}</h1>
          {discountPercentage ? (
            <div>
              <p className="text-sm text-gray-500 line-through">
                {price.toFixed(2)} R$
              </p>
              <p className="text-xl sm:text-2xl font-bold text-red-500">
                {discountPrice} R$
              </p>
              <p className="text-xs text-gray-600">
                Desconto de {discountPercentage}% {promotionEndDate && `até ${promotionEndDate}`}
              </p>
            </div>
          ) : (
            <p className="text-xl sm:text-2xl font-bold text-green-600">
              {price.toFixed(2)} R$
            </p>
          )}
          {/* Botão de Favoritar */}
          <button className="border border-gray-300 px-3 py-1 rounded-md mt-3 text-sm hover:bg-gray-100 transition">
            Favoritar
          </button>
        </div>
      </main>

      {/* Descrição do Produto */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Descrição</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ShowProduct;
