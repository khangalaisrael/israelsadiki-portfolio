import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function About() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <img className="nav-logo" src="/profile_logo.png" alt="Israel Sadiki Logo" />
        <Link to="/" className="nav-link">Home</Link>
      </nav>

      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">About</h2>

          <p className="about-desc">
            I enjoy working at the point where data meets decision-making. Using Python, statistics, and machine learning, I focus on turning data into clear insights that improve how businesses operate. I’m currently pursuing a degree that blends applied statistics with computer science, which has strengthened my analytical thinking, problem-solving skills, and ability to write clean, efficient code. I enjoy working with real-world data, building models, and using data to support smart decisions. I’m curious by nature and always open to learning new tools and technologies to grow in the data space.
          </p>

          <div className="expertise">
            <h3>Expertise</h3>
            <div className="expGrid">
              <span className="expItem">Object-Oriented Programming</span>
              <span className="expItem">Concurrent Computing</span>
              <span className="expItem">Python</span>
              <span className="expItem">Java</span>
              <span className="expItem">Data Structures</span>
              <span className="expItem">Databases</span>
              <span className="expItem">SQL</span>
              <span className="expItem">Probability Theory</span>
            </div>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <p className="contactText">📧 khangalaisrael@gmail.com</p>
            <p className="contactText">🔗 LinkedIn: israel-sadiki</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
