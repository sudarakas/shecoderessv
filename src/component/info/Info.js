import React from "react";
import {Container, Row, Col, Figure} from "react-bootstrap";
import sb_logo from "../../assets/images/sb_logo.png";
import wielogo from "../../assets/images/wielogo.png";

export const Info = () => {
    return (
        <Container fluid className="section info-section">
            <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="topic" data-aos="fade-right">Organized by</h1>  
            </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <Figure data-aos="fade-up" data-aos-duration="1000">
                        <Figure.Image width={250} height={180} alt="171x180" src={sb_logo} style = {{ marginTop: 50 }} />
                    </Figure>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <Figure data-aos="fade-up" data-aos-duration="2000">
                        <Figure.Image width={130} height={140} alt="171x180" src={wielogo}/>
                    </Figure>
                </Col>
            </Row>
            {/* <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
            <h1 className="topic" data-aos="fade-right">Organized by</h1>  
            </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <Figure data-aos="fade-up" data-aos-duration="1000">
                        <Figure.Image width={250} height={180} alt="171x180" src={sb_logo} style = {{ marginTop: 50 }} />
                    </Figure>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                    <Figure data-aos="fade-up" data-aos-duration="2000">
                        <Figure.Image width={130} height={140} alt="171x180" src={wielogo}/>
                    </Figure>
                </Col>
            </Row> */}
        </Container>
    );
};
