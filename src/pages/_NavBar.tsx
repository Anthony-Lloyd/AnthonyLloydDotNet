import React, { useState, useEffect } from 'react';
import pages from './_PagesConfig.json';
import '../index.css';
import 'hamburgers/dist/hamburgers.min.css';


const Navbar: React.FC = () => {
    const [activePage, setActivePage] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true); // Added state to control navbar collapse

    useEffect(() => {
        const currentHash = window.location.hash.substring(1);
        setActivePage(currentHash || "home");

        const handleHashChange = () => {
            const newHash = window.location.hash.substring(1);
            setActivePage(newHash);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const handleNavigation = (e: React.MouseEvent, pageId: string) => {
        e.preventDefault();
        setIsCollapsed(true); // Collapse the navbar when a link is clicked
        const targetSection = document.getElementById(pageId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = pageId;
        }
        setActivePage(pageId);
    };

    return (
        <div className="container-fluid custom-navbar-bg shadow-sm">
            <div className="container py-2">
                <nav className="navbar navbar-expand-lg justify-content-left">
                    <a className="navbar-brand" href="#Home">Anthony Lloyd</a>
                    <button 
    className="hamburger hamburger--squeeze" 
    type="button" 
    aria-controls="navbarNav" 
    aria-expanded={!isCollapsed} 
    aria-label="Toggle navigation"
    onClick={() => setIsCollapsed(!isCollapsed)} // Toggle the collapsed state
>
    <span className="hamburger-box">
        <span className="hamburger-inner"></span>
    </span>
</button>

                    <div className={`collapse navbar-collapse justify-content-left ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                        <ul className="navbar-nav">
                            {pages
                                .filter(page => page.type !== "component")
                                .map(page => (
                                    <li className={`nav-item px-2`} key={page.id}>
                                        <a 
                                            className={`nav-link ${page.id === activePage ? 'active' : ''}`}
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
