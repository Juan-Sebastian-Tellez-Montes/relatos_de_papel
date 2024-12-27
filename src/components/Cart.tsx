import React from 'react';
import { useCart } from "../context/CartContex.tsx";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const navigate = useNavigate();

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert('Tu carrito está vacío. Agrega libros antes de continuar.');
            return;
        }
        navigate('/checkout');
    };

    return (
        <div className="container mt-3">
            <h4>Carrito de Compras</h4>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <ul className="list-group mb-3">
                        {cart.map((item) => (
                            <li key={item.id}
                                className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h6>{item.title}</h6>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: ${item.price.toFixed(2)}</p>
                                </div>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-secondary" onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-success" onClick={handleCheckout}>
                            Comprar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
