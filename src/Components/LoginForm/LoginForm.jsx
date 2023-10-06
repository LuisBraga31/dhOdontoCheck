import styles from "./Form.module.css";
import { OdontoContext } from "../../contexts/globalContext";
import { useContext, useState } from "react";
import { api } from '../../services/api'
import { useNavigate } from "react-router";

const LoginForm = () => {
  
  const [errorForm, setErrorForm] = useState(false);
  const { darkMode, login } = useContext(OdontoContext);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);

      try {
        const response = await api.post('/auth' , {
          username: data.login,
          password: data.password,
        }, {
          headers: {
            'Content-Type' : 'application/json',
          },
        });

        if(response.status === 200) {
          localStorage.setItem('token', response.data.token);
          login();
          navigate('/');
        } 

      } catch (error) {
        setErrorForm(true);
        console.log(errorForm);
        console.log(error);
      }

  };

  return (
    <>  
      <div className={`text-center card container ${styles.card} ${darkMode ? `card-light bg-light` : `card-dark bg-dark bg-opacity-75`}`} >
        
        <div className={`card-body ${styles.CardBody}`}>
          
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing} ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-secondary`}
                      ${errorForm ? `${styles.errorInput}` : ''}
              `}
              placeholder="Login"
              name="login"
              required
            />
            
            <input
              className={`form-control ${styles.inputSpacing} ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-secondary`}
                      ${errorForm ? `${styles.errorInput}` : ''}
              `}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
            {errorForm ? (<small className={styles.error}> Verifique suas informações novamente </small>) : (<> </>)}
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
