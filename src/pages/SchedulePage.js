import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Calendar from "../components/Calendar/Calendar";

const SchedulePage = () => {
  return (
    <Container>
      <h1 className="display-2">Kalenteri</h1>
      <Row className="justify-content-md-center">
        <Col lg={7}>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
