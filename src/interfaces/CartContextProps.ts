import {Book} from "./Book.ts";

export interface CartContextProps {
    cart: Book[];
    addToCart: (book: Book) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}