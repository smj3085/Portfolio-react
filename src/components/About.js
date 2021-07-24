import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageme from "../images/stephprofile.jpg";
 
function About() {
    return (
      <Container fluid className="about-section" style={{ paddingTop: "80px", paddingBottom: "50px" }}>
        <Container>
          <Row>
            <Col md="4">
            <img src={ imageme }  alt="about-steph" className="about-img" />
            </Col>

            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "20px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ paddingBottom: "20px" }}>
                About <strong className="pink">Me</strong>
              </h1>
              <h2>Hi!! I'm <strong className="pink">Stephanie Lee. </strong></h2>
              <br />
              <p style={{ textAlign: "justify" }}>
              I am a full stack developer based in beautiful<strong className="pink"> Sydney, Australia.</strong>
              <br />My early working years were spent in the hustle and bustle of the aviation and financial services industries.<br />
              Currently, I'm studying a Full Stack Bootcamp course at the University of Sydney.
              <br />
              {/* Quote block */}
              <br />
              </p>
              </Col>
            
          </Row>
        </Container>
    </Container>
    );
}
  
  export default About;