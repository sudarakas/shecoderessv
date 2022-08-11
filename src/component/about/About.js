import React from "react";
import { Container, Row, Col,Figure } from "react-bootstrap";
import background from "../../assets/images/shecoder.jpg";

export const About = () => {
  return (
    <Container fluid className="section">
      <Row >
        <Col lg={6} md={6} sm={12} xs={12} className="topic-content" data-aos='fade-right' data-aos-delay="100"> 
        <Figure.Image alt="171x180" src={background}/>
          </Col>
        <Col lg={6} md={6} sm={12} xs={12} data-aos='fade-left' data-aos-delay="200">
          <p className="body-text main-content">
          'Hackathons are where your crazy ideas become real'
          <br/>
          <br/>
          SHECODERess V 5.0 happening for the Fifth Successive Time, is the First Girls - Only Hackathon Series ever to be held in Sri Lanka. It is proudly organized by the Women in Engineering Affinity Group of IEEE UWU Student Branch. Round the clock, this is a 24 Houred Algorithmic Hackathon!
          <br/><br/>
          This competition is meant for female undergraduates committed to the IT Field to revitalise their career by coding more and more to gear up in their fields. Within the past few years, SHECODERess striked through many female undergraduates at both Private and Government Universities. This dominating Hackathon has also seized attention of leading IT Companies and Franchises, making more sponsors to accomplish this event as a huge hit! Girls get themseleves into teams of three, to compete with each other. The teams who come in the top three are rewarded with monetary prizes and every participant receives a handy swag pack along with a certificate to mark their participation and give them on a recognition.
          <br/><br/>
          And this time SHECODERess V 5.0 will be held physically after a 2 year halt due to the Pandemic!
          </p>
        </Col>
      </Row>
    </Container>
  );
};
