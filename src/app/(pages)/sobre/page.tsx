export default function SobreNos() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-900 sm:text-5xl md:text-6xl">
            Sobre Nós
          </h1>
          <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
            Descubra a essência da nossa loja, nossa história, e como nos encontrar em Esperantina, Piauí.
          </p>
        </header>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-pink-800 mb-4 sm:text-3xl md:text-4xl">
            Nossa História
          </h2> 
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            A <strong>Doce Essência</strong> nasceu de um sonho: oferecer fragrâncias que toquem o coração e criem memórias. Desde o nosso
            início, temos orgulho de levar aos nossos clientes produtos de alta qualidade, com aromas que inspiram e encantam. Somos movidos pela
            paixão de tornar cada visita especial, oferecendo uma experiência única de cuidado e carinho.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-pink-800 mb-4 sm:text-3xl md:text-4xl">
            Nossa Localização
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            Estamos no coração de Esperantina, Piauí. Venha nos visitar para conhecer nossa seleção exclusiva de essências e perfumes, pensados para você.
          </p>
          <div className="mt-6 bg-white shadow-md p-4 rounded-lg">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>Endereço:</strong> Rua Principal, 456 - Centro, Esperantina, PI
            </p>
            <iframe
              className="mt-4 w-full h-64 rounded-lg sm:h-80 md:h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.6788919867643!2d-42.233815!3d-3.901587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMyDCsDU0JzA1LjciUyA0MsKwMTMnNTEuNyJX!5e0!3m2!1sen!2sbr!4v1234567890123"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-pink-800 mb-4 sm:text-3xl md:text-4xl">
            Entre em Contato
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            Caso tenha dúvidas, sugestões ou queira saber mais sobre nossos produtos, entre em contato conosco. Será um prazer atendê-lo!
          </p>
          <div className="mt-6 bg-white shadow-md p-4 rounded-lg">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>Telefone:</strong> (86) 99999-9999
            </p>
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>Email:</strong> contato@doceessencia.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
