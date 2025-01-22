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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <main className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Imagem */}
        <div className="w-full h-[80vh]">
          <Image
            src={
              imageUrl ||
              "https://via.placeholder.com/600x400.png?text=Imagem+Indisponível"
            }
            alt={name}
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detalhes do Produto */}
        <div className="flex-1 p-8 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            {name}
          </h1>
          <div className="space-y-2">
            {discountPercentage ? (
              <div>
                <p className="text-2xl font-bold text-gray-500 line-through">
                  {price.toFixed(2)} R$
                </p>
                <p className="text-3xl font-extrabold text-green-500">
                  {discountPrice} R$
                </p>
                <p className="text-sm text-pink-500">
                  Desconto de {discountPercentage}%{" "}
                  {promotionEndDate && `até ${promotionEndDate}`}
                </p>
              </div>
            ) : (
              <p className="text-4xl font-extrabold text-gray-700">
                {price.toFixed(2)} R$
              </p>
            )}
          </div>

          {/* Botão de Favoritar */}
          <button className="w-full md:w-auto bg-red-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-red-600 transition">
            ❤️ Favoritar
          </button>
        </div>
      </main>

      {/* Descrição */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg mt-6 p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Descrição</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Produtos Semelhantes */}
      <div className="w-full max-w-5xl bg-gray-50 rounded-lg shadow-lg mt-6 p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Produtos Semelhantes
        </h2>
        <div className="flex flex-wrap gap-4">
          {/* Espaço para renderizar os produtos semelhantes */}
          <div className="bg-gray-200 rounded-lg p-4 w-1/3">
            Produto 1 (Placeholder)
          </div>
          <div className="bg-gray-200 rounded-lg p-4 w-1/3">
            Produto 2 (Placeholder)
          </div>
          <div className="bg-gray-200 rounded-lg p-4 w-1/3">
            Produto 3 (Placeholder)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
