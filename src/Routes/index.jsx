import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from "../pages/Detail/Detail";
import Contact from "../pages/Login/Login";
import Home from "../pages/Home/Home";

// 21-09 - Configuramos a pasta de rotas com as 3 paginas existentes na aplicacao.
// Foi utilizado o React router dom
export function RouteList() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Contact/>}/> 
          <Route path="/dentist/:id" element={<Detail/>}/> 
        </Routes> 
      </BrowserRouter>
    
    </>
  )
}
