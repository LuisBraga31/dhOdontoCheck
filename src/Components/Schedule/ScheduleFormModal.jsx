import ScheduleForm from './ScheduleForm';
import { OdontoContext } from "../../contexts/odontoContext";
import { useContext } from 'react';
import styles from './ScheduleFormModal.module.css';

const ScheduleFormModal = () => {

  const { darkMode } = useContext(OdontoContext);

  
  return (
    <div 
    className={`modal fade`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      
      <div className="modal-dialog">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto closeButtonDark */}
        <div className={`modal-content`}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Selecione o dentista, paciente e a data e hora</h1>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
            // está em dark mode e deverá utilizado o css correto */}
            <button type="button" className={`btn-close ${darkMode ? `` : styles.closeButtonDark }`} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div >

  );
};

export default ScheduleFormModal;
