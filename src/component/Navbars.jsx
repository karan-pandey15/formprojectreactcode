import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars(){
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className='fw-bolder fs-1 text-primary' >Karan.</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
            <Nav.Link className='mx-3' href="/" >Home</Nav.Link>
            <Nav.Link className='mx-3' href="/about">About</Nav.Link>
            <Nav.Link className='mx-3' href="/contact">Contact</Nav.Link>
            <Nav.Link className='mx-3' href="/login">Login</Nav.Link>
            <Nav.Link className='mx-3' href="/register">Register</Nav.Link>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




