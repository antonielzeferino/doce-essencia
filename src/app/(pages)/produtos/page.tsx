'use client';

import ProductsList from "@/components/ProductsList";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    { name: "Promoções", type: "promotion" },
    { name: "Masculino", type: "tags" },
    { name: "Feminino", type: "tags" },
    { name: "Unissex", type: "tags" },
    { name: "Kits & presentes", type: "category" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const newFilters: Record<string, string> = {};

    if (searchTerm.trim()) {
      newFilters["name"] = searchTerm.trim();
    }
    setSelectedFilter(null);
    setFilters(newFilters);
  };

  const handleOptionClick = (option: FilterOption) => {
    setSelectedFilter(option);

    if (option.type === "promotion") {
      setFilters({ promotion: "true" });
    } else if (option.type === "") {
      setFilters({});
    } else {
      setFilters({ [option.type]: option.name });
    }
  };

  return (
    <div className="bg-cover bg-center flex flex-col items-center py-8 px-1 md:px-4">
      <div className="w-full max-w-7xl min-[1280px]:shadow-lg min-[1280px]:rounded-lg px-1 md:p-6">
        <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4 sm:mb-8 px-4">
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white text-gray-700"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-300"
          >
            Buscar
          </button>
        </form>

        <div className="overflow-x-auto whitespace-nowrap py-4 mb-8 ps-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`inline-block px-4 py-2 mx-2 rounded-lg text-sm font-bold ${
                selectedFilter?.name === option.name
                  ? "bg-pink-600 text-white"
                  : "bg-pink-100 text-gray-800 hover:bg-pink-200"
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>

        {Object.keys(filters).length > 0 ? (
          <section className="mb-8 px-4">
            <h4 className="text-xl font-serif text-stone-600 mb-4">
              Resultados da pesquisa
            </h4>
            <ProductsList filters={filters} layout="vertical" />
          </section>
        ) : (
          <>
            <section className="mb-8 px-4">
              <h4 className="text-xl font-serif text-stone-600 mb-4">
                Promoções
              </h4>
              <ProductsList filters={{ promotion: "true" }} layout="horizontal" />
            </section>

            <hr className="my-6" />

            <section className="mb-8 px-4">
              <h4 className="text-xl font-serif text-stone-600 mb-4">
                Kits & Presentes
              </h4>
              <ProductsList filters={{ category: "Kits & Presentes" }} layout="horizontal" />
            </section>

            <hr className="my-6" />

            <section className="mb-8 px-4">
              <h4 className="text-xl font-serif text-stone-600 mb-4">
                Perfumes
              </h4>
              <ProductsList filters={{ category: "Perfumes" }} layout="horizontal" />
            </section>
          </>
        )}
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default Products;
