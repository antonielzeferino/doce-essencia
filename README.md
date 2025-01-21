# Doce Essência - Loja Online

Bem-vindo ao repositório da aplicação **Doce Essência**, um projeto desenvolvido para oferecer uma experiência intuitiva e prática aos clientes de uma loja. A aplicação permite visualizar todos os produtos disponíveis, acessar detalhes específicos de um produto e realizar buscas baseadas em propriedades como nome, categoria e preço.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **Next.js** (v15.1.5): Framework para criação de aplicações web modernas.
- **React** (v19.0.0): Biblioteca para construção de interfaces de usuário.
- **Tailwind CSS** (v3.4.1): Framework de utilitários CSS para estilização rápida e eficiente.
- **Prisma** (v6.2.1): ORM para interagir com o banco de dados de forma simplificada.
- **Axios** (v1.7.9): Biblioteca para requisições HTTP.

## 📋 Funcionalidades

- **Listagem de Produtos**: Visualize todos os produtos disponíveis na loja.
- **Detalhes do Produto**: Acesse informações detalhadas sobre um produto específico.
- **Pesquisa Avançada**: Encontre produtos usando filtros como nome, categoria ou faixa de preço.

## 📦 Instalação e Execução

Siga as etapas abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js (v16 ou superior)
- NPM ou Yarn

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/antonielzeferino/doce-essencia.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd doce-essencia
   ```

3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Configure o banco de dados com Prisma:
   ```bash
   npx prisma generate
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

6. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## 📂 Estrutura de Pastas

```
.
├── api/            # Rotas para consultar os produtos
├── components/     # Componentes reutilizáveis
├── lib/            # Configurações do Prisma
├── prisma/         # Esquema do banco de dados
└── public/         # Arquivos públicos (imagens, ícones, etc.)
```

## 🛠️ Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria uma versão de produção.
- **`npm run start`**: Inicia a aplicação em modo de produção.
- **`npm run lint`**: Executa o linting para manter a qualidade do código.