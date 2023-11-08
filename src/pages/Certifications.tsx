import React, { useState, useEffect } from 'react';
import { marked } from 'marked'; // corrected the import statement
import '../index.css';
import './styles/_navadjust.css';
import './styles/certifications.css';



const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    // Local file path
    const localPath = '/certifications/certifications.md';
  
    // Remote file paths
    const remotePaths = [
      'https://raw.githubusercontent.com/Anthony-Lloyd02/AnthonyLloydDotNet/main/public/cert/cert.md',
      'https://drive.google.com/uc?id=1xN1Gmcl0XGvFJNEonACmxtazVU-PqFCY'
    ];
  
    // Function to fetch and process markdown data
    const processMarkdown = (data: string) => {
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
    };
  
    // Function to fetch certification data
    const fetchCertifications = (path: RequestInfo | URL, localVersion: string | number) => {
      fetch(path)
        .then((response) => response.text())
        .then((data) => {
          // Extract the version from the markdown file
          const versionMatch = data.match(/# version (\d+)/);
          const fileVersion = versionMatch ? versionMatch[1] : '0';
  
          // Compare versions and decide which file to use
          if (fileVersion >= localVersion) {
            processMarkdown(data);
          } else {
            fetch(localPath)
              .then((response) => response.text())
              .then((localData) => processMarkdown(localData));
          }
        })
        .catch(() => {
          // If there's an error fetching the remote, use the local data
          fetch(localPath)
            .then((response) => response.text())
            .then((localData) => processMarkdown(localData));
        });
    };
  
    // Initial fetch for the local version
    fetch(localPath)
      .then((response) => response.text())
      .then((localData) => {
        const versionMatch = localData.match(/# version (\d+)/);
        const localVersion = versionMatch ? versionMatch[1] : '0';
        // Use the first remote path by default, or iterate through them if necessary
        fetchCertifications(remotePaths[0], localVersion);
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
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col">
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
