import React from 'react';
import { useParams } from 'react-router-dom';
import Cart from "../components/Cart.tsx";
import {useCart} from "../context/CartContex.tsx";
import '../styles/Cart.css'
import {booksData} from "../data/booksData.ts";

const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const book = booksData.find((b) => b.id === Number(id));

    const { addToCart } = useCart();

    if (!book) {
        return <p>Libro no encontrado</p>;
    }

    const handleAddToCart = () => {
        if (book) {
            addToCart({
                id: book.id,
                title: book.title,
                author: book.author,
                price: book.price,
                description: book.description,
                quantity: 1
            });
            alert('Libro añadido al carrito');
        }
    };



    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={book.image} alt={book.title} className="img-fluid rounded"/>
                </div>
                <div className="col-md-8 w-50">
                    <h1>{book.title}</h1>
                    <h4>Autor: {book.author}</h4>
                    <p>{book.description}</p>
                    <h5>Precio: COP${book.price.toFixed(2)}</h5>
                    <p>Existencias: {book.stock}</p>
                    <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
            <div className="position-fixed cart-container">
                <Cart/>
            </div>
        </div>
    );
};

export default BookDetails;
