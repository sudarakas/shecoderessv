import React from 'react'
import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion'
import { FaqData } from '../../data/faq'
import '../../styles/faq/faq.css'

export const FAQ = () => {
  return (
    <Container fluid className='faq'>
        <Accordion defaultActiveKey="0" className='faq-accordion'>
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

