import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
  
    // function scrollHandler() {
    //   if (window.scrollY >= 20) {
    //     updateNavbar(true);
    //   } else {
    //     updateNavbar(false);
    //   }
    // }
  
    // window.addEventListener("scroll", scrollHandler);
  
return (
    <Navbar bg="light" expand="md" sticky="top">
        <Container>
            <Navbar.Brand href="#home">S.</Navbar.Brand>
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