import * as React from 'react'
import { Form, Button } from 'react-bootstrap'


export default function AdForm(props) {

  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Group controlId="title" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name='title' placeholder="Title" onChange={props.onChange} value={props.values.title} />
      </Form.Group>

      <Form.Group controlId="price" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name='price' placeholder="Price" onChange={props.onChange} value={props.values.price} />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" name='description' rows="3" onChange={props.onChange} value={props.values.description} />
      </Form.Group>

      <Form.Group controlId="image" >
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" name='image' placeholder="http://www.example.com/image.jpg" onChange={props.onChange} value={props.values.image} />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>

  )
}

