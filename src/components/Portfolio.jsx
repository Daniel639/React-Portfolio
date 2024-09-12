import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Employee Payroll Tracker',
      image: '',
      deployedLink: 'https://daniel639.github.io/EmployeePayrollTracker/',
      githubLink: 'https://github.com/Daniel639/EmployeePayrollTracker'
    },
    {
      title: 'My Blog',
      image: '',
      deployedLink: 'https://daniel639.github.io/my-blog/',
      githubLink: 'https://github.com/Daniel639/my-blog'
    },
    {
      title: 'My Portfolio',
      image: '',
      deployedLink: 'https://daniel639.github.io/myPortfolio/',
      githubLink: 'https://github.com/Daniel639/myPortfolio'
    },
    {
      title: 'Task-Board-Application',
      image: '',
      deployedLink: 'https://daniel639.github.io/Task-Board-Application/',
      githubLink: 'https://github.com/Daniel639/Task-Board-Application'
    },
    {
      title: 'Weather-Dashboard',
      image: '',
      deployedLink: 'https://daniel639.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/Daniel639/Weather-Dashboard'
    },
    {
      title: 'Professional README Generator',
      image: '',
      deployedLink: 'https://daniel639.github.io/Professional-README-Generator/',
      githubLink: 'https://github.com/Daniel639/Professional-README-Generator'
    },
    {
      title: 'SVG LOGO MAKER',
      image: '',
      deployedLink: 'https://daniel639.github.io/SVG-Logo-Maker/',
      githubLink: 'https://github.com/Daniel639/SVG-Logo-Maker'
    },
    {
      title: 'Employee Tracker',
      image: '',
      deployedLink: 'https://daniel639.github.io/Employee-Tracker/',
      githubLink: 'https://github.com/Daniel639/Employee-Tracker'
    },
    {
      title: 'Unleashed',
      image: '',
      deployedLink: 'https://unleashed-tn44.onrender.com/',
      githubLink: 'https://github.com/Daniel639/unleashed'
    },
    {
      title: 'E-Commerce Back End',
      image: '',
      deployedLink: 'https://daniel639.github.io/E-commerce-Back-End/',
      githubLink: 'https://github.com/Daniel639/E-commerce-Back-End'
    },
    {
      title: 'Tech Blog',
      image: '',
      deployedLink: 'https://tech-blog-8r4d.onrender.com',
      githubLink: 'https://github.com/Daniel639/Tech-Blog'
    },
    {
      title: 'Note Taker',
      image: '',
      deployedLink: '',
      githubLink: 'https://github.com/Daniel639/Note-Taker?tab=readme-ov-file'
    },
    {
      title: 'Social Network API',
      image: '',
      deployedLink: 'https://daniel639.github.io/Social-Network-API/',
      githubLink: 'https://github.com/Daniel639/Social-Network-API'
    },
    {
      title: 'Progressive Web Application (J.A.T.E)',
      image: '',
      deployedLink: 'https://progressive-web-applications-text-editor-rtts.onrender.com',
      githubLink: 'https://github.com/Daniel639/Progressive-Web-Applications-Text-Editor'
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;