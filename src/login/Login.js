import React from 'react'
import { Button, Modal } from 'react-bootstrap'


export default function Login(props) {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.close} >Close</Button>
        <Button variant="primary" onClick={props.close} >Login</Button>
      </Modal.Footer>
    </Modal>
  )
}