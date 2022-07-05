import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand >Verduleria Online</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">   
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink to='/'><Button variant="outline-success" style={{margin: '10px'}}>Inicio</Button>{' '}</NavLink>
                <NavLink to="/category/frutas"><Button variant="outline-primary" style={{margin: '10px'}}>Frutas</Button></NavLink>{' '}
                <NavLink to="/category/verduras"><Button variant="outline-primary" style={{margin: '10px'}}>Verduras</Button></NavLink>{' '}
              </Nav>
              <NavLink to='/cart'>
                  <CartWidget/>
              </NavLink>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar
