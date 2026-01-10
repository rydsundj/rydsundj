// Home.js
import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

const Home = ({ isDarkMode }) => {
  const projects = [
    { title: "GitHub projects", description: "A mix of personal and school projects. Some may require setup to run.", link: "https://github.com/rydsundj" },
    { title: "SP500SUM", description: "Search for a ticker and see info, graphs and option contracts. Under construction.", link: "https://sp500sum-lkk7.vercel.app/" },
    { title: "AH-El Entrepenad", description: "Static website for electrician organization.", link: "https://ah-el.se" },
    { title: "Y", description: "React app. Under construction.", link: "https://y-ten-dun.vercel.app/" },
    { title: "Mini-RTOS for Nucleo-144", description: "Under construction.", link: "https://github.com/rydsundj/mini-RTOS" },
  ];
      
  return (
    <div className="home-container">
      <section className={`intro-box ${isDarkMode ? "dark" : ""}`}>
        <h1>hello.</h1>
        <p>welcome to my portfolio.</p>
        <p>check back soon for more updates.</p>
      </section>

      <main className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            isDarkMode={isDarkMode}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
