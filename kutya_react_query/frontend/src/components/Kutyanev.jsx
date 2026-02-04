import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

import Modal from './Modal';
import Modal2 from './Modal2';

function Kutyanev({ kutyanev }) {

  const navigate=useNavigate();


  const[isDelete,setIsDelete]=useState(false);
  const[isModify,setIsModify]=useState(false);

  const openDelete=()=>{
    setIsDelete(true);
  }

  const closeDelete=()=>{
    setIsDelete(false);
  }

  const openModify=()=>{
    setIsModify(true);
  }

  const closeModify=()=>{
    setIsModify(false);
  }


  const modosit=()=>{
    navigate('/kutyanevform',{state:{kutyanev}})
  }

  const torol=()=>{
    
  }


  return (
    <div>
      
    <div className="card m-5 w-96 bg-lime-100 text-lime-800 card-md shadow-sm">
      {
        isModify && (<Modal2 title="Módosítás" body="Biztosan módosítja?" commitFunction={()=>modosit()} closeFunction={()=>closeModify()} />)
      }
      {
        isDelete && (<Modal2 title="Törlés" body="Biztosan törli?" commitFunction={()=>torol()} closeFunction={()=>closeDelete()} />)
      }
      
      <div className="card-body">
        <h2 className="card-title">{kutyanev.kutyanev}</h2>
        <p>
          Id:{kutyanev.Id}
        </p>
        <div className="justify-end card-actions">
          <button onClick={openModify} className="btn btn-primary">Módosítás</button>
          <button onClick={openDelete} className="btn btn-primary">Törlés</button>
        </div>
        <div className="justify-end card-actions">
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Kutyanev;
