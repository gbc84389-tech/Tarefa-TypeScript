import type { Book } from "../Types/Book"   
import { ContainerLista } from "../Styles/ListaStyle";
import BookItem from "./BookItem";

type Props = {
    books: Book[];
    onDelete: (id: string) => void
}

const BookList = ({ books, onDelete }  : Props) => {
    if(books.length === 0)
        return <p>Nenhum livro cadastrado</p>
    return (
        <ContainerLista>
            {
                books.map(item => (<BookItem key={item._id} book={item} onDelete={onDelete}/>))
            }
        </ContainerLista>
    )
}

export default BookList