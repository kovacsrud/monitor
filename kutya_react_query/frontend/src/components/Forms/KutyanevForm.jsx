
import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

function KutyanevForm() {

    const modosit=useMutation({
        mutationFn:async({data,method,url})=>{
            const res=await fetch(url,{
            method:method,
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        if(!res.ok){
            throw new Error("Hiba a post művelet során!");
        }
        return res.json();

        },
        onSuccess:()=>{
            navigate('/kutyanevek');
        }
    })

  

    let cim="Új kutyanév rögzítése";
    const navigate=useNavigate();
    const{state}=useLocation();
    let formObj={};
    let url=`${import.meta.env.VITE_BASE_URL}/kutyanevek`;
    let method="POST";

    if(state!==null){
        const{kutyanev}=state;
        cim="Kutyanév módosítása";
        method="PUT";
        formObj={
            Id:kutyanev.Id,
            kutyanev:kutyanev.kutyanev
        }
    } else {
        formObj={
            kutyanev:""
        }
    }

    const[formData,setFormData]=useState(formObj);

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        modosit.mutate({data:formData,method:method,url:url});
        
    }


  return (
    <div>
        <h1 className="text-2xl text-center m-10">{cim}</h1>
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 justify-items-center">
                <input id="kutyanev" type="text" required value={formData.kutyanev} onChange={writeData} placeholder="kutya neve" className="input input-success" />
                <button className="m-5 btn btn-success">Küldés</button>
                {modosit.isError && <p>{modosit.error.message}</p>}
                {modosit.isSuccess && <p>Sikeres mentés!</p>}

            </div>
        </form>
    </div>
  )
}

export default KutyanevForm