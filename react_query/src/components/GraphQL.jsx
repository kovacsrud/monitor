import { useState,useEffect } from "react"

function GraphQL() {

    const [books,setBooks]=useState([]);

    const query=()=>{
        fetch('http://localhost:8000/graphql',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(
                {query:`
                    {
                        books{
                            name,
                            author {
                                id,name
                            }
                        }
                    }
                `
                })
        })
        .then(res=>res.json())
        .then(adat=>setBooks(adat.data.books))
        .catch(err=>alert(err));
    }

    useEffect(()=>{
        query();
    },[])



  return (
    <div>
        <h2 className="text-2xl text-center">GraphQL demó</h2>
        {
            books.map((book)=>(<p key={book.id}>{book.name} {book.author.name}</p>))
        }
        
    </div>
  )
}

export default GraphQL