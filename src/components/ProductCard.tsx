import { ProductData } from "@/app/api/products/route";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductData }) => {
  const { id, name, price, discountPercentage, imageUrl, brand } = product;

  const discountPrice =
    discountPercentage &&
    ((price - (price * discountPercentage) / 100).toFixed(2));

  return (
    <div className="bg-white bg-opacity-80 rounded-lg w-[100px] md:w-[180px] flex-shrink-0">
      <Link href={`/produtos/${id}`} className="relative">
        <Image
          src={
            imageUrl ||
            "https://via.placeholder.com/300x400.png?text=Imagem+Indisponível"
          }
          alt={name}
          width={320}
          height={240}
          className="w-full h-28 md:h-48 object-cover rounded-t-lg"
          priority
        />

        {discountPercentage && (
          <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
            -{discountPercentage}%
          </span>
        )}
      </Link>
      <div className="p-3">
        <Link href={`/produtos/${id}`}>
          {brand && (
            <p className="text-[10px] text-gray-500 font-medium uppercase mb-1">
              {brand}
            </p>
          )}
          {/* Contêiner do título com altura fixa */}
          <div className="h-12 md:h-12 flex items-center">
            <h5 className="text-sm font-medium text-gray-800 line-clamp-2">
              <span className="hover:text-indigo-500 transition-colors duration-300">
                {name}
              </span>
            </h5>
          </div>
        </Link>
        <div className="flex flex-col items-start">
          {/* Contêiner de preço com altura fixa */}
          <div className="h-max md:h-14 flex flex-col justify-center">
            {discountPercentage ? (
              <div className="flex flex-col gap-1">
                <span className="line-through text-red-700 text-xs">
                  R$ {price.toFixed(2)}
                </span>
                <span className="text-green-700 font-bold">
                  R$ {discountPrice}
                </span>
              </div>
            ) : (
              <span className="text-green-700 font-bold text-base">
                R$ {price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
