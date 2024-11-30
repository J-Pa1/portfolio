import React from "react";
import { Button, Col, Row, Typography } from "antd";
import Typewriter from "../animated/Typewriter/Typewriter";
import programmer from "../../svgs/programmer.svg";
import SlideIn from "../animated/SlideIn/SlideIn";

// Importing external CSS file
import "./Home.css";

// Importing the SequenceAnimator
import SequenceAnimator from "../animated/SequenceAnimator/SequenceAnimator";

const Home = () => {
  // Define parent and child variants for animations
  const parentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Row id="home" className="home-row" justify="center" align="middle">
      <Col className="home-text-col">
        {/* Using the SequenceAnimator to animate children sequentially */}
        <SequenceAnimator
          parentVariants={parentVariants}
          childVariants={childVariants}
        >
          {/* SlideIn component */}
          <SlideIn direction="down" duration={0.6} distance={30}>
            <Typography.Title className="home-title">
              Pavan Kumar <span className="highlight-text">Jayanthi</span>
            </Typography.Title>
          </SlideIn>

          {/* Typewriter component */}
          <Typewriter text="I'm a Full Stack Web Developer" speed={100} />
        </SequenceAnimator>
      </Col>
      <Col xs={24} md={10} className="home-image-col">
        <SlideIn direction="right">
          <img
            src={programmer}
            alt="Programmer illustration"
            className="home-image"
          />
        </SlideIn>
      </Col>
    </Row>
  );
};

export default Home;
