import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCodeSlash, BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";
import "./style.css";

const FooterComponent = () => {
  return (
    <footer className="myFooter">
      <Container fluid>
        <div className="topGlow"></div>

        <Row>
          <Col className="text-center">
            <div className="iconBox">
              <BsCodeSlash />
            </div>

            <h1 className="nameText">Kundan Kumar</h1>

            <p className="tagline">
              Full Stack Developer • React JS • Building Modern Web Apps
            </p>

            <p className="status">🚀 Available for Opportunities</p>

            <div className="socialIcons">
              <a
                href="https://www.linkedin.com/in/kundankumarcse"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a href="mailto:kundan2k34@gmail.com">
                <BsEnvelope />
              </a>
              <a
                href="https://github.com/kundan2k34"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="copyright">
            <p>© 2026 Kundan Kumar | Crafted with ❤️ using React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
