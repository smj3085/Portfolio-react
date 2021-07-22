// Technical skills
// Download my CV

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../images/Stephanie Lee Resume-Jnr Web developer.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";

function Resume() {
    return (
        <Container fluid className="resume-section">
          <Container>
              <h1 className="resume-header">My <strong className="pink">Resume</strong></h1>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button variant="primary" href={pdf} target="_blank">
                <AiOutlineDownload />
                Download CV
              </Button>
            </Row>
            <br />

            <Row className="technical-section" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <h1 className="technical-header">My <strong className="pink">Technical Skills</strong></h1>
            <Col xs={4} md={2} className="tech-icons">
            <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiGit />
            </Col>
            </Row>
            </Container>
            </Container>
                
  );
}

export default Resume;