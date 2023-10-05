import { createContext, useState, useReducer } from "react";
import { Reducer } from '../reducers/Reducer'


export const OdontoContext = createContext();

// eslint-disable-next-line react/prop-types
const OdontoContextProvider = ( {children}) => {
    
    const data = localStorage.getItem("darkmode");
    const [darkMode, setDarkMode] = useState(data ? JSON.parse(data) : true);

    const [state, dispatch] = useReducer(Reducer, {login: !!localStorage.getItem("token")})

    const login = () => {
      dispatch({type: 'SET_LOGIN'})
    }

    const logout = () => {
      dispatch({type: 'SET_LOGOUT'})
      localStorage.removeItem("token");
    }

    const changeMode = () => {
      localStorage.setItem("darkmode", !darkMode);
      setDarkMode(!darkMode);
    }

    return (
    <OdontoContext.Provider value={ {changeMode, darkMode, state, login, logout} }>
        { children }
    </OdontoContext.Provider>
  )
}

export default OdontoContextProvider;