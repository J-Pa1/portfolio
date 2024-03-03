import { Card, Timeline, Typography } from "antd";
import React from "react";

const TimelineChild = ({ detail }) => {
  return (
    <>
      <Typography.Title style={{ color: "#fff" }} level={4}>
        {detail.company}
      </Typography.Title>
      {detail.positions.map((position) => (
        <>
          <Typography.Title style={{ color: "#fff" }} level={5}>
            {position.designation}
          </Typography.Title>
          <Typography.Text style={{ color: "rgba(255,255,255,0.5)" }}>
            {position.start}-{position.end}
            <br />
            {position.location}
          </Typography.Text>
        </>
      ))}
    </>
  );
};

const Experience = () => {
  const details = [
    {
      company: "Jio Platforms Ltd",
      positions: [
        {
          designation: "Engineer Security Operation Center",
          location: "Navi Mumbai, Maharashtra, India",
          start: "Aug 2023",
          end: "Current",
        },
        {
          designation: "SDE",
          location: "Bengaluru, Karnataka, India",
          start: "Jul 2022",
          end: "Aug 2023",
        },
      ],
    },
    {
      company: "Antronsys Technologies Ltd",
      positions: [
        {
          designation: "Full Stack Developer",
          location: "Bengaluru, Karnataka, India",
          start: "Jan 2022",
          end: "Jul 2022",
        },
      ],
    },
    {
      company: "Keka HR",
      positions: [
        {
          designation: "Software Engineer",
          location: "Hyderabad, Telangana, India",
          start: "Aug 2021",
          end: "Dec 2021",
        },
        {
          designation: "Full Stack Web Developer Intern",
          location: "Hyderabad, Telangana, India",
          start: "Feb 2021",
          end: "Aug 2021",
        },
      ],
    },
  ];
  return (
    <div id="experience">
      <Typography.Title
        style={{ color: "#fff", textAlign: "center" }}
        level={3}
      >
        Experience
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

export default Experience;
