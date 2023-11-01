import React, { useState, useEffect } from 'react';
  import { marked } from 'marked';

import '../index.css';
import './About.css';

const About: React.FC = () => {
  const [intro, setIntro] = useState<string>('');
  const [sections, setSections] = useState<any[]>([]);

  useEffect(() => {
    fetch('/about/about.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((text) => {
        const splitSections = text.split('\n## '); // Splitting sections based on headers
        const [introSection, ...otherSections] = splitSections;
        setIntro(introSection.trim());

        const processedSections = otherSections.map(section => {
          const [title, ...content] = section.split('\n');
          return {
            title: title.replace('##', '').trim(),
            content: content.join('\n').trim()
          };
        });
        setSections(processedSections);
      })
      .catch((error) => console.error(error));
  }, []);

  const createMarkup = (content: string) => {
    return { __html: marked(content) };
  };

  return (
    <section className="bg-light text-dark py-5" id="About">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-4 mb-4">About Me</h2>
            <p className="lead">{intro}</p>
          </div>
        </div>

        <div className="row">
          {sections.map((section, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{section.title}</h3>
                  <div className="card-text" dangerouslySetInnerHTML={createMarkup(section.content)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
