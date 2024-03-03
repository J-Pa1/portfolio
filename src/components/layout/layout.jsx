import React from "react";
import Header from "./header/header";
import Router from "./router/router";
import Footer from "./footer/footer";
import Home from "../home/home";
import Skills from "../home/skills";
import Experience from "../home/experience";
import Projects from "../home/projects";
import Education from "../home/education";

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
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
