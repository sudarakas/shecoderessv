import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        <Col className="p-5">
          {/* <p className="body-text">Sri lankan first girl's only hackothon.</p> */}
          <Ticker futureDate={futureDate} />
        </Col>
      </Row>
    </Container>
  );
};

export default index;
