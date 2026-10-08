import { useState,useEffect } from "react"
import DummyPostMin from "./DummyPostMin";
import DummyPost from "./DummyPost";

function DummyPostRender({post}) {
    const[isOpen,setIsOpen]=useState(false);

    const openclose=()=>{
        setIsOpen(prev=>!prev);
    }

  return (
    <div>
        {
            isOpen ? <DummyPost post={post} openclose={openclose} /> : <DummyPostMin post={post} openclose={openclose} />
        }
    </div>
  )
}

export default DummyPostRender