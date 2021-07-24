import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageme from "../images/stephprofile.jpg";
 
function About() {
    return (
      <Container fluid className="about-section" style={{ paddingTop: "80px", paddingBottom: "50px" }}>
        <Container>
          <Row>
            <Col>
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
                <strong className="about-header pink">A little bit about me!</strong>
              </h1>
              <h2>Hi!! I'm <strong className="pink">Steph Lee. </strong></h2>
              <br />
              <p style={{ textAlign: "justify" }}>
              I am based in beautiful<strong className="pink"> Sydney, Australia.</strong>
              <br />My early working years were spent in the hustle and bustle of the aviation and financial services industries.<br />
              I am currently studying a Full Stack Bootcamp course with the University of Sydney.
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