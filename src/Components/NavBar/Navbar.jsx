import styles from "./Navbar.module.css";
import { OdontoContext } from "../../contexts/globalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { tema, mudarTema, state, logout } = useContext(OdontoContext);

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${tema ? `navbar-light bg-light` : `navbar-dark bg-dark`}`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home"> 
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
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className={`nav-item ${styles.navBarLink}`}>
                {state.login ? (
                    <button onClick={()=> logout()}
                    className={`btn ${tema ? `btn-light` : `btn-dark`}`}
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
                <button
                  className={`btn ${tema ? `btn-dark` : `btn-light`} ${styles.btnStyle}`}
                  onClick={() => mudarTema()}
                >
                   {tema ? "🌙" : "🌞"}
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
