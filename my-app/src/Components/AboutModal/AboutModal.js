import react, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import './AboutModal.scss'

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
      <Modal.Header closeButton className='about-modal'>
              <Modal.Title>Contact</Modal.Title>
            </Modal.Header>
        <Modal.Body className='about-modal-body'>I'll use this area to say some great things about myself</Modal.Body>

      </Modal>
    </>
  )
}

export default AboutModal
