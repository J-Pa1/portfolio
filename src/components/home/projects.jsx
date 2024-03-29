import { Button, Card, Carousel, Col, Row, Typography } from "antd";
import { GithubOutlined, LaptopOutlined } from "@ant-design/icons";
import React from "react";

const ProjectCard = (props) => {
  return (
    <Row justify={"center"}>
      <Col
        style={{
          position: "relative",
          height: "50vh",
          width: "50vw",
          overflow: "none",
        }}
      >
        <img
          src={props.projectThumbnail}
          style={{
            maxWidth: "100%",
            borderRadius: "8px",
            filter: "brightness(50%)",
          }}
        ></img>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "fit-content",
            backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
            borderRadius: "8px",
          }}
        >
          <div style={{ padding: "10% 5% 5% 5%" }}>
            <Typography.Title style={{ color: "#fff" }} level={5}>
              {props.title}
            </Typography.Title>

            <Row justify="space-between" align="middle">
              <Col span={18}>
                <Typography.Text
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "small" }}
                >
                  {props.desc}
                </Typography.Text>
              </Col>
              <Col style={{ margin: "10px" }}>
                <a target="_blank" href={props.gitUrl}>
                  <Button
                    icon={<GithubOutlined />}
                    shape="circle"
                    type="primary"
                    style={{ marginRight: "10px" }}
                  />
                </a>
                <a target="_blank" href={props.liveUrl}>
                  <Button
                    icon={<LaptopOutlined />}
                    shape="circle"
                    type="primary"
                  />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  );
};

const Projects = () => {
  return (
    <div id="projects" style={{ height: "60vh" }}>
      <Typography.Title
        style={{ color: "#fff", textAlign: "center" }}
        level={3}
      >
        Projects
      </Typography.Title>
      <div style={{ height: "fit-content" }}>
        <Carousel autoplay>
          <ProjectCard
            title="My Portfolio"
            desc="This site serves as a showcase of my skills, experience, and projects. Explore my work, learn about my background"
            gitUrl="https://github.com/J-Pa1/portfolio"
            projectThumbnail="assets/project-thumbnails/portfolio.png"
          />
          <ProjectCard
            title="ChatApp"
            desc="Under development"
            projectThumbnail="assets/project-thumbnails/chatApp.png"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
