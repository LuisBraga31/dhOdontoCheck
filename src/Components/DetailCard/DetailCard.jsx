/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "./DetailCard.module.css";
import { OdontoContext } from "../../contexts/OdontoContext";
import { useContext } from "react";

import ScheduleFormModal from "../Schedule/ScheduleFormModal";

const DetailCard = ( { dentista } ) => {

const { darkMode } = useContext(OdontoContext);  

  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
  }, []);

  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1> {dentista.nome} {dentista.sobrenome}</h1>
      <section className={`card col-sm-12 col-lg-6 container ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-2 border-secondary mb-2`}`}>
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row ${darkMode ? `card-light bg-light` : `card-dark bg-dark bg-opacity-75 `}`}
        >
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
                <strong> Usuário: </strong> {""}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
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
