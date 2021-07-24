// Technical skills
// Download my CV

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import pdf from "../images/Stephanie Lee Resume-Jnr Web developer.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiHeroku,
  DiBootstrap
} from "react-icons/di";
import {FaBriefcase, FaUserGraduate} from "react-icons/fa";

function Resume() {
    return (
        <Container fluid className="resume-section">
          <Container>
              <h1 className="resume-header">My <strong className="pink">Resume</strong></h1>
              <br />
              <VerticalTimeline>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021 - 2021"
                    iconStyle={{ background: '#3a86ff', color: 'white' }}
                    icon={<FaUserGraduate />}
                >
                    <h3 className="vertical-timeline-element-title">Full Stack Development</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Sydney</h4>
                    <p>
                    Full Stack Development Bootcamp
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2013 - 2017"
                    iconStyle={{ background: '#3a86ff', color: 'white' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Team assistant</h3>
                    <h4 className="vertical-timeline-element-subtitle">MLC, Limited</h4>
                    <p>
                    Team assistant
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2009 - 2013"
                    iconStyle={{ background: '#3a86ff', color: 'white' }}
                    icon={<FaBriefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Contact Centre Advisor</h3>
                    <h4 className="vertical-timeline-element-subtitle">Virgin Atlantic Cargo</h4>
                    <p>
                    Customer service experience
                    </p>
                </VerticalTimelineElement>
                
                
                </VerticalTimeline>
                
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Col md="2">
              <Button variant="primary" size ="xxl" href={pdf} target="_blank">
                <AiOutlineDownload />
                Download CV
              </Button>
              </Col>
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
            <DiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiHeroku />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiBootstrap />
            </Col>
            </Row>
            </Container>
            </Container>
                
  );
}

export default Resume;