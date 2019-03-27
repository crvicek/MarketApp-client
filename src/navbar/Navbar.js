import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap'

export default function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark"  >
      <Navbar.Brand href="/">Market App</Navbar.Brand>
      <Nav className="justify-content-end" >
        <Nav.Item>
          <Nav.Link href="/new">Sell</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={props.onClick} >Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}
