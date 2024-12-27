import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CartProvider} from "./context/CartContex.tsx";
import GlobalRouter from "./routes/GlobalRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <GlobalRouter />
        </CartProvider>
    </React.StrictMode>
);
