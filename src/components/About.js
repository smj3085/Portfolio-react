import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageme from "../images/stephprofile.jpg";
 
function About() {
    return (
      <Container fluid className="about-section">
        <Container>

          <Row
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
            >
            <img src={ imageme }  alt="about-steph" className="about-img" />
            {/* Multiple images */}
          </Row>

          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ paddingBottom: "20px" }}>
                <strong className="pink">A little bit about me!</strong>
              </h1>
              <h2>Hi!! I'm <strong className="pink">Steph Lee. </strong></h2>
              <br />
              <p style={{ textAlign: "justify" }}>
              I am based in beautiful<strong className="pink"> Sydney, Australia.</strong>
              <br />My early working years were spent in the hustle and bustle of the aviation and financial services industries.<br />
              I have recently finished a Full Stack Bootcamp course with the University of Sydney.
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