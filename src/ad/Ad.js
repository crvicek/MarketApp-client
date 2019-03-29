import React from 'react'

export default function Ad(props) {
  return (
    <div className='BigCard' >
      <div className='BigCardImg' style={{ backgroundImage: `url('${props.ad.image}')` }} >
      </div>

      <div className='BigCardInfo' >
        <img alt={props.ad.title} src={props.ad.image} />
        <h1>{props.ad.title}</h1>
        <h2>{props.ad.price}</h2>
        {/* <h2>{props.ad.title}</h2> */}
        <p>{props.ad.description}</p>
      </div>
    </div>
  )
}


