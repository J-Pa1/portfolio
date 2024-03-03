import { Card, Timeline, Typography } from "antd";
import React from "react";

const TimelineChild = ({ detail }) => {
  return (
    <>
      <Typography.Title style={{ color: "#fff" }} level={4}>
        {detail.name}
      </Typography.Title>
      <Typography.Title style={{ color: "#fff" }} level={5}>
        <span style={{ color: "#7FC7D9" }}>Passout:</span> {detail.year}
      </Typography.Title>
      <Typography.Title style={{ color: "#fff" }} level={5}>
        <span style={{ color: "#7FC7D9" }}>Score:</span> {detail.score}
      </Typography.Title>
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
      <Typography.Title
        style={{ color: "#fff", textAlign: "center" }}
        level={3}
      >
        Education
      </Typography.Title>
      <div style={{ padding: "1% 10%" }}>
        <Card
          style={{ backgroundColor: "rgba(255,255,255,0.1)", padding: "0 10%" }}
          bordered={false}
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
