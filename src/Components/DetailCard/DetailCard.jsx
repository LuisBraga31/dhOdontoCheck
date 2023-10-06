/* eslint-disable react/prop-types */
import styles from "./DetailCard.module.css";
import { OdontoContext } from "../../contexts/globalContext";
import { useContext } from "react";

import ScheduleFormModal from "../Schedule/ScheduleFormModal";

const DetailCard = ( { dentista } ) => {

  const { darkMode } = useContext(OdontoContext);  

  return (

    <>
      <h1> {dentista.nome} {dentista.sobrenome}</h1>
      <section className={`card col-sm-12 col-lg-6 container ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-2 border-secondary mb-2`}`}>

        <div className={`card-body row ${darkMode ? `card-light bg-light` : `card-dark bg-dark bg-opacity-75 `}`}>
          
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>

          <div className="col-sm-12 col-lg-6">
            
            <ul className="list-group">
              <li className={`list-group-item ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-black border-opacity-75 ${styles.colorLight}`} `}>
                <strong> Nome: </strong> {dentista.nome}</li>
              <li className={`list-group-item ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-black border-opacity-75 ${styles.colorLight}`} `}>
                <strong> Sobrenome: </strong> {dentista.sobrenome}
              </li>
              <li className={`list-group-item ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-black border-opacity-75 ${styles.colorLight}`} `}>
                <strong> Usuário: </strong> {dentista?.usuario?.username}
              </li>
            </ul>

            <div className="text-center">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn ${darkMode ? `btn-light` : `btn-dark`} ${styles.button}`}
              >
                Marcar consulta
              </button>
            </div>

          </div>
        </div>
      </section>

     { <ScheduleFormModal/> }

    </>
  );
};

export default DetailCard;
