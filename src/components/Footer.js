import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-name">
            <h4>Developed by Stephanie Lee</h4>
          </Col>
        </Row>
      </Container>
    );
}
  
export default Footer;