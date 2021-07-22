import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngellist } from "react-icons/fa";
import imageme from "../images/stephprofile.jpg";
 
function About() {
    return (
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="pink">Get to know me!</strong>
              </h1>
              <br />
              <p style={{ textAlign: "justify" }}>
            Hi!! I'm <span className="pink">Steph Lee </span>
            and I live in <span className="pink"> Sydney, Australia.</span>
            <br />My early working years were spent in the hustle and bustle of the aviation and financial services industries.<br />
            After a short break away from the working world I'm excited to embark upon a new career in programming.<br />
            Currently, I am studying a Full-stack Bootcamp course at the University of Sydney which is scheduled to finish in August 2021.
            <br />
            <br />
            My other interests include:
          </p>
          <ul>
            <li className="about-activity">
              <FaAngellist /> Travelling
            </li>
            <li className="about-activity">
              <FaAngellist /> Reading
            </li>
            <li className="about-activity">
              <FaAngellist /> Hiking
            </li>
          </ul>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
            <img src={ imageme } alt="about-steph" className="img-fluid" />
            </Col>
          </Row>
        </Container>
    </Container>
    );
}
  
  export default About;