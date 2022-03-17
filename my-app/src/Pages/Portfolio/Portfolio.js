import react from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Portfolio.scss'

import ProjectList from '../../Components/ProjectList/ProjectList'

const Portfolio = (props) => (
  <Container className='portfolio-container justify-content-center'>
    <Row>
      <Col>
        <h1 className='portfolio-title'>Things <br /> I've worked on.</h1>
      </Col>
    </Row>
    <Row>
      <ProjectList />
      </Row>
  </Container>
)

export default Portfolio
