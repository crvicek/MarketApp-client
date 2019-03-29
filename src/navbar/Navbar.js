import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div className='NavBar' >
        <h1 className='NavBar Title'>
      <Link to='/' >
        Market App
      </Link>
        </h1>
      <span className='NavBar Menu' >
        <Link to='/new' >Sell</Link>
        <Link to='' onClick={props.onClick} >Login</Link>
      </span>
    </div>
  )
}
