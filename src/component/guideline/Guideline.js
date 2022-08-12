import React from "react";
import { Button, Col, Container, Row, Card, Figure } from "react-bootstrap";
import '../../styles/apply/apply.css'

export const Guideline = () => {
  return (
    <Container fluid className="section guideline">
      <Row data-aos='fade-up'>
        
        <Col lg={12} md={12} sm={12} xs={12} >
        <Card>
        <Card.Header>Guidelines</Card.Header>
      <Card.Body>All participants should be undergraduates of a University or a Higher Education Institute.</Card.Body>
      <Card.Body>Hackathon teams will be a maximum of 3 people.</Card.Body>
      <Card.Body>Any kind of plagiarism is completely prohibited.</Card.Body>
      <Card.Body>All team members should be present at the event.</Card.Body>
    </Card>
 </Col>
      </Row>
    </Container>
  );
};
