import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; 
import Form from 'react-bootstrap/Form'



function Contact() {
    return (
        <Container fluid className="contact-section">
            <Container>
                <Row className="contact-section" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <h1 className="contact-header"><strong className="pink"> Connect</strong> with me!</h1>
            
            <Col>
            <br />
{/* Form */}
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your name</Form.Label>
                <Form.Control as="textarea" placeholder="Name" rows={1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}}>
                Submit
            </Button>
            </Form>
            </Col>

            <Col>
            <div xs={4} md={3} className="social-links">
                <a
                    href="https://github.com/3085"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons" style={{color: "#3a86ff"}}
                    >
                    <FaGithub />
                    </a>
  
                    <a
                    href="stephaniemjlee@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons" style={{color: "#3a86ff"}}
                    >
                    <FaEnvelope />
                    </a>

                <a
                    href="https://www.linkedin.com/in/stephanie-lee-syd/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons" style={{color: "#3a86ff"}}
                    >
                    <FaLinkedin />
                    </a>
                </div>
                </Col>
     
            </Row>

            </Container>
        </Container>
    )
}

export default Contact;