import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import '../../styles/apply/apply.css'

export const Apply = () => {
  return (
    <Container fluid className="section apply-main">
      <Row >
        
        <Col lg={6} md={6} sm={12} xs={12} >
        <Card>
        <Card.Header>Guidelines</Card.Header>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
 </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="topic-content apply-div">
          <h1 className="topic">Are you ready?</h1>
          <Button className="apply-btn">Apply Now</Button>
        </Col>
      </Row>
    </Container>
  );
};
