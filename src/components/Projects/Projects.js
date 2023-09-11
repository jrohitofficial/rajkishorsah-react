import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import SolveMe from "../../Assets/Projects/SolveMe.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SolveMe}
              isBlog={false}
              title="SolveMe"
              description="SolveMe is a fun and challenging quiz app with categories ranging from Films and Music to Computers, Anime, History, and Mathematics. The app uses an open API to ensure that questions are always fresh and up-to-date. With SolveMe, you can test your knowledge while having a great time!"
              link="https://github.com/surykantkasare/SolveMe"
              isLive={true}
              Livelink="https://expo.dev/@surykant_k/SolveMe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
