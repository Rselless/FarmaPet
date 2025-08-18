# FarmaPet

## 📖 Sobre o Projeto

O Farma Pet é uma aplicação web de e-commerce focada em produtos para animais de estimação. O projeto é inteiramente Front-end e a interface de usuário foi construída para gerenciar categorias de produtos.

## 🚀 Tecnologias Utilizadas

  * **React**: Biblioteca JavaScript para a construção da interface do usuário.
  * **TypeScript**: Adiciona tipagem estática ao JavaScript, utilizada na definição de modelos de dados como `Categoria` e `Produto`.
  * **Tailwind CSS**: Framework utilitário de CSS que foi usado para a estilização do projeto.
  * **React Router DOM**: Gerencia a navegação e o roteamento da aplicação, com rotas definidas no `App.tsx`.
  * **Axios**: Cliente HTTP para a comunicação assíncrona com a API.

## ⚙️ Funcionalidades e Rotas

A interface do usuário é construída em torno de um sistema de navegação claro, permitindo as seguintes ações:

  * **Página Inicial (`/` ou `/home`)**: Exibe a página principal da farmácia.
  * **Lista de Categorias (`/listacategorias`)**: Exibe todos os cards de categorias, com seus respectivos nomes, descrições e botões de ação.
  * **Cadastro de Categorias (`/cadastrarcategorias`)**: Um formulário para criar novas categorias.
  * **Edição de Categorias (`/editarcategoria/:id`)**: Um formulário para editar uma categoria específica, acessível através do botão "Editar" em cada card.
  * **Exclusão de Categorias (`/deletarcategoria/:id`)**: Uma página de confirmação para remover uma categoria, acessível pelo botão "Deletar".

## 🛠️ Como Executar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Pré-requisitos**:
      * Node.js 18 ou superior
2.  **Instalação**:
      * Clone o repositório.
      * Navegue até o diretório do projeto.
      * Instale as dependências com o npm:
        ```bash
        npm install
        ```
3.  **Execução**:
      * Inicie a aplicação localmente:
        ```bash
        npm run dev
        ```

## 👩‍💻 Desenvolvedor

  * **Rafael Selles**
