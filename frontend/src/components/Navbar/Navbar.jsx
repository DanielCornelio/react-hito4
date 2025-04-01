import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  const total = 25000;
  const token = true;

  return ( 
    <>
      <Navbar className="bg-body-tertiary bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home" className='text-light'>¡Pizzería Mamma Mía!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto py-3 py-lg-1 w-100" >
              <Button className='me-lg-2 mb-2 mb-lg-0' variant="outline-secondary" href="#home">🍕 Home</Button>
              {token ? 
                <>
                  <Button className='me-lg-2 mb-2 mb-lg-0' variant="outline-secondary" href="#features">🧔🏻‍♂️ Profile</Button>
                  <Button className='me-lg-2 mb-2 mb-lg-0' variant="outline-secondary" href="#pricing">🚪 Logout</Button>
                </> : 
                <>
                  <Button className='me-lg-2 mb-2 mb-lg-0' variant="outline-secondary" href="#pricing">🔐 Login</Button>
                  <Button className='me-lg-5 mb-2 mb-lg-0' variant="outline-secondary" href="#pricing">🔐 Register</Button>
                </>
              }
              <Button variant="outline-info" className='ms-lg-auto'  href="#pricing">🛒 Total: ${total.toLocaleString('es-CL')}</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
   );
}
 
export default NavBar;