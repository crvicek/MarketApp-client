import React from 'react'

export default function Ad(props) {
  return (
    <div className='BigCard' >
      <img className='BigCardImg' src={props.ad.image} alt={props.ad.title} />

      <div className='BigCardInfo' >
        <h1>{props.ad.title}</h1>
        <h2>€ {props.ad.price}</h2>
        <p>{props.ad.description}</p>
      </div>
    </div>
  )
}


