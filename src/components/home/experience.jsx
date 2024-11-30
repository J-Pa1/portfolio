import { Card, Timeline, Typography } from "antd";
import React from "react";
import SlideIn from "../animated/SlideIn/SlideIn";

const TimelineChild = ({ detail }) => {
  return (
    <>
      <Typography.Title style={{ color: "#fff" }} level={4}>
        <SlideIn direction="left">{detail.company}</SlideIn>
      </Typography.Title>

      {detail.positions.map((position) => (
        <>
          <SlideIn direction="left">
            <Typography.Title style={{ color: "#fff" }} level={5}>
              {position.designation}
            </Typography.Title>
            <Typography.Text style={{ color: "rgba(255,255,255,0.5)" }}>
              {position.start}-{position.end}
              <br />
              {position.location}
            </Typography.Text>
            {/* <ul style={{ color: "#fff" }}>
              {position.details.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul> */}
          </SlideIn>
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
          location: "Hyderabad, Telangana, India",
          start: "Aug 2023",
          end: "Current",
          details: [
            "Developed a centralized log monitoring interface using React and JavaScript",
            "Mentored and guided a team of three engineers in building an in-house fishing application emphasizing client-side development.",
            "Created a responsive dashboard for vulnerability investigation, focusing on user interface design with React and JavaScript.",
            "Led comprehensive code reviews and resolved bugs to ensure optimal functionality.",
            "Identified and fixed bugs, and optimized application performance through thorough code reviews.",
            "Managed version control with Git, fostering a collaborative work environment and effective teamwork.",
            "Collaborated with design and product teams to implement intuitive user interfaces",
          ],
        },
        {
          designation: "SDE",
          location: "Bengaluru, Karnataka, India",
          start: "Jul 2022",
          end: "Aug 2023",
          details: [],
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
          details: [],
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
          details: [],
        },
        {
          designation: "Full Stack Web Developer Intern",
          location: "Hyderabad, Telangana, India",
          start: "Feb 2021",
          end: "Aug 2021",
          details: [],
        },
      ],
    },
  ];
  return (
    <div id="experience">
      <SlideIn direction="up">
        <Typography.Title
          style={{ color: "#fff", textAlign: "center" }}
          level={3}
        >
          Experience
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

export default Experience;
