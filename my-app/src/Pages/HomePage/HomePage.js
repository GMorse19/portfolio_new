import react from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './HomePage.scss'

import RandomMove from '../../helpers/RandomMove0/RandomMove'
import StaticLinks from '../../Components/StaticLinks/StaticLinks'
import Ball from '../../Components/Ball/Ball'
import Spinner from '../../Components/Spinner/Spinner'

const HomePage = () => {
  return(
      <Container className='home-page-container justify-content-center' fluid>
      <StaticLinks />

        <Row>
            <Col lg={6}>
              <h1 id='profile-name'>Geoff Morse</h1>
            </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Spinner />
          </Col>

        </Row>
        <Row>
          <Col md={{ span: 3, offset: 5}} id="letter-g"></Col>
        </Row>
        <RandomMove />
      </Container>
  )
}

export default HomePage
