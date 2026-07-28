import type { Book } from "../Types/Book"

type props = {
    book: Book
    onDelete: (id: string) => void
}

export default function BookItem({ book, onDelete } : props) {
    return (
        <div>
            <div>
                <strong>{book.title}</strong>
            </div>
            <p>{book.author}</p>
            <small>{book.status}</small>
            <button onClick={() => onDelete(book._id!)}>DELETE</button>
        </div>
    )
}