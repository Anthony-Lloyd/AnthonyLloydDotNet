import React, { useState, useEffect } from 'react';
import { marked } from 'marked'; // corrected the import statement
import '../index.css';
import './styles/certifications.css';

const tofetch = 'https://raw.githubusercontent.com/Anthony-Lloyd02/AnthonyLloydDotNet/main/public/cert/cert.md';

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    fetch(tofetch)
      .then((response) => response.text())
      .then((data) => {
        const sections = data.split('---').map(section => {
          const renderer = new marked.Renderer();
          let title = '', imgUrl = '';

          renderer.heading = (text) => { title = text; return ''; };
          renderer.image = (href, title, text) => { imgUrl = href; return ''; };

          const htmlContent = marked(section.trim(), { renderer });

          return {
            title,
            imgUrl,
            htmlContent
          };
        });

        setCertifications(sections);
      });
  }, []);

  return (
    <section className="bg-light text-dark py-5" id="Certifications">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-4">Certifications</h2>
          </div>
        </div>
        
        <div className="row">
          {certifications.map((cert, index) => (
            <div key={index} className="col-lg-6 col-xl-4 mb-4">
              <div className="card bg-light text-dark border-0 h-100">
                <img src={cert.imgUrl} alt={cert.title} className="img-fluid rounded-top"/>
                <div className="card-body">
                  <h3 className="card-title">{cert.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: cert.htmlContent }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
