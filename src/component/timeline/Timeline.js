import React from "react";
import { Container } from "react-bootstrap";
import '../../styles/timeline/timeline.css'
export const Timeline = ({content}) => {

  return (
    <Container fluid className="section timeline-section">
        <h1 className="topic">Timeline</h1>
      <div class="timeline">
        <ul>
            {content.map((i,index)=>(
                <li data-aos={(index%2===0)?'fade-left':'fade-right'}>
                <div class="timeline-content">
                  <h3 class="date">{i.date}</h3>
                  <h1>{i.text}</h1>
                  
                </div>
              </li>
            ))}
          
        </ul>
      </div>
    </Container>
  );
};
