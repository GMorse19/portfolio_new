import react from 'react'
import { Col, Form, Button, Row } from 'react-bootstrap'

import './ContactForm.scss'

const ContactForm = (props) => {

  return (
    <Col className='contact-container'>
    <Row lg={12}>
    <Col>
      <Button className='close-button' onClick={props.handleClose}>X</Button>
      </Col>
      </Row>
      <Row>
    <Form>
    <br />
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control className='form-field' type="name" placeholder="Name" />
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='form-field' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">

        <Form.Label>Message</Form.Label>

        <Form.Control className='form-field' as="textarea" rows={3} type="message" placeholder="Message" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </Row>
    </Col>
  )
}

export default ContactForm
