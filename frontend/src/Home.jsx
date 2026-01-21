import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-section">

      {/* NAVBAR */}
      <nav className="navbar">
        <img className="nav-logo" src="/profile_logo.png" alt="Israel Sadiki Logo" />
        <div className="nav-right">
          <a href="/about" className="nav-link">About</a>
        </div>
      </nav>

      {/* MAIN PAGE */}
      <section className="hero">
        <img className="hero-bg" src="/background.jpg" alt="Background" />
        <div className="hero-text">
          <h1 className="hero-title">Israel Sadiki</h1>
          <p className="hero-sub">
            Data Science & Computer Science Student <br />
            Turning data into decisions through Python, statistics, and machine learning.
          </p>
          <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/israel-sadiki-b122a2373"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section" id="experience">
        <h2 className="sectionTitle">Experience</h2>

        <div className="card">
          <div className="card-top">
            <img className="miniLogo" src="/residence_logo.webp" alt="Residence Logo" />
            <div className="line"></div>
            <div className="cardContent">
              <h3>Residence Mentor</h3>
              <p className="sub">Upper Campus Residence, UCT</p>
              <p className="date">Mar 2025 - Nov 2025 • 9 months</p>
              <ul className="bullets">
                <li>Mentored students and supported their wellbeing, creating a safe and positive living environment.</li>
                <li>Held regular check-ins and academic support sessions to track progress and address challenges.</li>
                <li>Helped students adapt to campus life and encouraged teamwork and collaboration within residence.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <img className="miniLogo" src="/uct_logo.jpeg" alt="UCT Logo" />
            <div className="line"></div>
            <div className="cardContent">
              <h3>Orientation Subcommittee</h3>
              <p className="sub">University of Cape Town</p>
              <p className="date">Feb 2025 • 1 month</p>
              <ul className="bullets">
                <li>Guided first-year students through orientation activities to create a welcoming campus experience.</li>
                <li>Led group sessions and helped students navigate campus and university resources.</li>
                <li>Provided support and mentorship, helping new students settle in and feel comfortable.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-top">
            <img className="miniLogo" src="/wits_logo.jpeg" alt="Wits Logo" />
            <div className="line"></div>
            <div className="cardContent">
              <h3>Talent Targeting Programme Alumni</h3>
              <p className="sub">University of the Witwatersrand</p>
              <p className="date">Mar 2022 - Jul 2023 • 1 yr 5 mos</p>
              <ul className="bullets">
                <li>Participated in a competitive programme preparing students for higher education.</li>
                <li>Conducted research and surveys, developing strong data collection and analysis skills.</li>
                <li>Interviewed teachers, presented findings, and improved communication and teamwork.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-rights">© All rights reserved 2026</p>
        <p className="footer-prep">
          Prepared by <span className="footer-green">Israel Sadiki</span>
        </p>
      </footer>
    </div>
  );
}
