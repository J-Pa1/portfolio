import React from "react";
import Header from "./header/Header";
import Home from "../home/Home";
import Skills from "../home/Skills";
import Experience from "../home/Experience";
import Projects from "../home/Projects";
import Education from "../home/Education";
import About from "../home/About";
import Blogs from "../home/Blogs";

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
        <Blogs />
        <Projects />
        <Education />
        <About />
      </div>
    </div>
  );
};

export default Layout;
