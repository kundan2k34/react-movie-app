import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";
import "./style.css";
const ContactContainer = () => {
  const myData = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/kundankumarcse",
      text: "Follow to my linkedin.",
    },
    {
      name: "GitHub",
      link: "https://github.com/kundan2k34",
      text: "Follow to my github account.",
    },
    {
      name: "Email",
      link: "mailto:kundan2k34@gmail.com",
      text: "write to me a mail",
    },
  ];
  return (
    <div className="contactWrap">
      <Container>
        <Row>
          <Col>
            <p>CONNECT WITH US</p>
            <h1>Get in Touch</h1>
          </Col>
        </Row>
        <Row>
          <Col className="conectIcon">
            <ul className="socialIconsList">
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/kundankumarcse"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="mailto:kundan2k34@gmail.com"
                  target="_blank"
                >
                  <BsEnvelope />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://github.com/kundan2k34"
                  target="_blank"
                >
                  <BsGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup className="contactList">
              {myData && myData.length > 0
                ? myData.map((item) => {
                    return (
                      <ListGroup.Item key={item.name}>
                        <span>{item.text}</span>
                        <a href={item.link} rel="noreferrer" target="_blank">
                          {item.link}
                        </a>
                      </ListGroup.Item>
                    );
                  })
                : ""}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactContainer;
