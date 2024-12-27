import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useRedirection } from "../hooks/useRedirection.ts";

const Header: React.FC = () => {
    const navigatePath = useRedirection();


    return (
        <header className="bg-dark text-white fixed-top">
            <div className="container d-flex justify-content-between align-items-center py-3">
                <h1 className="h4 m-0">Relatos de Papel</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" onClick={() => navigatePath('/home')}>Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white" title={'carrito'} href="#" onClick={() => navigatePath('/cart')}>
                                <FaShoppingCart/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
