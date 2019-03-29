import React from 'react'

export default function Ad(props) {
  return (
    <div className='BigCard' >
        <img className='SmallCardImg' src={props.ad.image} alt={props.ad.title} />

      <div className='BigCardInfo' >
        <img alt={props.ad.title} src={props.ad.image} />
        <h1>{props.ad.title}</h1>
        <h2>€ {props.ad.price}</h2>
        {/* <h2>{props.ad.title}</h2> */}
        <p>{props.ad.description}</p>
      </div>
    </div>
  )
}


