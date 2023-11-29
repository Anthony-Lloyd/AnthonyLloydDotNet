import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import '../index.css';
import './styles/_navadjust.css';
import './styles/certifications.css';

interface Certification {
  title: string;
  imgUrl: string;
  progress: number;
  description: string[];
}

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  const processMarkdown = (data: string) => {
    const sections = data.split('---').map(section => {
      const lines = section.split('\n').filter(line => line.trim());
      let title: string = '';
      let imgUrl: string = '';
      let progress: number = 100;
      let description: string[] = [];

      if (lines[0].startsWith('# ')) {
        title = lines[0].slice(2).trim(); // Get title after '# '
      }

      const imageLine = lines[1];
      const progressLine = lines[2];
      const descriptionLine = lines[3];

      if (imageLine.startsWith('![image]')) {
        const match = imageLine.match(/\((.*?)\)/);
        if (match && match[1]) {
          // Prepend the public URL to the image URL
          imgUrl = `${process.env.PUBLIC_URL}${match[1]}`;
        }
      }
      

      if (progressLine.startsWith('![status]')) {
        const match = progressLine.match(/\((\d+)%\)/);
        if (match) {
          progress = parseInt(match[1], 10);
        }
      }

      if (descriptionLine.startsWith('![description]')) {
        description = descriptionLine.slice(16).split('/').map(item => item.trim()); // Extract and split description
      }

      return {
        title,
        imgUrl,
        progress,
        description,
      };
    });

    setCertifications(sections);
  };

  useEffect(() => {
    const localPath = `${process.env.PUBLIC_URL}/certifications/certifications.md`;

    const fetchCertifications = (path: RequestInfo | URL) => {
      fetch(path)
        .then((response) => response.text())
        .then((data) => {
          processMarkdown(data);
        })
        .catch(() => {
          console.error('Error fetching local file');
        });
    };

    fetchCertifications(localPath);
  }, []);

  return (
    <section className="bg-light text-dark py-5" id="Certifications">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {certifications.map((cert, index) => (
  <div key={index} className="col">
    <div className="card bg-light text-dark border-0 h-100">
      <div className="certification-image-container"> {/* This div is the container for the image */}
        <img src={cert.imgUrl} alt={cert.title} className="certification-image" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{cert.title}</h3>
        <ul>
          {cert.description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
                  <div className="card-progress-container">
        <div className="progress">
          <div className={`progress-bar progress-bar-striped progress-bar-animated ${cert.progress === 100 ? 'bg-success' : 'bg-warning'}`}
               role="progressbar"
               aria-valuenow={cert.progress}
               aria-valuemin={0}
               aria-valuemax={100}
               style={{ width: `${cert.progress}%` }}>
            {cert.progress === 100 ? 'Completed' : 'In Progress'}
          </div>
        </div>
                  </div>
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
