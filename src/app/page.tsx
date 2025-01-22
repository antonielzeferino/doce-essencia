import Image from "next/image";
import Link from "next/link";
import homeBg from "../../public/images/home-bg.png";

function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center">
      {/* Imagem de fundo - no mobile ocupa toda a tela, e em telas grandes ocupa metade */}
      <div className="w-full h-screen max-w-3xl md:max-w-[425px] lg:max-w-lg relative">
        <Image
          src={homeBg}
          alt="Home Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        
        {/* Texto sobre a imagem no mobile */}
        <div className="md:hidden absolute inset-0 flex items-start mt-32 justify-center text-center p-8 md:p-0">
          <div className="text-gray-700">
            <h1 className="text-4xl font-serif text-pink-600 mb-4">Doce Essência</h1>
            <p className="text-lg mb-6">Beleza, cosméticos e cuidados pessoais</p>
            <Link href="/produtos">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all">
                Conheça nosso catálogo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Em telas grandes, o texto e a imagem ficam lado a lado */}
      <main className="hidden md:block p-8 text-center md:text-left max-w-lg md:w-1/2">
        <h1 className="text-4xl font-serif text-pink-600 mb-4">Doce Essência</h1>
        <p className="text-gray-700 font-light text-lg mb-6">
          Beleza, cosméticos e cuidados pessoais
        </p>

        <Link href="/produtos">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all">
            Conheça nosso catálogo
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
