import React from 'react'
import "./login.css"

function Login() {
  return (
    <>
    <form className="Loginbox">
      <h1>Login</h1>
      <label htmlFor="email" className="Loginitems">Enter your email:</label>
     <input type="email" id="email" className="Loginitems" />
      <label htmlFor="password" className="Loginitems">Enter You Password:</label>
      <input type="password" id="password" className="Loginitems"/>
      <input type="submit"></input>
    </form>
    </>
  )
}

export default Login