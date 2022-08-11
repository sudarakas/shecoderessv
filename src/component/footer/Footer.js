import React from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import '../../styles/apply/apply.css'

export const Footer = () => {
  return (
    <Container fluid className="section footer">
      <Row data-aos='fade-up'>
        
        <Col lg={12} md={12} sm={12} xs={12} >
        <p>SHECODERess 2022 - All Rights reserved.</p>
 </Col>
      </Row>
    </Container>
  );
};
