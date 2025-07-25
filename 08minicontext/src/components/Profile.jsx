import React, { useContext } from 'react'
import UserContext from '../context/UserContex'

function Profile  () {
  const  {user } =useContext(UserContext)
  if(! user) return <div>Please Login</div>
  else return <div> {user.username} aagya bidu </div>
}

export default Profile
