// Contact me! 

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import {FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; 

function Contact() {
    return (
        <Container fluid className="contact-section">
            <Container>
                <Row className="contact-section" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <h1 className="contact-header"><strong className="pink"> Connect</strong> with me!</h1>
            
{/* Form */}

                <Col xs={4} md={3} className="social-links">
                    <a
                    href="https://github.com/3085"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  social-icons"
                    >
                    <FaGithub />
                    </a>
                </Col>
                <Col xs={4} md={3} className="social-links">
                    <a
                    href="stephaniemjlee@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  social-icons"
                    >
                    <FaEnvelope />
                    </a>
                </Col>
                <Col xs={4} md={3} className="social-links">
                <a
                    href="https://www.linkedin.com/in/stephanie-lee-syd/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  social-icons"
                    >
                    <FaLinkedin />
                    </a>
                </Col>

            </Row>

            </Container>
        </Container>
    )
}

export default Contact;