import { useState } from "react"
import type { Book } from "../Types/Book"

type Props = {
    aoEnviar: (book: Book) => void
}

const BookForm = ({ aoEnviar } : Props) => {
    const [titulo, setTitulo] =  useState('')
    const [autor, setAutor] =  useState('')
    const [status, setStatus] =  useState('')

    const enviar = (e: React.SubmitEvent) => {
        e.preventDefault()
        if(!titulo || !autor || !status) return

        aoEnviar({ title: titulo, author: autor, status: status })
        setTitulo('')
        setAutor('')
        setStatus('')
    }

    return (
        <form onSubmit={enviar}>
            <div>
                <h2>Registrar Livro</h2>
            </div>
            <div>
                <input type="text"
                    placeholder="Titulo do Livro"
                    value={titulo}      
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <input type="text"
                    placeholder="Autor do Livro"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
                <input type="text"
                    placeholder="Status do livro"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default BookForm