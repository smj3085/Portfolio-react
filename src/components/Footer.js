import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";

function Footer() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer">
            <h3>Stephanie Lee 2021</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
                <li className="social-icons">
                <a
                  href="https://github.com/smj3085"
                  style={{ color: "black" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/stephanielee/"
                  style={{ color: "black" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
            </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Footer;