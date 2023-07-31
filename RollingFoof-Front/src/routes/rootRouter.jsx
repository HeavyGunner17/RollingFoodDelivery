import React, { useContext } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";


import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';
import Register from "../pages/Register";


const RootRouter = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       

        <Route path="/login" component={<Login />} />
        <Route path="/admin" component={<AdminPanel />} />
        <Route exact path="/404"  component={<NotFound />} />
        {/*  <Route path="/login" element={<LoginScreen />} /> */}

        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
