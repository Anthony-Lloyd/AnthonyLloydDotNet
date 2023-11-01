import React, { useState } from 'react';
import pages from './_PagesConfig.json';
import '../index.css';
import './_NavBar.css';

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  const handleNavigation = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    setNavbarOpen(false);
    const targetSection = document.getElementById(pageId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setActivePage(pageId);
  };

  return (
    <div className="container-fluid bg-light sticky-top">
      <div className="container py-2">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand hover-effect font-weight-bold" href="#Home" style={{ color: 'blue' }}>Anthony Lloyd</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {pages
                .filter(page => page.type !== "component")
                .map(page => (
                  <li className={`nav-item px-2 ${page.id === activePage ? 'active' : ''}`} key={page.id}>
                    <a 
                      className="nav-link"
                      href={`#${page.id}`} 
                      onClick={(e) => handleNavigation(e, page.id)}
                    >
                      {page.id}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
