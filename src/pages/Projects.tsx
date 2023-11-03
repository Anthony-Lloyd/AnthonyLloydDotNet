import React, { useState, useEffect } from 'react';
import { marked } from 'marked'; 
import '../index.css';
import './styles/projects.css';


const tofetch = 'https://raw.githubusercontent.com/Anthony-Lloyd02/AnthonyLloydDotNet/main/public/proj/proj.md';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch(tofetch)
      .then((response) => response.text())
      .then((data) => {
        const sections = data.split('---').map(section => {
          const renderer = new marked.Renderer();
          let title = '', linkUrl = '', linkText = '', imgUrl = '';

          renderer.heading = (text) => { title = text; return ''; };
          renderer.link = (href, title, text) => {
            linkUrl = href;
            linkText = text;
            return '';
          };
          renderer.image = (href, title, text) => {
            imgUrl = href;
            return '';
          };

          const htmlContent = marked(section.trim(), { renderer });

          return {
            title,
            linkUrl,
            linkText,
            imgUrl,
            htmlContent
          };
        });

        setProjects(sections);
      });
  }, []);

  return (
    <section className="bg-light text-dark py-5" id="Projects">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-4">Projects</h2>
          </div>
        </div>
        
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6 col-xl-4 mb-4">
              <div className="card bg-light text-dark border-0 h-100">
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  {project.linkText.includes("YouTube") ? (
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe title={project.title} className="embed-responsive-item" src={`https://www.youtube.com/embed/${project.linkUrl.split('v=')[1]}`} allowFullScreen></iframe>
                    </div>
                  ) : (
                    // Render the clickable image fetched from the markdown for blog posts
                    <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
                      <img src={project.imgUrl} alt={project.title} className="img-fluid" />
                    </a>
                  )}
                  <div className="mt-3" dangerouslySetInnerHTML={{ __html: project.htmlContent }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
