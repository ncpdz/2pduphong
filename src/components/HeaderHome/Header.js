import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

import "./Header.css";

function Header() {
  return (
    <div className="bg-secondary header-container">
      <Navbar expand="lg" className="container">
        <Container fluid>
          <Navbar.Brand href="/">
            <p className="text-[36px] mb-0 mr-[100px]">2P-Fashion</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 gap-4"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <p className="text-[16px] m-0 font-bold a">Home</p>{" "}
              </Nav.Link>
              <Nav.Link href="/shop">
                <p className="text-[16px] m-0 font-bold a">Shop</p>{" "}
              </Nav.Link>
              <Nav.Link href="/about">
                <p className="text-[16px] m-0 font-bold a">About</p>{" "}
              </Nav.Link>
              <Nav.Link href="/contact">
                <p className="text-[16px] m-0 font-bold a">Contact Us</p>{" "}
              </Nav.Link>
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
            <Dropdown>
              <div className="d-flex items-center custom-dropdown-toggle">
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu className="custom-dropdown-menu">
                  <Dropdown.Item href="#/action-1">Log In</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                   Sign Up
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Profile
                  </Dropdown.Item>
                </Dropdown.Menu>
              </div>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
