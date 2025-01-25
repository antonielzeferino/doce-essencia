import { ProductData } from "@/app/api/products/route";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductData }) => {
  const { id, name, price, discountPercentage, imageUrl } = product;

  const discountPrice =
    discountPercentage &&
    ((price - (price * discountPercentage) / 100).toFixed(2));

  return (
    <div className="bg-gray-100 bg-opacity-40 rounded-lg w-[130px] flex-shrink-0">
      <Link href={`/produtos/${id}`} className="relative">
        {/* Contêiner da imagem */}
        <Image
          src={
            imageUrl ||
            "https://via.placeholder.com/300x400.png?text=Imagem+Indisponível"
          }
          alt={name}
          width={320}
          height={240}
          className="w-full h-48 object-cover rounded-t-lg"
          priority
        />

        {/* Índice de desconto */}
        {discountPercentage && (
          <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
            -{discountPercentage}%
          </span>
        )}
      </Link>
      <div className="p-3">
        <Link href={`/produtos/${id}`}>
          <h5 className="text-sm font-medium text-gray-800 mb-1">
            <span className="hover:text-indigo-500 transition-colors duration-300 line-clamp-1">
              {name}
            </span>
          </h5>
        </Link>
        <div className="flex flex-col items-start">
          {/* Contêiner de preço com altura fixa */}
          <div className="h-12 flex flex-col justify-center">
            {discountPercentage ? (
              <>
                <span className="line-through text-gray-400 text-xs mr-1">
                  R$ {price.toFixed(2)}
                </span>
                <span className="text-green-700 font-bold">
                  R$ {discountPrice}
                </span>
              </>
            ) : (
              <span className="text-green-700 font-bold">R$ {price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
