import React from "react";
import react from "../../svgs/react.svg";
import nodejs from "../../svgs/nodejs.svg";
import js from "../../svgs/js.svg";
import postgre from "../../svgs/postgre.svg";
import { Col, Row, Tag, Typography } from "antd";

const Skills = () => {
  const skills = [
    {
      label: "ReactJs",
      icon: react,
    },
    {
      label: "NodeJs",
      icon: nodejs,
    },
    {
      label: "JavaScript",
      icon: js,
    },
    {
      label: "PostgreSQL",
      icon: postgre,
    },
  ];

  const allSkills = [
    "ReactJs",
    "JavaScript",
    "TypeScript",
    "NodeJs",
    "PostgreSQL",
    "MySQL",
    "RabbitMQ",
    "HTML",
    "CSS",
    "SpringBoot",
  ];

  return (
    <div id="skills" style={{ minHeight: "60vh" }}>
      <Typography.Title
        style={{ color: "#fff", textAlign: "center" }}
        level={3}
      >
        Skills
      </Typography.Title>
      <Row
        wrap
        justify={"center"}
        align={"middle"}
        gutter={50}
        style={{ margin: "0 10%" }}
      >
        {skills.map((skill) => (
          <Col>
            <img src={skill.icon} style={{ height: "10vh" }} alt="skill icon" />
          </Col>
        ))}
      </Row>
      <Row gutter={50} style={{ margin: "50px 25%" }}>
        {allSkills.map((skill) => (
          <Tag
            style={{
              // color: "#7FC7D9",
              border: "none",
              margin: "10px",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          >
            <Typography.Text style={{ color: "#7FC7D9" }}>
              {skill}
            </Typography.Text>
          </Tag>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
