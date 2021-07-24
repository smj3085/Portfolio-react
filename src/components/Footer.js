import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithubSquare } from "react-icons/fa";

function Footer() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-name text-center">
            <h4>Developed by Stephanie Lee</h4>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
                <li className="footer-social-icons">
                <a
                  href="https://github.com/smj3085"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithubSquare />
                </a>
              </li>
              <li className="footer-social-icons">
                <a
                  href="https://www.linkedin.com/in/stephanie-lee-syd/"
                  style={{ color: "white" }}
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