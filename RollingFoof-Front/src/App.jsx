import React, { useContext } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "../src/pages/Home";

import Login from '../src/pages/Login';
import AdminPanel from '../src/pages/AdminPanel';
import NotFound from '../src/pages/NotFound';
import Products from "./pages/Products";
import AdminPanelV2 from "./pages/AdminPanelV2";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/cartContext";
import Register from "./pages/Register";




const App = () => {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />
      <div className="pt-2">
      <Routes>
        <Route path="/" element={<Home />} />
       
        
        <Route path="/login"element={<Login />} />
        {/**<Route path="/admin" element={<AdminPanel />} /> */}
        
        <Route path="/admin" element={<AdminPanelV2/>} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/Click" element={<Register />} />
        {/*  <Route path="/login" element={<LoginScreen />} /> */}

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
