import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
    {/* outlet ke use se use se hmara header aur footer same rahega lekin baki jo element hoga beech 
    ka wo change hoga  yeh nesting allow lr deta iska naam kuch bhi rakh skte hain 
    outlet nesting allow krta h yeh sb ham main.jsx me dekh skrte hain
    */}
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default Layout
