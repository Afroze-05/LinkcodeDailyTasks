import React from "react";
import about from "../assets/about.jpg";   // your saved image

const About = () => {
  return (
    <>
      {/* Top Banner */}
      <div className="about-hero">
        <h1>About ShopEasy</h1>
        <p>Delivering Quality. Building Trust. Creating Smiles.</p>
      </div>

      {/* Main Section */}
      <div className="about-section">

        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            ShopEasy is a modern e-commerce platform providing fresh dairy,
            cosmetics and grocery products. We focus on premium quality,
            affordable pricing, and customer satisfaction.
          </p>
          <button className="about-btn">Explore Products</button>
        </div>

        <div className="about-image">
          <img src={about} alt="About ShopEasy" />
        </div>

      </div>

      {/* Mission & Vision */}
      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To make daily shopping simple, affordable and accessible
            to everyone.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted online marketplace in India.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Values</h3>
          <p>
            Quality products, fast delivery and customer happiness
            are our top priorities.
          </p>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="home-footer">
        <div className="footer-content">
          <h2>ShopEasy</h2>
          <p>Making your shopping experience smooth and affordable.</p>

          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Categories</a>
            <a href="#">Contact</a>
          </div>

          <p className="copyright">
            © 2026 ShopEasy. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;