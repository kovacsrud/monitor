import { useState,useEffect } from "react"
import DummyPost from "./DummyPost";

function DummyPosts() {
    const[posts,setPosts]=useState([]);

    const letolt=()=>{
        fetch('https://dummyjson.com/posts')
        .then(res=>res.json())
        .then(posts=>setPosts(posts.posts))
        .catch(err=>alert(err))
    }
    useEffect(()=>{
        letolt();
    },[])

  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-sky-800">Posts</h1>
        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">*/}
        <div className="flex flex-wrap items-stretch justify-center p-4">
        {
            posts.map((post)=>(<DummyPost key={post.id} post={post}/>))
        }
        </div>
    </div>
  )
}

export default DummyPosts