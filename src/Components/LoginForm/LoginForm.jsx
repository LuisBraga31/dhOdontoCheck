import styles from "./Form.module.css";
import { OdontoContext } from "../../contexts/OdontoContext";
import { useContext } from "react";

const LoginForm = () => {
  const handleSubmit = (e) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  const { darkMode } = useContext(OdontoContext);

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
