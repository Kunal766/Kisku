import React from 'react'
import {Link} from "react-router-dom"
import './header.css'


function header() {
  return (
    <header>      
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