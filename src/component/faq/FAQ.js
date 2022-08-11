import React from 'react'
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import { FaqData } from '../../data/faq'
import '../../styles/faq/faq.css'

export const FAQ = () => {
  return (
    <Container fluid className='faq'>
      <h1 className="topic">Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0" className='faq-accordion' data-aos='fade-up'>
            {FaqData.map((val,key) =>{
                return (
                    <Accordion.Item eventKey={val.eventkey}>
                    <Accordion.Header className='faq-title'>{val.header}</Accordion.Header>
                    <Accordion.Body>{val.content}</Accordion.Body>
                  </Accordion.Item>
                )
            })}
    </Accordion>
    </Container>
  )
}

