import myLogo from './assets/images/logos/narcisse-logo.svg'
import myLogoSmall from './assets/images/logos/narcisse-small-reverse.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary animate__animated animate__fadeInDown">
      <Container>
        <Navbar.Brand href="#home">
          <img src={myLogoSmall} className='d-inline-block align-top mobile animate__animated animate__fadeInDown' alt='ian logo'/>
        </Navbar.Brand>
        <p className='site-title'>Narcisse-Cousar</p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='animate__animated animate__fadeInDown'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#who" data-bs-dismiss="offcanvas">Who</Nav.Link>
            <Nav.Link href="#where">Where</Nav.Link>
            <Nav.Link href="#qualify">What</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BrandExample;