import React from 'react'
import Header from "../header/Header"
import MiniHeader from '../mini-header/MiniHeader'
import Sidebar from '../sidebar/Sidebar'
import { Backtotop, Overlay } from "../../utils";
import Footer from "../footer/Footer"
import SubFooter from "../subFooter/SubFooter"
import { useState, useEffect } from "react";



const Layout = ({children}) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isNavbarSearchActive, setIsNavbarSearchActive] = useState(false);
  useEffect(() => {
    if(isSidebarActive || isNavbarSearchActive){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSidebarActive, isNavbarSearchActive])
  return (
    <>
      <Header setIsNavbarSearchActive={setIsNavbarSearchActive}/>
      <MiniHeader setIsSidebarActive={setIsSidebarActive}/>
      <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive}/>
      {isSidebarActive && <Overlay type="sidebar" state={isSidebarActive} callback={setIsSidebarActive}/>}
      {isNavbarSearchActive && <Overlay type="navbar" state={isNavbarSearchActive} callback={setIsNavbarSearchActive}/>}
      <main>{children}</main>
      <Backtotop/>
      <Footer/>
      <SubFooter/>
    </>
  )
}

export default Layout