import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src="/path/to/logo.png" alt="EcoCollect Logo" />
          <span>JOB PORTAL</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          
          <a href="#price-sheet">About us</a>
         
          <a href="#about-us">Join</a>
        </nav>
        
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Next Job Here</h1>
          <h2>We are a Community focused on growth</h2><br></br>
          <button className="cta-button">Start Here</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
