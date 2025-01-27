"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";

type ProductData = {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
};

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState<ProductData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Recupera os IDs dos favoritos no localStorage
    const fetchFavorites = async () => {
      const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");

      if (favoriteIds.length === 0) {
        setFavoritos([]);
        setLoading(false);
        return;
      }

      try {
        // Faz a requisição à API para buscar os produtos favoritos
        const response = await axios.post("/api/products/favorites", {
          ids: favoriteIds,
        });

        setFavoritos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos favoritos:", error);
        setFavoritos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const removerFavorito = (id: string) => {
    // Remove o favorito do estado local
    setFavoritos((prev) => prev?.filter((produto) => produto.id !== id) || []);

    // Remove o favorito do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = storedFavorites.filter((favoriteId: string) => favoriteId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return <Loading />;
  }

  if (!favoritos || favoritos.length === 0) {
    return <p className="text-center text-gray-600 text-xl mt-4">Nenhum produto favorito ainda.</p>;
  }

  return (
    <section className="min-h-full flex-grow bg-background mb-8">
      <div className="max-w-7xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-900 sm:text-5xl md:text-6xl">
            Seus Favoritos
          </h1>
        </header>

        <div 
          className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6"
        >
          {favoritos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col relative"
            >
              <Link href={`produtos/${produto.id}`}>
                <Image
                  src={produto.imageUrl || "https://via.placeholder.com/200"}
                  alt={produto.name}
                  className="w-32 h-32 object-cover rounded-lg mb-4 mx-auto"
                  width={150}
                  height={200}
                  priority
                />
              </Link>

              <button
                onClick={() => removerFavorito(produto.id)}
                className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-red-200 transition-all"
                aria-label="Remover dos Favoritos"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-red-500"
                >
                  <path
                    d="M6 19c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V7H6v12zM19 4h-4V3c0-.553-.447-1-1-1h-4c-.553 0-1 .447-1 1v1H5c-.553 0-1 .447-1 1s.447 1 1 1h14c.553 0 1-.447 1-1s-.447-1-1-1z"
                  />
                </svg>
              </button>
              <Link href={`/produtos/${produto.id}`} className="text-start">
                <h5 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{produto.name}</h5>
                <span className="text-green-700 font-bold">R$ {produto.price.toFixed(2)}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favoritos;
