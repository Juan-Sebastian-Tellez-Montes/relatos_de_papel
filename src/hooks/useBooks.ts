import { useState } from 'react';
import { Book } from '../interfaces/Book';
import {booksData} from "../data/booksData.ts";

const initialBooks: Book[] = booksData


export const useBooks = () => {
    const [books] = useState<Book[]>(initialBooks);

    return books;
};
