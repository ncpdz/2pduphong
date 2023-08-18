import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div className='bg-secondary'>
    <Navbar expand="lg" className="container">
      <Container fluid>
        <Navbar.Brand  href="/"><p className='text-[36px] mb-0 mr-[100px]'>2P-Fashion</p></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><p className='text-[16px] m-0 font-bold a'>Home</p> </Nav.Link>
            <Nav.Link href="/about"><p className='text-[16px] m-0 font-bold a'>About</p> </Nav.Link>
            <Nav.Link href="/contact"><p className='text-[16px] m-0 font-bold a'>Contact Us</p> </Nav.Link>
            <Nav.Link href=""><p className='text-[16px] m-0 font-bold a'>MEN</p> </Nav.Link>
            <Nav.Link href=""><p className='text-[16px] m-0 font-bold a'>WOMEN</p> </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;