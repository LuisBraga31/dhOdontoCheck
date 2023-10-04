import DetailCard from "../../Components/DetailCard/DetailCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api"
import { useParams } from "react-router-dom";

const Detail = () => {

  const [dentista, setDentista] = useState([]);
  const dentistaEscolhido = useParams();
  
  const getDentistas = async() => {
    
    const res = await api.get(`/dentista?matricula=${dentistaEscolhido.id}`);
    setDentista(res.data);


  }

  useEffect(() => {

    getDentistas()

  }, []);


  return (
    <>
      <DetailCard dentista={dentista}/>
    </>
  )
}

export default Detail