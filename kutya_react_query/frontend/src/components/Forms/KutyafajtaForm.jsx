import { useContext,useState } from "react";
import KutyaContext from "../../context/KutyaContext";
import { useLocation,useNavigate } from "react-router-dom";

function KutyafajtaForm() {
  const {backendMuvelet}=useContext(KutyaContext);
    let cim="Új kutyafajta rögzítése";
    const navigate=useNavigate();
    const{state}=useLocation();
    let formObj={};
    let url=`${import.meta.env.VITE_BASE_URL}/kutyafajtak`;
    let method="POST";

    if(state!==null){
        const{kutyafajta}=state;
        cim="Kutyafajta módosítása";
        method="PUT";
        formObj={
            Id:kutyafajta.Id,
            nev:kutyafajta.nev,
            eredetinev:kutyafajta.eredetinev
        }
    } else {
        formObj={
            nev:"",
            eredetinev:""
        }
    }

    const[formData,setFormData]=useState(formObj);

    const writeData=(e)=>{
        setFormData((prevState)=>({...prevState,[e.target.id]:e.target.value}));
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        backendMuvelet(formData,method,url);
        navigate('/kutyafajtak');
    }

  return (
    <div>
         <h1 className="text-2xl text-center m-10">{cim}</h1>
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 justify-items-center">
                <input id="nev" type="text" required value={formData.nev} onChange={writeData} placeholder="kutya neve" className="my-5 input input-success" />
                <input id="eredetinev" type="text" required value={formData.eredetinev} onChange={writeData} placeholder="kutya neve" className="input input-success" />
                <button className="m-5 btn btn-success">Küldés</button>

            </div>
        </form>
    </div>
  )
}

export default KutyafajtaForm