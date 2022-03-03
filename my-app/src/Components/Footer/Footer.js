import react from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Folder.scss'

import AboutModal from '../AboutModal/AboutModal'

const Footer = () => (
  <Container className='footer-container' fluid>
    <Row>
      <Col>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </Col>
      <Col>
        <AboutModal />
      </Col>
      <Col>
        <p>Footer</p>
        <p>Footer</p>
        <p>Footer</p>
      </Col>
    </Row>
  </Container>
)

export default Footer
