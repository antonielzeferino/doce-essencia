"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import homeBg from "/public/images/mobile-bg.png";
import desktopBg from "/public/images/desktop-bg.png";

function Home() {
  // Estado inicial neutro
  const [backgroundImage, setBackgroundImage] = useState<StaticImageData | null>(null);

  useEffect(() => {
    const updateBackgroundImage = () => {
      setBackgroundImage(window.innerWidth > 768 ? desktopBg : homeBg);
    };

    // Atualiza a imagem no primeiro render
    updateBackgroundImage();

    // Adiciona o event listener para resize
    window.addEventListener("resize", updateBackgroundImage);

    // Remove o event listener ao desmontar o componente
    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  // Renderiza um fallback enquanto a imagem é definida
  if (!backgroundImage) {
    return <div className="min-h-screen w-full bg-gray-100"></div>;
  }

  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center">
      <div className="w-full h-screen max-w-3xl md:max-w-[425px] lg:max-w-6xl relative">
        <Image
          src={backgroundImage}
          alt="Home Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

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
