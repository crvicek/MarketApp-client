import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'


export default function Login(props) {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' placeholder="name@example.com" onChange={props.onChange} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" onChange={props.onChange} />
          </Form.Group>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.close} >Close</Button>
        <Button variant="primary" onClick={props.onSubmit}>Login</Button>
      </Modal.Footer>

    </Modal>
  )
}