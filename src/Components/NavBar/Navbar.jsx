import styles from "./Navbar.module.css";
import { OdontoContext } from "../../contexts/OdontoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { darkMode, changeMode, state, logout } = useContext(OdontoContext);

  return (
    <header className="sticky-top">
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar navbar-dark bg-dark ou navbar-light bg-light*/}
      <nav
        className={`navbar navbar-expand-sm ${darkMode ? `navbar-light bg-light` : `navbar-dark bg-dark`}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          {/* Ao clicar, o usuário deve ser redirecionado a home, com react-router */}
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/"> {/* estava /home, por isso não funcionou */}
            DH Odonto
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className={`nav-item ${styles.navBarLink}`}>
                {state.login ? (
                    <button onClick={()=> logout()}
                    className={`btn ${darkMode ? `btn-light` : `btn-dark`}`}
                    >
                      Logout
                    </button>

                  ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                  )
                }

              </li>

              <li className={`nav-item`}>
                {/*
                 Na linha seguinte deverá ser feito um teste se a aplicação
                 está em dark mode e deverá utilizar o icone ☀ ou 🌙 e btn-dark ou btn-light*/}
                <button
                  className={`btn ${darkMode ? `btn-dark` : `btn-light`} ${styles.btnStyle}`}
                  onClick={() => changeMode()}
                >
                   {darkMode ? "🌙" : "🌞"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
