import { Button, Col, Row, Typography } from "antd";
import React from "react";

const Header = () => {
  return (
    <Row>
      <Col xs={24} md={9} style={{ textAlign: "center" }}>
        <Typography.Title level={3}>
          <span style={{ color: "#7FC7D9" }}>my</span>
          <span style={{ color: "#fff" }}>Portfolio</span>
        </Typography.Title>
      </Col>
      <Col
        xs={0}
        md={15}
        style={{
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        <Typography.Title level={3}>
          <Button type="link" className="nav" href="#home">
            Home
          </Button>

          <Button type="link" className="nav" href="#skills">
            Skills
          </Button>
          <Button type="link" className="nav" href="#experience">
            Experience
          </Button>
          <Button type="link" className="nav" href="#projects">
            Projects
          </Button>
          <Button type="link" className="nav" href="#education">
            Education
          </Button>
        </Typography.Title>
      </Col>
    </Row>
  );
};

export default Header;
