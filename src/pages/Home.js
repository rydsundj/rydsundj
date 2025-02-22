import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion'; 

const Home = ({isDarkMode}) => {
  const projects = [
    {
      title: 'GitHub projects',
      description: 'A mix of personal and school projects. Some may require setup to run.',
      link: 'https://github.com/rydsundj',
    },
    {
      title: 'TickerTracker',
      description: 'Search for a ticker and see graphs, values and option contracts.\\Data and algo done, visuals under construction.',
      link: 'https://equitytracker.netlify.app/',
    },

    {
      title: 'AH-El Entrepenad',
      description: 'Static website for electrician organization. Done.',
      link: 'https://ah-el.se',
    },
    {
      title: 'Y',
      description: 'Not X. React app. Under construction.',
      link: 'https://rydsundj.github.com/y',
    },
    
    
  ];

  return (
    <div style={{ display: 'flex', width: '96%' }}>
      <div style={{ flex: 1, padding: '1rem' }}>
        <div style={{ 
            backgroundColor: 'rgba(77, 77, 77, 0.9)', 
            borderRadius: '10px', 
            padding: '1rem', 
            height: '30%', 
            marginLeft: '6rem',
            color: "white"
          }}>
          <p>hello.</p>
          <p>welcome to my portfolio.</p>
          <p>currently working on how to showcase and host my projects.</p>
          <p>feel free to check out my github or the current working projects --></p>
          <p>check back soon for updates.</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <main 
          style={{ 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1rem',
            color: isDarkMode ? 'white' : 'black',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}  
              animate={{ opacity: 1, y: 0 }}   
              transition={{ duration: 0.6, delay: index * 0.2 }}  
              className="project-card-container"
            >
              <ProjectCard 
                title={project.title} 
                description={project.description} 
                link={project.link} 
                isDarkMode={isDarkMode}
              />
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Home;