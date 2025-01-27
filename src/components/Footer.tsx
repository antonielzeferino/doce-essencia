const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 pb-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Informações da Loja */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-2">Localização</h3>
            <p className="text-sm leading-relaxed">
              Rua dos Desenvolvedores, 123<br />
              Bairro React, Cidade Next.js - SP, Brasil
            </p>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-2">Contato</h3>
            <p className="text-sm leading-relaxed">
              Telefone: (11) 99999-9999<br />
              Email: contato@lojaexemplo.com.br
            </p>
          </div>

          {/* Créditos */}
          <div>
            <h3 className="text-lg font-semibold text-pink-500 mb-2">Créditos</h3>
            <p className="text-sm leading-relaxed">
              Desenvolvido por 
              <a href="https://linkedin.com/in/antonielzeferino" target="_blank" className=" text-blue-400"> Antoniel Zeferino </a>
              {" & "}
              <a href="#" target="_blank" className=" text-blue-400"> Maciel Zeferino </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
