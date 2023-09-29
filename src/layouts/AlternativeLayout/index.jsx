import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'

export function AlternativeLayout() {
  return (
    <>
       <Navbar/>
       <Outlet/>  
       <Footer value={false}/>
    </>
  )
}
