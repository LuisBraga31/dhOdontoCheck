import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '../layouts/DefaultLayout'
import { AlternativeLayout } from '../layouts/AlternativeLayout'

import Detail from "../pages/Detail/Detail";
import Contact from "../pages/Login/Login";
import Home from "../pages/Home/Home";

import OdontoContextProvider from '../contexts/globalContext';

export function RouteList() {
  return (
    <>
      <BrowserRouter>
      <OdontoContextProvider>

        <Routes>

          <Route path="/" element={<DefaultLayout/>}>
            <Route path="/home" element={<Home />} /> 
          </Route>

          <Route path="/" element={<AlternativeLayout/>}>
            <Route path="/login" element={<Contact/>}/> 
            <Route path="/dentist/:id" element={<Detail/>}/>
          </Route> 

        </Routes>
        
      </OdontoContextProvider>   
      </BrowserRouter>
    
    </>
  )
}