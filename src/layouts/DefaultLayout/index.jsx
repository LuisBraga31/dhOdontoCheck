import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { OdontoContext } from "../../contexts/globalContext";
import { useContext, useEffect } from "react";

export function DefaultLayout() {
  
  const { tema } = useContext(OdontoContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });

  return (
    <>
    <div className={`app ${tema ? `light` : `dark` }`}>
      <Navbar/>
      <main>
        <Outlet/>  
      </main>
      <Footer value={true}/>
    </div>

    </>
  )
}
