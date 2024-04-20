import { Button, Carousel, Col, Row, Typography } from "antd";
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
            filter: "brightness(30%)",
            position: "absolute",
            height: "100%",
            objectFit: "cover",
            bottom: 0,
          }}
          alt="Project thumbail"
        ></img>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "fit-content",
            backgroundImage: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
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
                {props.gitUrl && (
                  <a target="_blank" href={props.gitUrl} rel="noreferrer">
                    <Button
                      icon={<GithubOutlined />}
                      shape="circle"
                      type="primary"
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                )}
                {props.liveUrl && (
                  <a target="_blank" href={props.liveUrl} rel="noreferrer">
                    <Button
                      icon={<LaptopOutlined />}
                      shape="circle"
                      type="primary"
                    />
                  </a>
                )}
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
            liveUrl="https://pavankumarjayanthi-portfolio.netlify.app"
            projectThumbnail="assets/project-thumbnails/portfolio.png"
          />
          <ProjectCard
            title="ChatApp"
            desc="Work in progress, yet to make first commit"
            projectThumbnail="assets/project-thumbnails/chatApp.png"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
