import React, { useState } from 'react';
import BookCard from "../components/BookCard.tsx";
import Cart from "../components/Cart.tsx";
import {useNavigateToBook} from "../hooks/useNavigateToBook.ts";
import '../styles/Cart.css'
import Paginator from "../components/Paginator.tsx";
import {useBooks} from "../hooks/useBooks.ts";


const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const books = useBooks();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBooks = filteredBooks.slice(startIndex, startIndex + itemsPerPage);

    const navigateToBook = useNavigateToBook();
    const handleBookClick = (id: number) => {
        navigateToBook(id);
    };

    return (
        <div className="container mt-5">
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Buscar libros por título..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="row">
                {currentBooks.map((book) => ( // Cambiado filteredBooks por currentBooks
                    <div className="col-md-4 mb-4" key={book.id}>
                        <BookCard
                            title={book.title}
                            author={book.author}
                            image={book.image}
                            onClick={() => handleBookClick(book.id)}
                        />
                    </div>
                ))}
            </div>
            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            <div className="position-fixed cart-container">
                <Cart />
            </div>
        </div>
    );
};

export default Home;
