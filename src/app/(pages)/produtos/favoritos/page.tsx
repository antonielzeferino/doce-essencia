import { ProductData } from "@/app/api/products/route";

const favoritos: ProductData[] = []

const removerFavorito = (id: string | undefined) => {

}

const Favoritos = () => {
  return (
    <section className="min-h-full flex-grow bg-background">
      <div className="max-w-5xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-900 sm:text-5xl md:text-6xl">
            Seus Favoritos
          </h1>
        </header>

        {/* Lista de Favoritos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoritos && favoritos.length === 0 ? (
            <p className="text-center text-gray-600 text-xl">Nenhum produto favorito ainda.</p>
          ) : (
            favoritos && favoritos.map((produto) => (
              <div
                key={produto.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={produto.imageUrl || "https://via.placeholder.com/200"}
                  alt={produto.name}
                  className="w-32 h-32 object-cover rounded-lg mb-4"
                />
                <h5 className="text-lg font-semibold text-gray-800 mb-2">{produto.name}</h5>
                <span className="text-green-700 font-bold">R$ {produto.price.toFixed(2)}</span>
                <button
                  onClick={() => removerFavorito(produto.id)}
                  className="mt-4 text-red-500 hover:text-red-700"
                >
                  Remover dos Favoritos
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Favoritos;
