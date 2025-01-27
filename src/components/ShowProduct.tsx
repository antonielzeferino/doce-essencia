"use client";

import Loading from "@/app/loading";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import FavoriteButton from "./FavoriteButton";
import { ProductData } from "@/app/api/products/search/[...filters]/route";

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
    brand,
    colors,
  } = product;

  const discountPrice =
    discountPercentage &&
    (price - (price * discountPercentage) / 100).toFixed(2);

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    return date.toString() !== "Invalid Date" && date > now;
  };

  const formattedEndDate =
    promotionEndDate && isValidDate(promotionEndDate)
      ? new Date(promotionEndDate).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      : null;

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 bg-gray-50">
      <main className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/4 relative">
          <Image
            src={
              imageUrl ||
              "https://via.placeholder.com/600x400.png?text=Imagem+Indisponível"
            }
            alt={name}
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
          <FavoriteButton id={id} />
        </div>

        {/* Info Section */}
        <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
          <div>
            {brand && (
              <p className="text-sm text-gray-500 mb-1">
                Marca: <span className="font-medium text-gray-800">{brand}</span>
              </p>
            )}
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{name}</h1>

            {discountPercentage ? (
              <div>
                <p className="text-sm text-red-500 line-through">
                  R$ {price.toFixed(2)}
                </p>
                <p className="text-2xl font-bold text-green-500">
                  R$ {discountPrice}
                </p>
                <p className="text-sm text-gray-500">
                  Desconto de {discountPercentage}%
                  {formattedEndDate && ` até ${formattedEndDate}`}
                </p>
              </div>
            ) : (
              <p className="text-2xl font-bold text-green-600">
                R$ {price.toFixed(2)}
              </p>
            )}
          </div>

          {colors && colors.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Cores disponíveis:</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShowProduct;
