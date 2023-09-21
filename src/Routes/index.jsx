import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Detail } from '../pages/Detail'

// 21-09 - Configuramos a pasta de rotas com as 3 paginas existentes na aplicacao.
// Foi utilizado o React router dom
export function RouteList() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login/>}/> 
          <Route path="dentist/:id" element={<Detail/>}/> 
        </Routes> 
      </BrowserRouter>
    
    </>
  )
}
