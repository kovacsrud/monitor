import {useQuery} from '@tanstack/react-query';

import Kutyanev from './Kutyanev';

function Kutyanevek() {

  const fetchKutyanevek=async()=>{
    const res=await fetch('http://localhost:8000/kutyanevek');
    if(!res.ok){
      throw new Error("Hiba a letöltéskor!")
    }

    return res.json();

  }

  const{
    data:kutyanevek,
    isLoading,
    error
  }=useQuery({
    queryKey:['kutyanevek'],
    queryFn:fetchKutyanevek
  });

  if(isLoading){
    <p>Loading...</p>
  }

  if(error){
    <p>{error.message}</p>
  }




  return (
    <div>
      <h1 className="text-3xl text-lime-800 text-center font-bold">Kutyanevek</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {
          kutyanevek?.map((kutyanev,i)=>(<Kutyanev key={i} kutyanev={kutyanev} />))
        }
      </div>
    </div>
  )
}

export default Kutyanevek