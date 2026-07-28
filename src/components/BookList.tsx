import type { Book } from "../Types/Book"
import ItemReclamacao from "./BookItem";

type Props = {
    books: Book[];
    onDelete: (id: string) => void
}

const BookList = ({ books, onDelete }  : Props) => {
    if(books.length === 0)
        return <p>Nenhum livro cadastrado</p>
    return (
        <div>
            {
                books.map(item => (<ItemReclamacao key={item._id} book={item} onDelete={onDelete}/>))
            }
        </div>
    )
}

export default BookList