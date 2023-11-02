import React from 'react';
import '../index.css';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <p className="mb-0">&copy; {currentYear} Anthony Lloyd. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="mb-0">Email: contact@anthonylloyd.net</p>
          </div>
          <div className="col-md-12 text-center mt-3">
            <a href="#" className="text-white mr-3"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-white mr-3"><i className="fab fa-github"></i></a>
            <a href="#Home" className="btn btn-light btn-sm mt-3">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
