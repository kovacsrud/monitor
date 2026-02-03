import { useQuery } from "@tanstack/react-query";


function Posts() {

    const fetchPosts=async ()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts')

        if(!res.ok){
            throw new Error("Hiba a letöltés során!");
        }

        return res.json();

    }
    const {
        data:posts,
        isLoading,
        error
    }=useQuery({
        queryKey:['posts'],
        queryFn:fetchPosts,
        staleTime:5*60*1000, //érvényesség
        refetchOnWindowFocus:false //tab váltáskor nem frissít
    });

      if (isLoading) {
             return <p className="text-center">Betöltés...</p>;
      }

      if (error) {
        return <p className="text-center text-red-500">{error.message}</p>;
      }

  return (
    <div>
        
         <h1 className="text-3xl font-bold text-center">Posts</h1>
         {
            posts.map((post,i)=>(<p key={i}>{post.title}</p>))
         }
    </div>
  )
}

export default Posts