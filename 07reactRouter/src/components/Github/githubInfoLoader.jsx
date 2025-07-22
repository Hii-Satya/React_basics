import React from 'react'
export const githubInfoLoader =async ()=>{
  const response =await fetch("http://api.github.com/users/Hii-Satya")
  return response.json()
} 

