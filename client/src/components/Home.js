import React from 'react'
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div className = "home-page">
      <div className = "home-div"></div>
      <p className = "pt-5">WELCOME</p>
      <h1>WE ARE THE MERN DEVELOPER</h1>
      <NavLink to = "/change/:token" >CHANGE PASSWORD</NavLink>
    </div>
    </>
  )
}

export default Home