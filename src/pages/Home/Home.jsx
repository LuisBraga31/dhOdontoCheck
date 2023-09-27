import { useEffect, useState } from "react";
import { api } from "../../services/api"
import Card from "../../Components/Card/Card";

const Home = () => {

  const [dentista, setDentista] = useState([]);

  const getDentistas = async() => {
    
    const res = await api.get('/dentista');
    setDentista(res.data);
  }

  useEffect(() => {

    getDentistas()

  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        { dentista?.map( (dentista, index) => (
          <Card key={index} dentista={dentista} />
        ))}
        
      </div>
    </>
  );
};

export default Home;
