import react from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './HomePage.scss'

import RandomMove from '../../helpers/RandomMove/RandomMove'

const HomePage = () => {
  return(
      <Container className='home-page-container justify-content-center' fluid>
      <RandomMove />
        <Row>
            <Col lg={6}>
              <h1 id='profile-name'>Geoff Morse</h1>
            </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <p id='profile-title'>Software Engineer</p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 5}} id="letter-g"></Col>
        </Row>

      </Container>
  )
}

export default HomePage
