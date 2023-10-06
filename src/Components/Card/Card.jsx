/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { OdontoContext } from "../../contexts/globalContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Card = ( {dentista} ) => {  

  const { darkMode } = useContext(OdontoContext);

  return (
    <>
      <div className={`card ${styles.card} ${darkMode ? `card-light bg-light` : `card-dark bg-dark`}`}>
       
        <img className="card-img-top" src="/images/doctor.jpg" alt="doctor placeholder"/>
        
        <div className={`card-body ${styles.CardBody}`}>
          <Link to={`/dentist/${dentista.matricula}`}>
            <h5 className={`card-title ${styles.title} ${darkMode ? 'text-dark' : 'text-light'}`}>{dentista.nome} {dentista.sobrenome}</h5>
          </Link>
        </div>

      </div>
    </>
  );
};

export default Card;
