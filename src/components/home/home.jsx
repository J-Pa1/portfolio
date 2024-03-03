import { Col, Row, Typography } from "antd";
import React from "react";
import programmer from "../../svgs/programmer.svg";

const Home = () => {
  return (
    <Row
      id="home"
      style={{
        height: "90vh",
      }}
      justify="center"
      align="middle"
    >
      <Col style={{ margin: "10%" }}>
        <Row>
          <Typography.Title style={{ color: "#fff" }}>
            Pavan Kumar <span style={{ color: "#7FC7D9" }}>Jayanthi</span>
          </Typography.Title>
        </Row>
        <Row>
          <Typography.Title
            level={3}
            style={{ color: "#fff", marginTop: "0px" }}
          >
            I am a{" "}
            <span style={{ color: "#7FC7D9" }}>Full Stack Web Developer.</span>
          </Typography.Title>
        </Row>
      </Col>
      <Col xs={24} md={10}>
        <img src={programmer} />
      </Col>
    </Row>
  );
};

export default Home;
