import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <h3>My Portfolio</h3>
            <p>This is my portfolio website where I showcase my projects and skills.</p>
          </div>
          <div className="col-md-6">
            <h3>Contact Me</h3>
            <ul className="list-unstyled">
              <li><a href="mailto:example@example.com" className="text-white">example@example.com</a></li>
              <li><a href="tel:+1234567890" className="text-white">+1234567890</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-2">
        <p>&copy; 2021 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
