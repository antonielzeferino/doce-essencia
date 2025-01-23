'use client';

import ProductsList from '@/components/ListProducts';
import { useEffect, useState } from 'react';

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Termo de busca (nome ou descrição)
  const [searchType, setSearchType] = useState('name'); // 'name', 'tags', 'category'
  const [selectedCategory, setSelectedCategory] = useState(''); // Categoria selecionada
  const [filters, setFilters] = useState<Record<string, string>>({});

  const categories = [
    'Fragrâncias Masculinas',
    'Fragrâncias Femininas',
    'Unissex',
    'Luxo',
    'Esportivas',
    'Perfumes',
    'Cuidados Pessoais',
    'Cosmeticos'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o reload da página ao enviar o formulário

    if (searchTerm.trim() === '' && selectedCategory === '') return;

    const newFilters: Record<string, string> = {};

    if (searchTerm.trim()) {
      // Adiciona o termo de busca, concatenando todos os termos (se houver)
      newFilters[searchType] = searchTerm.trim();
    }

    if (selectedCategory) {
      newFilters['category'] = selectedCategory; // Adiciona a categoria selecionada
    }

    setFilters(newFilters);
  };

  useEffect(() => {
   console.log(filters)
  }, [filters])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">
        Pesquisar Perfumes
      </h1>
      <form
        onSubmit={handleSearch}
        className="bg-pink-50 p-6 rounded-lg shadow-lg"
      >
        <label className="block text-pink-600 font-semibold mb-2">
          Tipo de Busca
        </label>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-pink-800"
        >
          <option value="name">Nome</option>
          <option value="tags">Tags</option>
          <option value="category">Marca</option>
        </select>

        <label className="block text-pink-600 font-semibold mb-2">
          Termo de Busca (Nome ou Descrição)
        </label>
        <input
          type="text"
          placeholder="Digite o termo de busca..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-pink-800"
        />

        <label className="block text-pink-600 font-semibold mb-2">
          Selecione a Categoria
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-pink-800"
        >
          <option value="">Selecione uma categoria</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors duration-300"
        >
          Buscar
        </button>
      </form>

      <div className="mt-6">
        {/* Renderiza a lista de produtos com os filtros definidos */}
        <ProductsList filters={filters} />
      </div>
    </div>
  );
};

export default SearchProducts;
