import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../contexts/Context';

const NavBar = () => {
  const total = 25000;
  const token = true;

  const {totalPrice} = useContext(Context)

  return ( 
    <>
      <Navbar className="bg-body-tertiary bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home" className='text-light'>¡Pizzería Mamma Mía!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto py-3 py-lg-1 w-100 d-flex gap-3" >
              <Link to='/' className='btn btn-outline-primary' href="#home">🍕 Home</Link>
              {token ? 
                <>
                  <Link to='/profile' className='btn btn-outline-primary' href="#features">🧔🏻‍♂️ Profile</Link>
                  <Link to='/logout' className='btn btn-outline-primary' href="#pricing">🚪 Logout</Link>
                </> : 
                <>
                  <Link to='/login' className='btn btn-outline-primary' href="#pricing">🔐 Login</Link>
                  <Link to='/register' className='btn btn-outline-primary' href="#pricing">🔐 Register</Link>
                </>
              }
              <Link to='/cart' className='btn btn-outline-info ms-lg-auto'  href="#pricing">🛒 Total: {totalPrice.toLocaleString('es-CL')}</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
   );
}

export default NavBar;