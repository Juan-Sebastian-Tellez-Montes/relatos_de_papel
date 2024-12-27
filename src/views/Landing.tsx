import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="container text-center mt-5">
            <h1>Bienvenido a Relatos de Papel</h1>
            <p>Explora nuestra colección de libros y disfruta de la lectura.</p>
            <p>Serás redirigido a la página principal en breve...</p>
        </div>
    );
};

export default Landing;
