/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Card from "../Card/Card";
import Swal from 'sweetalert2/src/sweetalert2.js'

const Home = () => {
  const [alActors, setAlActors] = useState([]);
    const [remining, setRemining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
  const [selectedActors, setSelectedActors] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAlActors(data));
  }, []);


  const handleSelectActor =(actor) =>{
    const isExist = selectedActors.find((item) =>item.id == actor.id);
    let count = actor.salary;
    if(isExist){
       return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Al Ready Select This Item!. Choice Another One.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }else{
        selectedActors.forEach((item)=>{
            count = count + item.salary;
        });
        const totalReaming = 500000 - count;
        
        
        if(count > 500000){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your Balance is Low!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
        else
        {
        setTotalCost(count)
        setRemining(totalReaming)
        setSelectedActors([...selectedActors, actor]);
        }
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
            <Card selectedActors={selectedActors} remining={remining} totalCost={totalCost}></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
