import react, { useState } from 'react'
import { Modal, Button, Row, Col, Container } from 'react-bootstrap'

import './AboutModal.scss'

import ContactForm from '../ContactForm/ContactForm'
import AboutMe from '../AboutMe/AboutMe'

const AboutModal = (props) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className={props.className}
        onMouseEnter={props.enter}
        onMouseLeave={props.leave}
        onClick={handleShow}>
        {props.image}
      </Button>

      <Modal size='lg' centered show={show} onHide={handleClose} style={{}}>
      <Modal.Body >
      <Container scrollable className='justify-content-center' fluid>
          <Row className='justify-content-center'>
            <Col className='about-me-container'>
              <AboutMe />
            </Col>
            <Col className='contact-container'>
              <ContactForm
                handleClose={handleClose}
              />
            </Col>
          </Row>
        </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AboutModal
