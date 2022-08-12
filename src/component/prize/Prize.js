import React from 'react'
import { Container, Row, Col,Figure } from "react-bootstrap";
import background from "../../assets/images/prize.png";
import Confetti from 'react-confetti'

export const Prize = () => {
  return (
    <Container fluid className='prize'>
    <h1 className="topic" data-aos="fade-up">Prizes</h1>  
    
    <Row >
        <Col lg={12} md={12} sm={12} xs={12} className="topic-content" data-aos='fade-up' data-aos-delay="300"> 
        <Confetti/>
        <Figure.Image alt="171x180" width="80%" src={background}/>
          </Col>
      </Row>   
    </Container>
  )
}

