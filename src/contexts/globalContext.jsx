/* eslint-disable react/prop-types */
import { createContext, useState, useReducer } from "react";
import { loginReducer } from '../reducers/loginReducer'

export const OdontoContext = createContext();

const OdontoContextProvider = ( {children}) => {
    
    const data = localStorage.getItem("temaAtual");
    const [tema, setTema] = useState(data ? JSON.parse(data) : true);

    const [state, dispatch] = useReducer(loginReducer, {login: !!localStorage.getItem("token")})

    const login = () => {
      dispatch({type: 'SET_LOGIN'})
    }

    const logout = () => {
      dispatch({type: 'SET_LOGOUT'})
      localStorage.removeItem("token");
    }

    const mudarTema = () => {
      localStorage.setItem("temaAtual", !tema);
      setTema(!tema);
    }

    return (
    <OdontoContext.Provider value={ {mudarTema, tema, state, login, logout} }>
        { children }
    </OdontoContext.Provider>
  )
}

export default OdontoContextProvider;