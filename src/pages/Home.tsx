import React from 'react';
import './styles/_navadjust.css';
import '../index.css';
import './styles/home.css';

const Home: React.FC = () => {
    return (
        <section className="hero-section py-5 bg-light text-dark" id="Home">
            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-1">Anthony Lloyd</h1>
                        <p className="lead mb-4">
                            My name is Chef
                        </p>
                        <div>
                            <a href="#Resume" className="btn btn-primary btn-lg mr-4">Download My Resume</a>
                            <a href="#Projects" className="btn btn-outline-primary btn-lg ml-4">Look at My Projects</a>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
  <div style={{ maxWidth: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
    <img src="./home/profile.jpg" alt="Anthony Lloyd" className="img-fluid rounded shadow-lg" />
  </div>
</div>
                </div>
            </div>
        </section>
    );
}

export default Home;
