import react from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './HomePage.scss'

const HomePage = () => {
  return(
      <Container className='justify-content-center' fluid>
        <Row>
            <Col lg={6}>
              <h1 id='profile-name'>Geoff Morse</h1>
              <p>Software Engineer</p>
            </Col>
        </Row>
        <Row>
          <Col md={{ span: 3, offset: 5}} id="letter-g"></Col>
        </Row>
      </Container>
  )
}

export default HomePage
