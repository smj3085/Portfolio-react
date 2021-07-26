import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";


function NavBar() {
    const [expand, updateExpanded] = useState(false);

  
return (
    <Navbar bg="light" expand="md" sticky="top">
        <Container>
            <Navbar.Brand href="/">SLEE.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
            > 
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto" defaultActiveKey="#home">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}
                  >Home
                  </Nav.Link>
                </Nav.Item>
                
                <Nav.Item>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    onClick={() => updateExpanded(false)}>About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/projects"
                  onClick={() => updateExpanded(false)}
                >Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
      </Container>
  </Navbar>
);
}

export default NavBar;