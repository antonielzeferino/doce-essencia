import ShowProduct from "@/components/ShowProduct";
import { whatsappNumber } from "@/components/WhatsAppButton";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const productName = `Produto ${id}`;

  return (
    <div
      className="bg-cover bg-center flex flex-col items-center py-8 px-4"
    >
      <div className="max-w-7xl">
        <Link
          href="/produtos"
          className="text-pink-600 font-semibold hover:text-pink-800 transition-colors mb-6 inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Voltar
        </Link>

        <div className="mt-4">
          <ShowProduct id={id} />
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de fazer um pedido do ${productName}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all"
        >
          <FaWhatsapp className="w-5 h-5" />
          Pedir no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Product;
