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
            console.log(state);

             url=`http://localhost:3000/coffees/${coffee.id}`;


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


    const adatkuldes=(adatok)=>{
         fetch(url,{
            method:method,
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(adatok)
        })
        .then(res=>res.text())
        .then(adat=>alert(adat))
        .catch(err=>alert(err));
    }

    const onSubmit=(e)=>{

         e.preventDefault();
        adatkuldes(formData);
    }

    
    const writeData=(e)=>{
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    }

    

  return (
         <div>
        <h1 className="text-2xl text-center font-bold">{cim}</h1>
        <form className="flex flex-col items-center justify-center" onSubmit={onSubmit}>
            <input type="text" id="id" required value={formData.id} onChange={writeData} placeholder="Id" className="input m-2" />
            <input type="text" id="name" required value={formData.name} onChange={writeData} placeholder="Name" className="input m-2" />
            <input type="text" id="roast" required value={formData.roast} onChange={writeData} placeholder="Roast" className="input m-2" />
            <input type="text" id="price" required value={formData.price} onChange={writeData} placeholder="Price" className="input m-2" />
            <button className="btn btn-primary">Küldés</button>
        </form>
    </div>

  )
}

export default CoffeeForm2