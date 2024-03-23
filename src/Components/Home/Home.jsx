/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Card from "../Card/Card";
const Home = () => {
  const [alActors, setAlActors] = useState([]);

  const [selectedActors, setSelectedActors] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAlActors(data));
  }, []);


  const handleSelectActor =(actor) =>{
    const isExist = selectedActors.find((item) =>item.id == actor.id);
    if(isExist){
       return alert('already book');
    }else{
        setSelectedActors([...selectedActors, actor]);
    }
    
  };
  

  return (
    <div>
      <div className="container">
        <div className="home-container">
          <div className="card-container">
            {alActors.map((actor) => (
              <div key={actor.id} className="card">
                <div className="card-img">
                  <img
                    className="photo"
                    src={actor.image}
                    alt=""
                  />
                </div>
                <h2>{actor.name}</h2>
                <p>
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, non.
                  </small>
                </p>
                <div className="info">
                  <p>salary: ${actor.salary}</p>
                  <p>{actor.role} </p>
                </div>
                <button 
                onClick={()=>handleSelectActor(actor)}
                className="card-btn">Select</button>
              </div>
            ))}
          </div>
          <div className="header">
            <Card selectedActors={selectedActors}></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
