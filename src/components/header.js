import React from 'react'
import {Link} from "react-router-dom"
import './header.css'
import logo from "../images/NitK.png"




function header() {
  return (
    <header> 
      <Link to="/"  >
      <img className="logo" src={logo} alt="logo" />   
      </Link>
      <div className="box TopRight">
        <Link to="/login">
      <button className="items">
          Login
          </button>
          </Link>
          <Link to="/signup">
      <button className="items">Sign Up</button>
          </Link>
      </div>
      
     </header>
  )
}

export default header