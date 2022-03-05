import react from 'react'
import { Col, Form, Button, Row } from 'react-bootstrap'

import './ContactForm.scss'

const ContactForm = (props) => {
  return (
    <Col className='contact-container'>
    <Row sm={12}>
      <Button className='close-button' onClick={props.handleClose}>X</Button>
    </Row>
    <br/ >
    <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Name" />
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} type="message" placeholder="Message" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    </Col>
  )
}

export default ContactForm
