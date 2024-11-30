import { Button, Col, Row, Typography } from "antd";
import React from "react";
import Details from "../../constants/details";
import SlideIn from "../animated/SlideIn/SlideIn";
import linkedin from "../../svgs/linkedin.svg";
import github from "../../svgs/github.svg";
import medium from "../../svgs/medium.svg";
import hackerrank from "../../svgs/hackerrank.svg";
import email from "../../svgs/email.svg";
import phone from "../../svgs/phone.svg";
import ScaleUpOnHover from "../animated/ScaleUpOnHover/ScaleUpOnHover";
import "./About.css";

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
      <Row
        style={{
          height: "90vh",
        }}
        justify="center"
        align="middle"
      >
        <Col>
          <Typography.Title
            style={{
              color: "#fff",
              textAlign: "center",
            }}
            level={3}
          >
            <SlideIn>About</SlideIn>
          </Typography.Title>
          <Row justify="center" align="middle">
            <Col lg={7} xs={20}>
              <SlideIn direction="right">
                <div style={{ textAlign: "center", width: "100%" }}>
                  <img
                    style={{
                      height: "40vh",
                      width: "40vh",
                      borderRadius: "100%",
                    }}
                    src="/assets/me.jpg"
                    alt="My smiling face"
                  />
                </div>
              </SlideIn>
            </Col>
            <Col lg={14} xs={20}>
              <SlideIn direction="left">
                <div style={{ margin: "10px" }}>
                  I’m a Full Stack Web Developer with around {getExp()}
                  of experience. Building functional and efficient web apps is
                  what I enjoy most. Whether it’s front-end or back-end, the
                  goal is always to keep things simple and ensure everything
                  runs smoothly. React and Node.js are the usual tools of
                  choice. Quietly learning and improving in the background is
                  part of the routine. Not big on words, but the work tends to
                  reflect the effort.
                </div>
                <div
                  style={{
                    margin: "20px",
                    display: "flex",
                    gap: "25px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <img className="icon-label" src={phone} /> +91 9063879180
                  </div>

                  <div
                    style={{
                      color: "white",
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <img className="icon-label" src={email} />
                    pavan.9.us@gmail.com
                  </div>
                </div>
                <div style={{ display: "flex", gap: "25px" }}>
                  <ScaleUpOnHover>
                    <span>
                      <Button
                        type="text"
                        style={{ color: "#7FC7D9" }}
                        target="_blank"
                        href="https://www.linkedin.com/in/j-pavan-kumar/"
                      >
                        <img className="btn-icon" src={linkedin} />
                      </Button>
                      <div className="btn-label">LinkedIn</div>
                    </span>
                  </ScaleUpOnHover>

                  <ScaleUpOnHover>
                    <Button
                      type="text"
                      style={{ color: "#7FC7D9" }}
                      target="_blank"
                      href="https://github.com/J-Pa1"
                    >
                      <img className="btn-icon" src={github} />
                    </Button>
                    <div className="btn-label">GitHub</div>
                  </ScaleUpOnHover>

                  <ScaleUpOnHover>
                    <Button
                      type="text"
                      style={{ color: "#7FC7D9" }}
                      target="_blank"
                      href="https://medium.com/@pavan.9.us"
                    >
                      <img className="btn-icon" src={medium} />
                    </Button>
                    <div className="btn-label">Medium</div>
                  </ScaleUpOnHover>

                  <ScaleUpOnHover>
                    <Button
                      type="text"
                      style={{ color: "#7FC7D9" }}
                      target="_blank"
                      href="https://www.hackerrank.com/pa1_j"
                    >
                      <img className="btn-icon" src={hackerrank} />
                    </Button>
                    <div className="btn-label">Hacker Rank</div>
                  </ScaleUpOnHover>
                </div>
              </SlideIn>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
