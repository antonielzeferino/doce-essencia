import ProductsList from "@/components/ListProducts";
import Link from "next/link";

function Products() {
  return (
    <div className="flex flex-col items-center py-6 px-4 bg-gray-50 min-h-screen">
      <div className="w-full max-w-4xl">
        {/* Botão de voltar */}
        <Link
          href="/"
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mb-6 inline-flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Voltar
        </Link>

        {/* Seções de produtos */}
        <section className="mb-8">
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            Todos os produtos
          </h4>
          <ProductsList />
        </section>

        <hr className="border-gray-300 my-6" />

        <section className="mb-8">
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            Promoções Especiais
          </h4>
          <ProductsList />
        </section>

        <hr className="border-gray-300 my-6" />

        <section className="mb-8">
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            Novidades
          </h4>
          <ProductsList />
        </section>
      </div>
    </div>
  );
}

export default Products;
