"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import homeBg from "../../public/images/mobile-bg.png";
import desktopBg from "../../public/images/desktop-bg.png";

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(homeBg);

  useEffect(() => {
    const updateBackgroundImage = () => {
      setBackgroundImage(window.innerWidth > 768 ? desktopBg : homeBg);
    };

    // Define a imagem inicial
    updateBackgroundImage();

    // Adiciona o listener para o resize
    window.addEventListener("resize", updateBackgroundImage);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center">
      {/* Imagem de fundo - no mobile ocupa toda a tela, e em telas grandes ocupa metade */}
      <div className="w-full h-screen max-w-3xl md:max-w-[425px] lg:max-w-full relative">
        <Image
          src={backgroundImage}
          alt="Home Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Texto sobre a imagem no mobile */}
        <div className="md:hidden absolute inset-0 flex items-start mt-[12vh] justify-center text-center p-8 md:p-0">
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
      <main className="hidden md:block p-8 text-center md:text-left max-w-lg md:w-full">
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
