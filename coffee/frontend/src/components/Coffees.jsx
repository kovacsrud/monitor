import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Coffees() {

  const navigate=useNavigate();
  const[coffees,setCoffees]=useState([]);


  const getCoffees=()=>{
    fetch('http://localhost:3000/coffees')
    .then(res=>res.json())
    .then(coffees=>setCoffees(coffees))
    .catch(err=>alert(err));
  }

  const modosit=(coffee)=>{
    navigate("/coffeeform",{state:{coffee}});
  }

  useEffect(()=>{
    getCoffees();
  },[])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Coffees</h1>
      {
        coffees.map((coffee)=>(<p key={coffee.id}>{coffee.name}<button onClick={()=>modosit(coffee)} className="btn btn-primary">Módosít</button></p>))
      }
    </div>
  )
}

export default Coffees