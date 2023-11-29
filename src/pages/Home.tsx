import React from 'react';
import './styles/_navadjust.css';
import '../index.css';
import './styles/home.css';

const Home: React.FC = () => {
    // Define the LinkedIn profile URL
    const linkedinProfileUrl = 'https://www.linkedin.com/in/anthony-lloyd-845644204/';

    // Define the Medium blog URL
    const mediumBlogUrl = 'https://medium.com/@anthony-lloyd';

    return (
        <section className="hero-section py-5 bg-light text-dark" id="Home">
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-1">Anthony Lloyd</h1>
                        <p className="lead mb-4">
                            21-year-old IT enthusiast with a passion for networking and cybersecurity.
                        </p>
                        <div>
                            {/* LinkedIn Button */}
                            <a href={linkedinProfileUrl} className="btn btn-primary btn-lg mr-4" target="_blank" rel="noopener noreferrer">
                                Connect on LinkedIn
                            </a>

                            {/* Medium Blog Button */}
                            <a href={mediumBlogUrl} className="btn btn-outline-primary btn-lg" target="_blank" rel="noopener noreferrer">
                                Visit My Blog
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <div style={{ maxWidth: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
                            <img
                                src={process.env.PUBLIC_URL + '/home/profile.png'}
                                alt="Anthony Lloyd"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
