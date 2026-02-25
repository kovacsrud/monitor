'use client'
import { useState,useEffect } from "react";
export default function Cars2(){

    const[customers,setCustomers]=useState([]);

    const getCustomers=()=>{
        fetch('http://localhost:3000/api/customers')
        .then(res=>res.json())
        .then(customers=>setCustomers(customers))
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        getCustomers();
    },[])


    return (
         <div>
        <h1 className="text-center text-2xl text-red-700">Cars2</h1>
        <div>
            {
                customers.map((customer,i)=>(<p key={i}>{customer.first_name} {customer.last_name}</p>))
            }
        </div>
        </div>

    )
    

}