import { useEffect, useState } from "react"
import BookForm from "./components/BookForm"
import type { Book } from "./Types/Book"
import BookList from "./components/BookList"
import axios from "axios"
import { Container } from './Styles/AppStyles'

// CRIE UM ENDPOINT DE UMA API NO CRUDCRUD E COLE NO CONST API ABAIXO, SE NAO COLAR NAO FUNCIONA
const API = 'https://crudcrud.com/api/1da5abbc1593427e96fd7e449f13accc/Livros'

const Mocked = [
  {
  title: "Livro 1",
  author: "Autor 1",
  status: "Lido"
  },
  
  {
  title: "Livro 2",
  author: "Autor 2",
  status: "Lido"
  },
  
  {
  title: "Livro 3",
  author: "Autor 3",
  status: "Não Lido"
  },
  
  {
  title: "Livro 4",
  author: "Autor 4",
  status: "Não Lido"
  }
]

function App() {

  const [book, setBook] = useState<Book[]>([])

  const adicionar = (dados: Book) => {
    axios.post<Book>(API, dados)
    .then(resposta => setBook((prev) => [...prev, resposta.data]))
    .catch((erro) => {
      console.log(erro)
    })
  }
// ADICIONA OS DADOS MOCKADOS
  useEffect(() => {
      setBook((prev) => [...prev, ...Mocked])
  }, [])

  useEffect(() => {
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
      <Container>
        <BookForm aoEnviar={adicionar}/>
        <BookList books={book} onDelete={handleDelete}/>
      </Container>
    </>
  )
}

export default App
