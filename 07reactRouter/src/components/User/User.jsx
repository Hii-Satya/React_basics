import React from 'react'
import { useParams } from 'react-router-dom'

function User  ()  {
    const {userid} =useParams()
  return (
    <div className='text-4xl bg-cyan-400 p-4  text-center '>
      User : {userid}
    </div>
  )
}

export default User
