import react from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import './Header.scss'
import '../../helpers/styles.scss';

// import ContactForm from '../ContactForm/ContactForm'
// import AboutModal from '../AboutModal/AboutModal'

const Header = (props) => (
  <Navbar expand="lg" className='header-container'>
  <Container>
    <Navbar.Brand style={{ color: '#ECDBBA' }} href="#home">geoff morse</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{ color: '#ECDBBA' }} href="#home">Home</Nav.Link>
        <Nav.Link style={{ color: '#ECDBBA' }} onClick={props.handleShow}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Container>
  </Navbar>
)

export default Header
