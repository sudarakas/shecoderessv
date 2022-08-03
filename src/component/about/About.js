import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const About = () => {
  return (
    <Container fluid className="section">
      <Row >
        <Col lg={6} md={6} sm={12} xs={12} className="topic-content">
          <h1 className="topic">What is SHERCODERess</h1>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} >
          <p className="body-text main-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            malesuada fames ac turpis egestas maecenas. Turpis cursus in hac
            habitasse platea dictumst. Aenean euismod elementum nisi quis
            eleifend quam adipiscing vitae proin. Felis imperdiet proin
            fermentum leo vel orci porta non. Enim diam vulputate ut pharetra
            sit. Vulputate odio ut enim blandit volutpat maecenas volutpat
            blandit aliquam. Molestie nunc non blandit massa enim nec dui nunc.
            Purus in massa tempor nec feugiat nisl pretium. Mauris sit amet
            massa vitae tortor. Non odio euismod lacinia at. Platea dictumst
            quisque sagittis purus sit amet volutpat consequat. Urna porttitor
            rhoncus dolor purus non enim praesent elementum. Et netus et
            malesuada fames ac turpis egestas maecenas pharetra. Enim ut tellus
            elementum sagittis vitae et leo. Lacus sed turpis tincidunt id
            aliquet risus feugiat in. Urna molestie at elementum eu facilisis
            sed odio morbi.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
