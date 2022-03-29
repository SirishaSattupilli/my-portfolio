import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../assets/profile/SirishaProfilePicCropped.jpg";
import "../about/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 pb-3 text-center font-details">About Me</h1>
        <Container>
          <Row className="pt-3 mb-5 align-items-center">
            <Col xs={12} md={6} >
              <Row className="justify-content-center mb-2 mr-2">
                <Image className="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6} >
              <Row className="my-details p-2 rounded align-items-center d-flex justify-content-center">
                <p>
                  <strong>
                    Hi there, I'm Sirisha Sattupilli. Nice to see you here.
                  </strong>
                </p>
                <p>
                  I am a Software Developer living in Singapore. I enjoy buiding
                  rich interactive websites. I have started my career around 6
                  years ago where in I worked for couple of multinational firms,
                  which gave me opportunities to collaborate with talented
                  people to create digital products for various clients.
                </p>
                <p>
                  I would define myself as a constant learner who challenges
                  herself continously, but also with a pace of one step at a
                  time.
                </p>
                <p>
                  I would like to develop expertise in number of areas over the
                  course of my life and career.
                </p>
                {/* <Col className="d-flex justify-content-center"> */}
                <a href="#contact">
                  <Button className="m-1" variant="outline-primary">
                    Let's Talk
                  </Button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1rXJd-GQ3lUCQSajZkNWTpOLoj7kjUmFB/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="m-1" variant="outline-success">
                    Resume
                  </Button>
                </a>
                <a
                  href="https://github.com/SirishaSattupilli"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="m-1" variant="outline-dark">
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/sirisha-sattupilli-250a0188/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="m-1" variant="outline-info">
                    LinkedIn
                  </Button>
                </a>
                {/* </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
