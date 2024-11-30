import { Avatar, Button, List, Typography } from "antd";
import React from "react";
import SlideIn from "../animated/SlideIn/SlideIn";
import ScaleUpOnHover from "../animated/ScaleUpOnHover/ScaleUpOnHover";

const Blogs = () => {
  const blogs = [
    {
      title: "React Foundation",
      bg: "#FFEB3B",
      link: "https://medium.com/@pavan.9.us/react-foundation-02cb24837c98",
      description:
        "A deep dive into the fundamentals of React, covering its core concepts, perfect for anyone looking to strengthen their foundation in React development.",
    },
    {
      title: 'Keyword "this" in JavaScript',
      link: "https://medium.com/@pavan.9.us/this-in-javascript-08e655312e57",
      bg: "#40E0D0",
      description:
        "A comprehensive guide to understanding the 'this' keyword in JavaScript, exploring its behavior in different contexts like functions, objects, and classes.",
    },
    {
      title: "Event Loop in JS",
      link: "https://medium.com/@pavan.9.us/event-loop-in-js-c4bc465261e0",
      bg: "#FFEB3B",
      description:
        "An insightful explanation of how the event loop works in JavaScript, including the call stack, the event queue, and asynchronous execution in a non-blocking environment.",
    },
    {
      title: "Closures",
      link: "https://medium.com/@pavan.9.us/closures-a694a48238d3",
      bg: "#D3D3D3",
      description:
        "A beginner-friendly explanation of closures in JavaScript, with examples of how they work and why they're an important concept for managing scope and data privacy.",
    },
    {
      title: "Promises in JavaScript",
      link: "https://medium.com/@pavan.9.us/promises-in-javascript-3f542c92f015",
      bg: "#50C878",
      description:
        "A detailed guide on JavaScript promises, explaining how they handle asynchronous operations and how to use `then()`, `catch()`, and `async/await` to work with promises efficiently.",
    },
  ];

  return (
    <div
      id="blog"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        alignItems: "center",
        justifyContent: "center",
        padding: "1% 10%",
      }}
    >
      <Typography.Title
        style={{
          color: "#fff",
          textAlign: "center",
        }}
        level={3}
      >
        <SlideIn>Blogs</SlideIn>
      </Typography.Title>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          justifyContent: "center",
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={blogs}
          renderItem={(item, index) => (
            <SlideIn direction="left">
              <ScaleUpOnHover>
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{
                          background: item.bg,
                          color: "#5A3D34",
                        }}
                      >
                        {item.title[0]}
                      </Avatar>
                    }
                    title={
                      <a
                        target="_blank"
                        href={item.link}
                        style={{ color: "#7fc7d9" }}
                      >
                        {item.title}
                      </a>
                    }
                    description={
                      <div style={{ color: "#fff" }}>{item.description}</div>
                    }
                  />
                </List.Item>
              </ScaleUpOnHover>
            </SlideIn>
          )}
        />
      </div>
    </div>
  );
};

export default Blogs;
