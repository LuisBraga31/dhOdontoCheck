/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { OdontoContext } from "../../contexts/OdontoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Card = ( {dentista} ) => {
  
  const { darkMode } = useContext(OdontoContext);

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${darkMode ? `card-light bg-light` : `card-dark bg-dark`}`}>
       
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to={`/dentist/MatriculaDoDentista`}>
            <h5 className={`card-title ${styles.title} ${darkMode ? 'text-dark' : 'text-light'}`}>{dentista.nome} {dentista.sobrenome}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
