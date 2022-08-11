import React from "react";
import { Button, Col, Container, Row, Card, Figure } from "react-bootstrap";
import '../../styles/apply/apply.css'
import girl from "../../assets/images/girl.png";

export const Apply = () => {
  return (
    <Container fluid className="section apply-main">
      <Row >
        <Col lg={12} md={12} sm={12} xs={12} className="topic-content apply-div">
        <Figure.Image width={300} height={140} alt="171x180" src={girl}/>
          <h1 className="topic">Are you ready?</h1>
          <Button className="apply-btn">Apply Now</Button>
        </Col>
      </Row>
    </Container>
  );
};
