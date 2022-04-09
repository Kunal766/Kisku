import React from 'react'

function buyerSignup() {
  return (
    <form className ="Loginbox" >
        <h1>Sign up</h1>
        <label for="buyername" className="Loginitems">Enter Your Full Nmae</label>
        <input type="text" id="buyername" className="Loginitems"/>
        <label for="buyermail" className="Loginitems">Enter Your Email</label>
        <input type="email" id="buyermail" className="Loginitems"/>
        <label for="byerpassword" className="Loginitems">Enter your password</label>
        <input type="password" id="buyerpassword"/>
        <label for="byerpassword2" className="Loginitems">Conform your password</label>
        <input type="password" id="buyerpassword2"/>
        <input type="submit" className="Loginitems"/>
        </form>
  )
}

export default buyerSignup