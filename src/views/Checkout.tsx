import React from 'react';
import { useCart } from "../context/CartContex.tsx";
import { useRedirection } from "../hooks/useRedirection.ts";

const Checkout: React.FC = () => {
    const { cart, clearCart } = useCart();
    const navigatePath = useRedirection();
    const handleGoToHome = () => {navigatePath('/home')};
    const total = cart.reduce((acc, book) => acc + book.price * book.quantity, 0);

    const handleConfirmPurchase = () => {
        if (cart.length === 0) {
            alert('Tu carrito está vacío. Agrega libros antes de continuar.');
            return;
        }

        alert('¡Gracias por tu compra! Tu pedido se ha realizado con éxito.');
        clearCart();
        handleGoToHome();
    };

    return (
        <div className="container mt-4">
            <h2>Resumen de tu pedido</h2>
            {cart.length > 0 ? (
                <div>
                    <table className="table">
                        <thead>
                        <tr>
                            <th className="text-start">Libro</th>
                            <th className="text-center">Cantidad</th>
                            <th className="text-end">Precio</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cart.map((book) => (
                            <tr key={book.id}>
                                <td className="text-start">{book.title}</td>
                                <td className="text-center">{book.quantity}</td>
                                <td className="text-end">${(book.price * book.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Total:</h4>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success" onClick={handleConfirmPurchase}>
                            Confirmar compra
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-muted">Tu carrito está vacío.</p>
            )}
        </div>
    );
};

export default Checkout;
