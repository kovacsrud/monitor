import { useState } from "react"
import { useLocation,useNavigate } from "react-router-dom";

function CoffeeForm2() {
    const navigate=useNavigate();
    const {state}=useLocation();

    let cim="Új kávé rögzítése";
    let formObj={};

    let url="http://localhost:3000/coffees";
    let method="POST"

    if(state!=null) {
           method="PUT";
           cim="Kávé módosítása";

            const {coffee}=state;

            formObj={
                "id": coffee.id,
                "name": coffee.name,
                "roast": coffee.roast,
                "price": coffee.price
            }

    } else {
            formObj={
                "id": "",
                "name": "",
                "roast": "",
                "price": 0
            }


    }

    const [formData,setFormData]=useState(formObj);

    const adatkuldes(adat)=>{

    }

    const onSubmit=()=>{

        
    }

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

  return (
    <div>CoffeeForm2</div>
  )
}

export default CoffeeForm2