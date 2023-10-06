/* eslint-disable react/prop-types */
import styles from "./Footer.module.css";
import { OdontoContext } from "../../contexts/globalContext";
import { useContext } from "react";
import { PiArrowFatUpFill } from 'react-icons/pi';  

const Footer = ( {value} ) => {
  
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const { darkMode } = useContext(OdontoContext);

  return (
    <footer>  {/* na linha 18 foi apagado o texto voltar para o topo e incluido o icone do botao de scroll*/}
      
      <div className={styles.footerWrapper}>
        
        { value ? <button className={`btn btn-danger ${styles.top}`} onClick={scrollToTop}><PiArrowFatUpFill /></button> : <> </>}
        
        <div className={`${darkMode ? `navbar-light bg-light` : `navbar-dark bg-dark`} ${styles.footer}`}>
          <div className="container">
            <div className={`row`}>
              
              <div className="col-sm-12 col-lg-6">
                <img className={`${styles.dhLogo} ${darkMode ? `` : styles.iconsDark} `} src="/images/DH.png" alt='DH-logo' />
              </div>

              <div className={`col-sm-12 col-lg-6 ${styles.icons} ${darkMode ? `` : styles.iconsDark}`}>
                <img src="/images/ico-facebook.png" alt="ícone do facebook" className={styles.icon} />
                <img src="/images/ico-instagram.png" alt="ícone do instagram" className={styles.icon} />
                <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className={styles.icon} />
                <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className={styles.icon} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer