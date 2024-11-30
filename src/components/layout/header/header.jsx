import { Button, Col, Row, Tooltip, Typography } from "antd";
import React from "react";
import skills from "../../../svgs/skills.svg";
import about from "../../../svgs/about.svg";
import experience from "../../../svgs/experience.svg";
import education from "../../../svgs/graduation.svg";
import projects from "../../../svgs/projects.svg";
import home from "../../../svgs/home.svg";
import blog from "../../../svgs/blog.svg";
import ScaleUpOnHover from "../../animated/ScaleUpOnHover/ScaleUpOnHover";
import SlideIn from "../../animated/SlideIn/SlideIn";

const Header = () => {
  return (
    <Row>
      <Col xs={24} md={9} style={{ textAlign: "center" }}>
        <SlideIn direction="up">
          <Typography.Title level={3}>
            <span style={{ color: "#7FC7D9" }}>my</span>
            <span style={{ color: "#fff" }}>Portfolio</span>
          </Typography.Title>
        </SlideIn>
      </Col>
      <Col
        xs={0}
        md={15}
        style={{
          textAlign: "center",
          verticalAlign: "center",
        }}
      >
        <SlideIn direction="up">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              gap: "10px",
              height: "100%",
            }}
          >
            <ScaleUpOnHover>
              <Button
                type="link"
                className="nav"
                shape="circle"
                href="#home"
                icon={<img src={home} className="navicon" />}
              />
            </ScaleUpOnHover>

            <ScaleUpOnHover>
              <Button
                type="link"
                className="nav"
                shape="circle"
                href="#skills"
                icon={<img src={skills} className="navicon" />}
              />
            </ScaleUpOnHover>

            <ScaleUpOnHover>
              <Button
                type="link"
                className="nav"
                shape="circle"
                href="#experience"
                icon={<img src={experience} className="navicon" />}
              />
            </ScaleUpOnHover>

            <ScaleUpOnHover>
              <Button
                type="link"
                className="nav"
                shape="circle"
                href="#blog"
                icon={<img src={blog} className="navicon" />}
              />
            </ScaleUpOnHover>

            <ScaleUpOnHover>
              <Button
                type="link"
                className="nav"
                shape="circle"
                href="#projects"
                icon={<img src={projects} className="navicon" />}
              />
            </ScaleUpOnHover>

            <ScaleUpOnHover>
              <Button
                type="link"
                className="nav"
                shape="circle"
                href="#education"
                icon={<img src={education} className="navicon" />}
              />
            </ScaleUpOnHover>

            <ScaleUpOnHover>
              <Button
                type="link"
                className="nav"
                shape="circle"
                href="#about"
                icon={<img src={about} className="navicon" />}
              />
            </ScaleUpOnHover>
          </div>
        </SlideIn>
      </Col>
    </Row>
  );
};

export default Header;
