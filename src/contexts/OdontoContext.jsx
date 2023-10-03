import { createContext, useState } from "react";


export const OdontoContext = createContext();

// eslint-disable-next-line react/prop-types
const OdontoContextProvider = ( {children}) => {
    
    const data = localStorage.getItem("darkmode");
    const [darkMode, setDarkMode] = useState(data ? JSON.parse(data) : true);
  
    const changeMode = () => {
      localStorage.setItem("darkmode", !darkMode);
      setDarkMode(!darkMode);
    }

    return (
    <OdontoContext.Provider value={ {changeMode, darkMode} }>
        { children }
    </OdontoContext.Provider>
  )
}

export default OdontoContextProvider;