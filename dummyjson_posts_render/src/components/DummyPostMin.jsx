

function DummyPostMin({post,openclose}) {
  return (
   <div className="card bg-sky-300 w-96  shadow-sm m-2">
            
            <div className="card-body grow">
                <h2 className="card-title flex-grow">
                    {post.title}


                </h2>

                <button onClick={openclose} className="btn btn-primary">Részletek</button>
            </div>
        </div>
  )
}

export default DummyPostMin