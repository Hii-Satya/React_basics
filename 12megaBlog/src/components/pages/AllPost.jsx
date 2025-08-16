import React, { useEffect, useState } from 'react'
import appwriteServices from "../../appWrite/config"
import Container from '../container/Container'
import PostCard from '../container/Container' //change
function AllPost() {
    const [posts,setPosts] =useState([])
    useEffect(()=>{},[])

    appwriteServices.getPosts([]).then((posts) =>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4' >
                <PostCard {...post}/>  
                {/* change */}
                  </div>
            ))}
        </Container>
      
    </div>
  )
}

export default AllPost
