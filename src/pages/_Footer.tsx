import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube, faMedium } from '@fortawesome/free-brands-svg-icons';
import '../index.css';
import './styles/_footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-dark py-4" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <p className="mb-0">&copy; {currentYear} Anthony Lloyd. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="mb-0">Email: contact@anthonylloyd.net</p>
          </div>
          <div className="col-md-12 text-center mt-3">
            <a href="https://www.linkedin.com/in/anthony-lloyd-845644204/" target="_blank" rel="noopener noreferrer" className="text-dark mr-3 footer-icons">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Anthony-Lloyd" target="_blank" rel="noopener noreferrer" className="text-dark mr-3 footer-icons">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.youtube.com/channel/UCUccX5NE7O6AC-Yg_lzvFeQ" target="_blank" rel="noopener noreferrer" className="text-dark mr-3 footer-icons">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://medium.com/@anthony-lloyd" target="_blank" rel="noopener noreferrer" className="text-dark mr-3 footer-icons">
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </div>
          <div className="col-md-12 text-center mt-3">
            <a href="#Home" className="btn btn-light btn-sm">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
