import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import sb_logo from "../../assets/images/sb_logo.png";
import wielogo from "../../assets/images/wielogo.png";
import extractpro from "../../assets/images/extractpro.svg";
import simcentric from "../../assets/images/simcentric.png";
import wielly from "../../assets/images/weilly.webp"
import sana from "../../assets/images/sana.png"

export const Info = () => {
  return (
    <Container fluid className="section info-section">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <h1 className="topic" data-aos="fade-right">
            Our partners
          </h1>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
        <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h3 className="mt-4"><b>Title sponsor</b></h3>
              <Figure data-aos="fade-up" data-aos-duration="1000">
                <Figure.Image
                  width={370}
                  height={300}
                  alt="sana"
                  src={sana}
                  style={{ marginTop: 50 }}
                />
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h3 className="mt-4"><b>Platinum sponsor</b></h3>
              <Figure data-aos="fade-up" data-aos-duration="1000">
                <Figure.Image
                  width={350}
                  height={280}
                  alt="extractpro"
                  src={extractpro}
                  style={{ marginTop: 50 }}
                />
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12} className="mt-5 mb-4">
              <h3 className="main-content"><b>Gold sponsor</b></h3>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Figure data-aos="fade-up" data-aos-duration="2000">
                <Figure.Image
                  width={230}
                  height={240}
                  alt="simcentric"
                  src={simcentric}
                />
              </Figure>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Figure data-aos="fade-up" data-aos-duration="2000">
                <Figure.Image
                  width={130}
                  height={140}
                  alt="wielly"
                  src={wielly}
                />
              </Figure>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Row>
        <Col lg={12} md={12} sm={12} xs={12} className="pt-4">
          <h1 className="topic" data-aos="fade-right">
            Organized by
          </h1>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Figure data-aos="fade-up" data-aos-duration="1000">
            <Figure.Image
              width={250}
              height={180}
              alt="171x180"
              src={sb_logo}
              style={{ marginTop: 50 }}
            />
          </Figure>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <Figure data-aos="fade-up" data-aos-duration="2000">
            <Figure.Image
              width={130}
              height={140}
              alt="171x180"
              src={wielogo}
            />
          </Figure>
        </Col>
      </Row> */}
    </Container>
  );
};
