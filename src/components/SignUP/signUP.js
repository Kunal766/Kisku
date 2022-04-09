import React from 'react'
import {Link} from "react-router-dom"

function signUP() {
  return (
    <div className="Loginbox">
    <h1 className="Loginitems">Please Select One</h1>
    <Link to="/signup/buyer">
    <button className="Loginitems">BUYER</button>
    </Link>
      <Link to="/signup/seller">
    <button className="Loginitems">SELLER</button>
    </Link>
    </div>
  )
}

export default signUP