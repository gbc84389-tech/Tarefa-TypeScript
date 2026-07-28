import { useEffect, useState } from "react"
import BookForm from "./components/BookForm"
import type { Book } from "./Types/Book"
import BookList from "./components/BookList"
import axios from "axios"

const API = 'https://crudcrud.com/api/1da5abbc1593427e96fd7e449f13accc/Livros'

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
