import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container text-center">
                <p className="mb-2">&copy; 2024 Relatos de Papel. Todos los derechos reservados.</p>
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contacto">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#terminos">Términos de Servicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#privacidad">Política de Privacidad</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
