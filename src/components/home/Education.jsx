import { Card, Timeline, Typography } from "antd";
import React from "react";
import SlideIn from "../animated/SlideIn/SlideIn";

const TimelineChild = ({ detail }) => {
  return (
    <>
      <Typography.Title style={{ color: "#fff" }} level={4}>
        <SlideIn direction="left">{detail.name}</SlideIn>
      </Typography.Title>
      <SlideIn direction="left" style={{ paddingLeft: "10px" }}>
        <Typography.Title style={{ color: "#fff" }} level={5}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <span style={{ color: "#7FC7D9" }}>Year:</span> {detail.year}
            </div>
            <div>
              <span style={{ color: "#7FC7D9" }}>Score:</span> {detail.score}
            </div>
          </div>
        </Typography.Title>
      </SlideIn>
    </>
  );
};

const Education = () => {
  const details = [
    {
      name: "GITAM Deemed to be University",
      year: 2021,
      score: "8.01 GPA",
    },
    {
      name: "Ascent Junior College (BIEAP)",
      year: 2016,
      score: "88.6 %",
    },
    {
      name: "Sri Chaitanya Techno School (SSC)",
      year: 2014,
      score: "9.3 GPA",
    },
  ];
  return (
    <div id="education">
      <SlideIn direction="up">
        <Typography.Title
          style={{ color: "#fff", textAlign: "center" }}
          level={3}
        >
          Education
        </Typography.Title>
      </SlideIn>
      <div style={{ padding: "1% 10%" }}>
        <Card
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "0 10%",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(5px)",
          }}
        >
          <Timeline
            mode="left"
            items={details.map((detail) => ({
              children: <TimelineChild detail={detail} />,
            }))}
          />
        </Card>
      </div>
    </div>
  );
};

export default Education;
