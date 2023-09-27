import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./index.css";
import { RouteList } from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <Navbar/>
    <RouteList/>
    <Footer />
  </React.StrictMode>
);
