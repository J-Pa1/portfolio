import React from "react";
import react from "../../svgs/react.svg";
import nodejs from "../../svgs/nodejs.svg";
import js from "../../svgs/js.svg";
import postgre from "../../svgs/postgre.svg";
import { Col, Row, Tag, Typography } from "antd";
import SlideIn from "../animated/SlideIn/SlideIn";
import ScaleUpOnHover from "../animated/ScaleUpOnHover/ScaleUpOnHover";

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
    "Responsive Design",
    "Zustand",
    "Web Sockets",
    "OAuth 2.0",
    "Microservice Architecture",
    "RabbitMQ",
    "HTML",
    "CSS",
    "SpringBoot",
    "C#",
    "Angular",
  ];

  return (
    <div id="skills" style={{ minHeight: "90vh" }}>
      <SlideIn>
        <Typography.Title
          style={{ color: "#fff", textAlign: "center" }}
          level={3}
        >
          Skills
        </Typography.Title>
      </SlideIn>
      <Row
        wrap
        justify={"center"}
        align={"middle"}
        gutter={50}
        gap={10}
        style={{ margin: "20px 10%" }}
      >
        {skills.map((skill) => (
          <Col>
            <SlideIn>
              <ScaleUpOnHover>
                <img
                  src={skill.icon}
                  style={{ height: "10vh", margin: "10px" }}
                  alt="skill icon"
                />
              </ScaleUpOnHover>
            </SlideIn>
          </Col>
        ))}
      </Row>

      <SlideIn direction="down">
        <Row gutter={50} style={{ margin: "50px 25%" }} justify="center">
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
      </SlideIn>
    </div>
  );
};

export default Skills;
