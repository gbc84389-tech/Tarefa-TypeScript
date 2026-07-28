import { useEffect, useState } from "react"
import BookForm from "./components/BookForm"
import type { Book } from "./Types/Book"
import BookList from "./components/BookList"
import axios from "axios"

// CRIE UM ENDPOINT DE UMA API NO CRUDCRUD E COLE NO CONST API ABAIXO, SE NAO COLAR NAO FUNCIONA
const API = ''

const Mocked = {
  title: "Coraline",
  author: "Neil Gaiman",
  status: "Lido"
}

function App() {

  const [book, setBook] = useState<Book[]>([])

  const adicionar = (dados: Book) => {

    axios.post<Book>(API, dados)
    .then(resposta => setBook((prev) => [...prev, resposta.data]))
    .catch((erro) => {
      console.log(erro)
      console.log(erro.response)
    })
  }

  useEffect(() => {
      axios.post<Book>(API, Mocked)
      .then(resposta => setBook((prev) => [...prev, resposta.data]))
      .catch((erro) => {
        console.log(erro)
      })
  }, [])

  useEffect(() => {
    // fetch
    axios.get<Book[]>(API)
    .then(resposta => setBook(resposta.data))
    .catch((erro) => {
      console.log("Get:", erro)
    })
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API}/${id}`)

      setBook((prev) => prev.filter((book) => book._id !== id))
    }
    catch (erro) {
      console.log("Erro ao excluir",erro)
    }

  }

  return (
    <>
      <BookForm aoEnviar={adicionar}/>
      <BookList books={book} onDelete={handleDelete}/>
    </>
  )
}

export default App
