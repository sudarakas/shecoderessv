import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import shecodress from "../../assets/images/shecodress.png";
import { Ticker } from "../timer";

const index = () => {
  const futureDate = new Date(2022, 8, 2);
  // const futureDate = add(new Date(), {
  //   days: 6,
  //   hours: 22,
  //   minutes: 40
  // });

  console.log(futureDate);
  return (
    <Container className="header">
      <Row>
        <Col>
          <img className="logo-img" src={shecodress} alt="shecoderessv5.0" />
        </Col>

        <Col className="p-2">
          {/* <p className="body-text">Sri lankan first girl's only hackothon.</p> */}
          <Ticker futureDate={futureDate} />
        </Col>
        <Col className="apply-div">
        <Button href="https://bit.ly/uwu_wie_shecodress2022" target="_blank" className="apply-btn">Apply Now</Button>

        </Col>
      </Row>
    </Container>
  );
};

export default index;
