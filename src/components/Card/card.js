import React from 'react'

function Card(props) {
  return (
<div className="card Cardsetsboxitems" style={{width: "18rem"}}>
  <img src={props.imageurl} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
  )
}

export default Card