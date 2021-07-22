import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../images/girl-programmer.jpg";
import Type from "./Typewriter.js";

function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={5} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Welcome! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                </h1>
  
                <h1 className="heading-name">
                  I'M
                  <strong className="pink"> Steph Lee</strong>
                </h1>
                <p>Full Stack Developer
                  <br />Take a look around and get in touch!
                </p>
                <div style={{ padding: 50, textAlign: "left" }}>
                <Type />

              </div>
              </Col>
  
              <Col md={5} style={{ paddingBottom: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }
  
  export default Home;