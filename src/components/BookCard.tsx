import React from 'react';
import {BookCardProps} from "../interfaces/BookCardProps.ts";
import '../styles/BookCart.css'

const BookCard: React.FC<BookCardProps> = ({ title, author, image, onClick }) => {
    return (
        <div className="card book-card" style={{ width: '18rem', height: '35rem'}} onClick={onClick}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Autor: {author}</p>
            </div>
        </div>
    );
};

export default BookCard;
