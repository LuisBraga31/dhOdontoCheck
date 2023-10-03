import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { OdontoContext } from "../../contexts/OdontoContext";
import { useContext } from "react";

export function DefaultLayout() {
  
  const { darkMode } = useContext(OdontoContext);
  
  return (
    <>
    <div className={`app ${darkMode ? `light` : `dark` }`}>
      <Navbar/>
      <main>
        <Outlet/>  
      </main>
      <Footer value={true}/>
    </div>

    </>
  )
}
