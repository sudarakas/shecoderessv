import React from 'react'
import {Container, Row, Col, Figure} from "react-bootstrap";
export const Footer = () => {
    return (
        <Container fluid className="section footer">
            <Row>
            
                <Col lg={6} md={6} sm={12} xs={12}>
                    <h2 className="topic">General Information</h2>
                    <p>
                        Uva Wellassa University of Sri lanka
                    </p>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                <h2 className="topic">Contatc us</h2>
                    <p>
                        phone: +947865321
                    </p>
                </Col>
            </Row>
            <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
                <p className="body-text">Shecoderess v5.0 -All Rights reseved.</p>  
            </Col>
            
            </Row>
            
        </Container>
    )
}


