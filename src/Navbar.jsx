import myLogo from './assets/images/logos/narcisse-logo.svg'
import myLogoSmall from './assets/images/logos/narcisse-small.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={myLogo} className='d-inline-block align-top' alt='ian logo'/>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#who">Who</Nav.Link>
            <Nav.Link href="#link">What</Nav.Link>
            <Nav.Link href="#where">Where</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BrandExample;