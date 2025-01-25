'use client';

import ProductsList from "@/components/ListProducts";
import { useState } from "react";

interface FilterOption {
  name: string;
  type: string;
}

function Products() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<FilterOption | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const options: FilterOption[] = [
    { name: "Todos", type: "" },
    { name: "Amadeirados", type: "tags" },
    { name: "Perfumes", type: "category" },
    { name: "Unissex", type: "tags" },
    { name: "Masculino", type: "tags" },
    { name: "Luxo", type: "tags" },
    { name: "Esportivas", type: "tags" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const newFilters: Record<string, string> = {};

    if (searchTerm.trim()) {
      newFilters["name"] = searchTerm.trim();
    }
    setSelectedFilter(null)
    setFilters(newFilters);
  };

  const handleOptionClick = (option: FilterOption) => {
    setSelectedFilter(option);
    setFilters(option.type === "" ? {} : { [option.type]: option.name });
  };

  return (
    <div className="bg-cover bg-center flex flex-col items-center py-8 px-1 md:px-4">
      <div className="w-full max-w-7xl min-[1280px]:shadow-lg min-[1280px]:rounded-lg px-1 md:p-6">
        <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4 sm:mb-8">
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-pink-800"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Buscar
          </button>
        </form>

        {/* Carrossel de opções */}
        <div className="overflow-x-auto whitespace-nowrap py-4 mb-8">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`inline-block px-4 py-2 mx-2 rounded-lg text-sm font-bold ${selectedFilter?.name === option.name
                  ? "bg-pink-600 text-white"
                  : "bg-pink-100 text-pink-800 hover:bg-pink-200"
                }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {/* Exibição dos produtos */}
        {Object.keys(filters).length > 0 ? (
          <section className="mb-8">
            <h4 className="text-xl font-serif text-stone-600 mb-4">
              Resultados da pesquisa
            </h4>
            <ProductsList filters={filters} layout="vertical" />
          </section>
        ) : (
          <>
            <section className="mb-8">
              <h4 className="text-xl font-serif text-stone-600 mb-4">
                Todos os produtos
              </h4>
              <ProductsList filters={{ name: "" }} layout="horizontal" />
            </section>

            <hr className="my-6" />

            <section className="mb-8">
              <h4 className="text-xl font-serif text-stone-600 mb-4">
                Amadeirados
              </h4>
              <ProductsList filters={{ tags: "Amadeirados" }} layout="horizontal" />
            </section>

            <hr className="my-6" />

            <section className="mb-8">
              <h4 className="text-xl font-serif text-stone-600 mb-4">
                Perfumes
              </h4>
              <ProductsList filters={{ category: "Perfumes" }} layout="horizontal" />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default Products;
