import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../views/Home.tsx";
import BookDetails from "../views/BookDetails.tsx";
import Checkout from "../views/Checkout.tsx";
import Cart from "../components/Cart.tsx";
import Landing from "../views/Landing.tsx";
import Layout from "../components/Layaout.tsx";

const GlobalRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/book/:id" element={<BookDetails />}/>
                    <Route path="/checkout" element={<Checkout />}/>
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/" element={<Landing />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default GlobalRouter;
