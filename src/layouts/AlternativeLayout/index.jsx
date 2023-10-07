import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { OdontoContext } from "../../contexts/globalContext";
import { useContext } from "react";

export function AlternativeLayout() {

  const { tema } = useContext(OdontoContext);

  return (
    <>
      <div className={`app ${tema ? `light` : `dark` }`}>
        <Navbar/>
        <main>
          <Outlet/>  
        </main>
        <Footer value={false}/>
      </div>
    </>
  )
}
