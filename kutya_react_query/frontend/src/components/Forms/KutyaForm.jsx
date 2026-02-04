import { useContext, useState } from "react";
import KutyaContext from "../../context/KutyaContext";
import { useLocation, useNavigate } from "react-router-dom";

function KutyaForm() {
  const { backendMuvelet,kutyanevek,kutyafajtak } = useContext(KutyaContext);
  let cim = "Új rendelési adat rögzítése";
  const navigate = useNavigate();
  const { state } = useLocation();
  let formObj = {};
  let url = `${import.meta.env.VITE_BASE_URL}/kutyak`;
  let method = "POST";

  if (state !== null) {
    const { kutya } = state;
    cim = "Rendelési adat módosítása";
    method = "PUT";
    formObj = {
      Id: kutya.Id,
      fajtaid: kutya.fajtaid,
      nevid: kutya.nevid,
      eletkor: kutya.eletkor,
      utolsoell: kutya.utolsoell,
    };
  } else {
    formObj = {
      fajtaid: 1,
      nevid: 1,
      eletkor: "",
      utolsoell: "",
    };
  }

  const [formData, setFormData] = useState(formObj);

  const writeData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    backendMuvelet(formData, method, url);
    navigate("/kutyak");
  };

  return (
    <div>
      <h1 className="text-2xl text-center m-10">{cim}</h1>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 justify-items-center">
          <select id="nevid" onChange={writeData} value={formData.nevid}  className="my-5 select select-accent">
            {
              kutyanevek.map((kutyanev,i)=>(<option key={i} value={kutyanev.Id}>{kutyanev.kutyanev}</option>))
            }          
          </select>
          <select id="fajtaid" onChange={writeData} value={formData.fajtaid}  className="my-5 select select-accent">
            {
              kutyafajtak.map((kutyafajta,i)=>(<option key={i} value={kutyafajta.Id}>{kutyafajta.nev}</option>))
            }            
          </select>
          <input
            id="eletkor"
            type="text"
            required
            value={formData.eletkor}
            onChange={writeData}
            placeholder="kutya életkora"
            className="my-5 input input-success"
          />
          <input
            id="utolsoell"
            type="text"
            required
            value={formData.utolsoell}
            onChange={writeData}
            placeholder="utolsó ellenőrzés"
            className="my-5 input input-success"
          />
          <button className="m-5 btn btn-success">Küldés</button>
        </div>
      </form>
    </div>
  );
}

export default KutyaForm;
