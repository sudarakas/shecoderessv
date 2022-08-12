import React from "react";
import { Button, Col, Container, Row, Figure} from "react-bootstrap";
import '../../styles/apply/apply.css'
import sb_logo from "../../assets/images/sb_logo.png";
import wielogo from "../../assets/images/wielogo.png";
import uwulogo from "../../assets/images/uwu.png";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container fluid className="section footer">
      <Row >
      <Col lg={6} md={6} sm={12} xs={12}>
    <h2 className="topic">General Information</h2>
    <p>Women in Engineering Affinity Group of IEEE <br/>
        Uva Wellassa University of Sri Lanka
    </p>
    <Col lg={12} md={6} sm={12} xs={12}>
                    <Figure.Image width={180} height={180} alt="171x180" src={sb_logo} />
                    <Figure.Image width={80} height={140} alt="171x180" src={wielogo}/>
                    <Figure.Image width={90} height={140} alt="171x180" src={uwulogo}/>
                </Col>
</Col>
<Col lg={6} md={6} sm={12} xs={12}>
<h2 className="topic">Contatc us</h2>
    <p>
        phone : +94712223619<br/>
        email : ieeewieuwu@gmail.com
    </p>
    <Icon.Facebook style={{marginRight:"10px"}}/>
    <Icon.Linkedin />
</Col>
        <Col lg={12} md={12} sm={12} xs={12} className="topic-content apply-div">
        <p><br/><br/>SHECODERess 2022 - All Rights reserved.</p>   
        </Col>
      </Row>
    </Container>
  );
};
