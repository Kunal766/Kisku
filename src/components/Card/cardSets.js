import React from 'react'
import Card from "./card"
import "./cardSets.css"
import Ferari from "../../images/Cars/ferari.jpg"
import Marsidis from "../../images/Cars/murcidis.jpg"
import Lambor from "../../images/Cars/lamborgin.jpg"
import Phato from "../../images/Cars/phantom.jpg"

function cardSets() {
  return (
      <div className="Cardsetsbox">
      <Card imageurl={Lambor}/>
      <Card imageurl={Ferari}/>
      <Card imageurl={Marsidis}/>
      <Card imageurl={Phato}/>
      </div>
  )
}

export default cardSets