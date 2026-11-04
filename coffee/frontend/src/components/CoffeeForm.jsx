
import { useState } from "react"

function CoffeeForm() {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[roast,setRoast]=useState("");
    const[price,setPrice]=useState("");

    const adatkuldes=(adatok)=>{
        fetch('http://localhost:3000/coffees',{
            method:'POST',
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
        adatkuldes({id,name,roast,price});
    }

  return (
    <div>
        <h1 className="text-2xl text-center font-bold">Új kávé rögzítése</h1>
        <form className="flex flex-col items-center justify-center" onSubmit={onSubmit}>
            <input type="text" required value={id} onChange={(e)=>setId(e.target.value)} placeholder="Id" className="input m-2" />
            <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="input m-2" />
            <input type="text" required value={roast} onChange={(e)=>setRoast(e.target.value)} placeholder="Roast" className="input m-2" />
            <input type="text" required value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Price" className="input m-2" />
            <button className="btn btn-primary">Küldés</button>
        </form>
    </div>
  )
}

export default CoffeeForm