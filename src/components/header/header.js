import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.css'

const Header = ()=>{

return(
 <>
 <Navbar className="nav-background" bg="#6CBE03" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home"><img className="" src="./images/logo 1.png" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Services</Nav.Link>
            <NavDropdown title="Shop" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Team</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <div className='header-right'>
          <div className='header-div'>
            <FontAwesomeIcon icon ={faSearch} color="white" />
          </div>
          <div className='header-sign'>
            <p className='header-signup'>sign in   <FontAwesomeIcon icon ={faUser}  color="white" /></p>
          </div>
          <div className='header-eng'>
            <p className='header-country'><img className='england' src='./images/flag 1.png' alt='Eng'/>Eng</p>
          </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
)

}
export default Header;