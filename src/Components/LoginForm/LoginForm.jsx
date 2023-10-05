import styles from "./Form.module.css";
import { OdontoContext } from "../../contexts/OdontoContext";
import { useContext } from "react";
import { api } from '../../services/api'
import { useNavigate } from "react-router";

const LoginForm = () => {
  
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
        console.log(error);
      }

  };

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}

        
      <div
        className={`text-center card container ${styles.card} ${darkMode ? `card-light bg-light` : `card-dark bg-dark bg-opacity-75`}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing} ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-secondary`}`}
              placeholder="Login"
              name="login"
              required
            />
            <input
              className={`form-control ${styles.inputSpacing} ${darkMode ? `card-light bg-light` : `card-dark bg-secondary border-secondary`}`}
              placeholder="Password"
              name="password"
              type="password"
              required
            />
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
