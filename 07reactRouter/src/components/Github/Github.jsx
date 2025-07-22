// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github ()  {
   const data= useLoaderData()
    // const url="http://api.github.com/users/Hii-Satya"
    // const [ data,setdata] =useState([])
    
    // useEffect(()=> { 
    // fetch(url)
    // .then(response=>response.json())
    // .then(data=>{
    //   console.log(data);
    //   setdata(data);
    // })

    // },[])
  return (
    
    <div className='text-3xl text-center px-2 '>
      
      User Name : {data.login}
      <img src={data.avatar_url} alt='git Image'/>
      Github Followers :{data.followers}
    </div>
  )
}

export default Github