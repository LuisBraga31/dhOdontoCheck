/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import styles from "./ScheduleForm.module.css";
import { api } from "../../services/api"
import { OdontoContext } from "../../contexts/globalContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ScheduleForm = () => {

  const [dentista, setDentista] = useState([]);
  const [paciente, setPaciente] = useState([]);
  const { darkMode } = useContext(OdontoContext); 
  const token = localStorage.getItem("token");
  
  const navigate = useNavigate();

  const getPacientes = async() => {
    
    const res = await api.get('/paciente');
    setPaciente(res.data.body);
    console.log(paciente);

  }

  const getDentistas = async() => {
    
    const res = await api.get('/dentista');
    setDentista(res.data);
    console.log(res.data);
  }

  useEffect(() => {

    getPacientes()
    getDentistas()
  
  }, []);

  const handleSubmit = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await api.post('/consulta' , {
        dentista: {matricula: data.dentist},
        paciente: {matricula: data.patient},
        dataHoraAgendamento: data.appointmentDate,
      }, {
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if(response.status === 200) {
        console.log(response.data);
        //navigate('/');

        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Consulta cadastrada',
        })
      } 

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Atenção:',
        text: 'Dados inválidos',
      })
    }

  };

  return (
    <>

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
              <select className={`form-select`} name="dentist" id="dentist">
                { dentista?.map( (dentista, index) => (
                  <option key={dentista.matricula} value={dentista.matricula}>
                     {dentista.nome} {dentista.sobrenome}
                  </option>
                 ))}
              </select>              
            </div>

            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select className={`form-select`} name="patient" id="patient">
                { paciente?.map((paciente, index) => (                         
                  <option key={paciente.matricula} value={paciente.matricula} >
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
                className={`form-select`}
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>

            <button
              className={`btn ${darkMode ? `btn-light` : `btn-dark`} ${styles.button}` } 
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
