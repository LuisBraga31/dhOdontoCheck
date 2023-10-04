/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import { api } from "../../services/api"
import { OdontoContext } from "../../contexts/OdontoContext";

const ScheduleForm = () => {

  const [dentista, setDentista] = useState([]);
  const [paciente, setPaciente] = useState([]);
  const { darkMode } = useContext(OdontoContext); 




  /*Pegar dados do paciente*/ 
  const getPacientes = async() => {
    
    const res = await api.get('/paciente');
    setPaciente(res.data.body);
    console.log(paciente);

  }

  

  useEffect(() => {

    getPacientes()

    
  }, []);


  /*Pegar dados Dentista*/
  const getDentistas = async() => {
    
    const res = await api.get('/dentista');
    setDentista(res.data);
  }

  useEffect(() => {

    getDentistas()

  }, []);  

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>

            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}

                { dentista?.map( (dentista, index) => (
                  <option key={dentista.matricula} value={dentista}>
                     {dentista.nome} {dentista.sobrenome}
                  </option>
                 ))}
              </select>              
            </div>

            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select className="form-select" name="patient" id="patient">
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                { paciente?.map((paciente, index) => (                         
                  <option key={paciente.matricula} value={paciente}>
                     {paciente.nome}  {paciente.sobrenome}
                 </option>
                 ))}
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn ${darkMode ? `btn-light` : `btn-dark`} ${styles.button
                }`}
              type="submit"
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
