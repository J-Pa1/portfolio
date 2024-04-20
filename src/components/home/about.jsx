import { Button, Col, Row, Typography } from "antd";
import React from "react";
import Details from "../../constants/details";

const About = () => {
  const getExp = () => {
    let joiningDate = new Date(Details.joiningDate);
    let totalMonths = Math.round(
      (new Date() - joiningDate) / (1000 * 60 * 60 * 24 * 30)
    );
    let totalYears = Math.floor(totalMonths / 12);
    let totalExp = ` around ${totalYears} years `;
    if (totalMonths % 12 > 0) {
      totalExp += `and ${totalMonths % 12} month(s) `;
    }
    return totalExp;
  };
  return (
    <div id="about">
      <Typography.Title
        style={{ color: "#fff", textAlign: "center" }}
        level={3}
      >
        About
      </Typography.Title>
      <Row
        style={{
          height: "90vh",
        }}
        justify="center"
        align="middle"
      >
        <Col lg={7} xs={20}>
          <div style={{ textAlign: "center", width: "100%" }}>
            <img
              style={{ height: "40vh", width: "40vh", borderRadius: "100%" }}
              src="/assets/me.jpg"
              alt="My smiling face"
            />
          </div>
        </Col>
        <Col lg={14} xs={20}>
          <div>
            Dedicated and highly motivated Full Stack Web Developer with
            {getExp()}
            of professional experience, seeking to contribute my expertise in
            web development. Proven ability to deliver high-quality web
            solutions, proficient in front-end and back-end technologies, and
            passionate about creating responsive, user-friendly websites.
          </div>

          <div style={{ marginTop: "20px" }}>
            <div style={{ display: "flex", gap: "25px" }}>
              <Button type="text" style={{ color: "white" }}>
                Mobile: +91 9063879180
              </Button>
            </div>
            <div>
              <Button type="text" style={{ color: "white" }}>
                Mail: pavan.9.us@gmail.com
              </Button>
            </div>
            <div style={{ display: "flex", gap: "25px" }}>
              <Button
                type="text"
                style={{ color: "#7FC7D9" }}
                target="_blank"
                href="https://www.linkedin.com/in/j-pavan-kumar/"
              >
                LinkedIn
              </Button>
              <Button
                type="text"
                style={{ color: "#7FC7D9" }}
                target="_blank"
                href="https://github.com/J-Pa1"
              >
                GitHub
              </Button>
              <Button
                type="text"
                style={{ color: "#7FC7D9" }}
                target="_blank"
                href="https://www.hackerrank.com/pa1_j"
              >
                Hackerrank
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
