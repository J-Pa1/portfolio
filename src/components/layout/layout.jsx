import React from "react";
import Header from "./header/header";
import Home from "../home/home";
import Skills from "../home/skills";
import Experience from "../home/experience";
import Projects from "../home/projects";
import Education from "../home/education";
import About from "../home/about";

const Layout = () => {
  return (
    <div className="background">
      <div style={{ height: "10vh" }}>
        <Header />
      </div>
      <div style={{ overflow: "scroll", height: "90vh" }} className="content">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <About />
      </div>
    </div>
  );
};

export default Layout;
