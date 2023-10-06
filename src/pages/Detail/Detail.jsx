import DetailCard from "../../Components/DetailCard/DetailCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api"
import { useParams } from "react-router-dom";

import Swal from "sweetalert2";

const Detail = () => {

  const [dentista, setDentista] = useState([]);
  const dentistaEscolhido = useParams();
  
  const estaLogado = !!localStorage.getItem("token");


  const getDentistas = async() => {
    const res = await api.get(`/dentista?matricula=${dentistaEscolhido.id}`);
    setDentista(res.data);
  }

  useEffect(() => {
    
    getDentistas()

  }, []);


  return (
    <>
      { estaLogado ? (
        <DetailCard dentista={dentista}/>
      ) : (
        Swal.fire({
          icon: 'error',
          title: 'Atenção:',
          text: "Faça login na aplicação para acessar essa página",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/';
          } else {
            window.location.href = '/';
          }
        })
      )

      }
      
    </>
  )
}

export default Detail