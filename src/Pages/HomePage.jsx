import React, { useEffect } from "react";
import Layout from "../Layouts/Layout";
import Background from "./Background";
import Tools from "./Tools";
import Projects from "./Projects";
import Footer from "../Layouts/Footer";
import Experience from "./Experience";
import Certificates from "./certificates";
import "./HomePage.css";

const HomePage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout title="Prabal's Portfolio">
      <main>
        <h1>
          Hi! My name is <span className="text-gradient">Prabal</span>
        </h1>
        <h2>
          I want to make the web as <strong>fun</strong> as it is{" "}
          <strong>functional</strong>.
        </h2>
        <div className="section-divider">
          <div id="background" className="card">
            <Background />
          </div>
          <div id="skills" className="card">
            <Tools />
          </div>
          <div id="experience" className="card">
            <Experience />
          </div>
          <div id="projects" className="card">
            <Projects />
          </div>
          <div id="photography" className="card">
            <Certificates/>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
