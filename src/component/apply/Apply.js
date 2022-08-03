import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Apply = () => {
  return (
    <Container fluid className="section apply-main">
      <Row >
        
        <Col lg={6} md={6} sm={12} xs={12} >
          <ul className="body-text main-content rules ">
            <li>Only undergraduate girls can participate</li>
            
            <li>Team should have 3 members </li>
            <li>empor incididunt ut labore</li>
          </ul>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="topic-content apply-div">
          <h1 className="topic">Are you ready?</h1>
          <Button className="apply-btn">Apply Now</Button>
        </Col>
      </Row>
    </Container>
  );
};
