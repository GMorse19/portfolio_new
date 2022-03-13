import react from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import './Header.scss'

// import ContactForm from '../ContactForm/ContactForm'
// import AboutModal from '../AboutModal/AboutModal'

const Header = (props) => (
  <Navbar bg="dark" variant='dark' expand="lg" className='header-container'>
  <Container>
    <Navbar.Brand href="#home">geoff morse</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link onClick={props.handleShow}>Contact</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>

  </Container>
  </Navbar>
)

export default Header
