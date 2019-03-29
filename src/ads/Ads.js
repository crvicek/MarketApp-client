import { Link } from 'react-router-dom'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function Ads(props) {

  const displayAds = (ad) => {
    return (
      <li key={ad.id} className='Small Card' >
        <img className='SmallCardImg' src={ad.image} alt={ad.title} />

        <Link to={`/ads/${ad.id}`}>
          <h1>{ad.title}</h1>
        </Link>
        <h1>€ {ad.price}</h1>

      </li>
    )
  }

  return (
    <ul className='AdsContainer' >
      {props.ads.map(ad => displayAds(ad))}
    </ul>
  )
}


