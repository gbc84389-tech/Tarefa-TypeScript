# 📚 Gerenciador de Livros

Aplicação desenvolvida em **React + TypeScript** com o objetivo de praticar o consumo de APIs REST utilizando **Axios**, além da criação de componentes reutilizáveis e tipagem estática com TypeScript.

A aplicação permite cadastrar, visualizar e excluir livros por meio da API do **CrudCrud**, simulando um pequeno sistema de gerenciamento de livros.

## 🚀 Tecnologias utilizadas

* React
* TypeScript
* Axios
* Vite
* HTML5
* CSS3

## ✨ Funcionalidades

* Cadastro de livros
* Listagem dos livros cadastrados
* Exclusão de livros
* Consumo de API REST
* Atualização dinâmica da interface sem necessidade de recarregar a página
* Tipagem de componentes, estados e propriedades utilizando TypeScript

## 📂 Estrutura do projeto

```text
src
├── components
│   ├── BookForm.tsx
│   ├── BookItem.tsx
│   └── BookList.tsx
├── Types
│   └── Book.ts
├── App.tsx
```

## 📖 Como funciona

Ao iniciar a aplicação, é realizada uma requisição **GET** para buscar todos os livros cadastrados na API.

O formulário permite cadastrar novos livros informando:

* Título
* Autor
* Status

Após o envio, uma requisição **POST** é realizada e o novo livro é adicionado imediatamente à lista exibida na tela.

Cada livro possui um botão **DELETE**, responsável por remover o registro tanto da API quanto da interface da aplicação.

## 🛠️ Como executar o projeto

Clone o repositório:

```bash
git clone <https://github.com/gbc84389-tech/Tarefa-TypeScript>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

## 🎯 Objetivos do projeto

Este projeto foi desenvolvido para praticar conceitos importantes do ecossistema React, como:

* Componentização
* Comunicação entre componentes via props
* Gerenciamento de estado com Hooks
* Tipagem utilizando TypeScript
* Consumo de APIs REST com Axios
* Manipulação assíncrona de dados
* Organização de projetos React

## 📌 Melhorias futuras

* Implementar edição de livros (Update)
* Adicionar confirmação antes da exclusão
* Melhorar a interface utilizando Styled Components
* Criar filtros por status
* Implementar notificações de sucesso e erro
* Adicionar validações mais completas no formulário

## 👨‍💻 Autor

Desenvolvido por **Gustavo Borges Camargos** como parte dos estudos em React e TypeScript.
