import { useEffect, useState } from "react";

const FavoriteButton = ({
  id,
}: {
  id?: string;
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const updateIsFavorite = () => {
    if (id) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(id));
    }
  };

  const updateLocalStorage = (id: string, isFavorite: boolean) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      if (!favorites.includes(id)) {
        favorites.push(id);
      }
    } else {
      const index = favorites.indexOf(id);
      if (index !== -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    window.dispatchEvent(new Event("storage"));
  };

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    if (id) {
      updateLocalStorage(id, newFavoriteStatus);
    }
  };

  useEffect(() => {
    updateIsFavorite();

    const handleStorageChange = () => {
      updateIsFavorite();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [id]);

  return (
    <button
      onClick={handleToggle}
      className="absolute top-2 right-2 group"
      aria-label={isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-6 h-6 transition-colors duration-300 hover:text-pink-500 ${
          isFavorite ? "text-pink-500 fill-pink-500" : "text-gray-400"
        }`}
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>
  );
};

export default FavoriteButton;
