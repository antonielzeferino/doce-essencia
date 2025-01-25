import ShowProduct from "@/components/ShowProduct";
import Link from "next/link";

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div
      className="bg-cover bg-center flex flex-col items-center py-8 px-4"
      style={{
        backgroundImage: "url('/path/to/your-background-image.jpg')", // Substitua pelo caminho da sua imagem de fundo
      }}
    >
      <div className="w-full ">
        {/* Botão de voltar */}
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

        {/* Detalhes do produto */}
        <div className="mt-4">
          <ShowProduct id={id} />
        </div>
      </div>
    </div>
  );
};

export default Product;
