import ProductsList from "@/components/ListProducts";
import Link from "next/link";

function Products() {
  return (
    <div
      className="bg-cover bg-center flex flex-col items-center py-8 px-1 md:px-4"
    >
      <div className="w-full max-w-7xl min-[1280px]:shadow-lg min-[1280px]:rounded-lg  px-1 md:p-6">
        {/* Botão de voltar */}
        <Link
          href="/"
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

        {/* Seções de produtos */}
        <section className="mb-8">
          <h4 className="text-xl font-serif text-pink-600 mb-4">
            Todos os produtos
          </h4>
          <ProductsList />
        </section>

        <hr className="border-pink-300 my-6" />

        <section className="mb-8">
          <h4 className="text-xl font-serif text-pink-600 mb-4">
            Promoções Especiais
          </h4>
          <ProductsList />
        </section>

        <hr className="border-pink-300 my-6" />

        <section className="mb-8">
          <h4 className="text-xl font-serif text-pink-600 mb-4">
            Novidades
          </h4>
          <ProductsList />
        </section>
      </div>
    </div>
  );
}

export default Products;
