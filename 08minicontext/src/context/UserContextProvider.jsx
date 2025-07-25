import React, { useState } from 'react'
import UserContext from './UserContex'

const UserContextProvider = ({children}) => {
    const [user ,setUser] =useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>  { /** here we pass the value which causes access to the context provider  */}
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
