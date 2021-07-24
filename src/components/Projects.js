import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {FaBriefcase} from "react-icons/fa"

import codeQuiz from "../images/projects/codeQuizscreencapture.png";
import notetaker from "../images/projects/notetaker_screencapture.png";
import passwordgenerator from "../images/projects/passwordgenerator_screencapture.png";
import stranded from "../images/projects/stranded_screencapture.png";
import weatherdashboard from "../images/projects/weatherdashboard_screencapture.png";
import workplanner from "../images/projects/workplanner_screencapture.png";

function Projects() {
    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My <strong className="pink">Projects </strong> <FaBriefcase />
          </h1>
          <br />
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
            <Card.Img variant="top" src={stranded} alt="card-img" />
            <Card.Body>
                <Card.Title><strong>COVID Tracker-Stranded</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                "HTML | JavaScript | APIs"
                </Card.Text>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}} href="https://github.com/smj3085/covid-tracker-stranded" target="_blank">
                GitHub Repo
                </Button>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white"}} href="https://smj3085.github.io/covid-tracker-stranded/" target="_blank">
                View Project
                </Button>
            </Card.Body>
            </Card>
            </Col>
  
            <Col md={4} className="project-card">
            <Card className="project-card-view">
            <Card.Img variant="top" src={codeQuiz} alt="card-img" />
            <Card.Body>
                <Card.Title><strong>Coding Quiz</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                "HTML | CSS | JavaScript | API"
                </Card.Text>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}} href="https://github.com/smj3085/codeQuiz" target="_blank">
                GitHub Repo
                </Button>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white"}} href="https://smj3085.github.io/codeQuiz/" target="_blank">
                View Project
                </Button>
            </Card.Body>
            </Card>
            </Col>

            <Col md={4} className="project-card">
            <Card className="project-card-view">
            <Card.Img variant="top" src={workplanner} alt="card-img" />
            <Card.Body>
                <Card.Title><strong>Work Day Planner</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                "HTML | CSS | JavaScript | API"
                </Card.Text>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}} href="https://github.com/smj3085/workday_scheduler" target="_blank">
                GitHub Repo
                </Button>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white"}}  href="https://smj3085.github.io/workday_scheduler/" target="_blank">
                View Project
                </Button>
            </Card.Body>
            </Card>
            </Col>

            <Col md={4} className="project-card">
            <Card className="project-card-view">
            <Card.Img variant="top" src={notetaker} alt="card-img" />
            <Card.Body>
                <Card.Title><strong>Note Taker App</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                "HTML | CSS | NodeJs"
                </Card.Text>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}} href="https://github.com/smj3085/Note-taker" target="_blank">
                GitHub Repo
                </Button>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white"}} href="https://fierce-castle-98892.herokuapp.com/" target="_blank">
                View Project
                </Button>
            </Card.Body>
            </Card>
            </Col>

            <Col md={4} className="project-card">
            <Card className="project-card-view">
            <Card.Img variant="top" src={passwordgenerator} alt="card-img" />
            <Card.Body>
                <Card.Title><strong>Password Generator</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                "HTML | CSS | JavaScript"
                </Card.Text>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}} href="https://github.com/smj3085/passwordGenerator" target="_blank">
                GitHub Repo
                </Button>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white"}} href="https://smj3085.github.io/passwordGenerator/" target="_blank">
                View Project
                </Button>
            </Card.Body>
            </Card>
            </Col>

            <Col md={4} className="project-card">
            <Card className="project-card-view">
            <Card.Img variant="top" src={weatherdashboard} alt="card-img" />
            <Card.Body>
                <Card.Title><strong>Weather Dashboard</strong></Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                "HTML | CSS | JavaScript | API"
                </Card.Text>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white", margin: 10}} href="https://github.com/smj3085/weather-dashboard" target="_blank">
                GitHub Repo
                </Button>
                <Button variant="flat" style={{ background: "#f15bb5", color: "white"}} href="https://smj3085.github.io/weather-dashboard/" target="_blank">
                View Project
                </Button>
            </Card.Body>
            </Card>
            </Col>

          </Row>
        </Container>
      </Container>
    );
  }
  
  export default Projects;