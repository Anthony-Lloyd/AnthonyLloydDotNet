import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';

import Projects from './pages/Projects';


import Contact from './pages/Contact';
import About from './pages/About';
// ... import other pages

import './App.css';

function App() {
    return (
        <Router>
        <div className="App">
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
        </Router>
    );
}

export default App;
