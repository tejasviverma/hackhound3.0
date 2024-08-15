// src/HomePage.js
import React from 'react';
import Navbar from './navbar';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header className="hero">
        <h1>Welcome to Hackhound 3.0</h1>
        <p>Your Launchpad for Innovation and Entrepreneurship</p>
      </header>
      <section id="about" className="section">
        <h2>About Hackhound 3.0</h2>
        <p>
          Hackhound 3.0 is not just a hackathon—it's a startup accelerator! Join
          like-minded innovators, creators, and entrepreneurs as we dive into a
          weekend of ideation, coding, and business strategy. Whether you're a
          seasoned entrepreneur or a first-time founder, Hackhound 3.0 provides
          the perfect environment to bring your ideas to life.
        </p>
      </section>
      <section id="themes" className="section">
        <h2>Themes</h2>
        <p>
          This year’s themes are focused on real-world problems that need
          innovative solutions. Categories include:
        </p>
        <ul>
          <li>FinTech: Revolutionizing finance through technology.</li>
          <li>HealthTech: Innovative solutions for healthcare challenges.</li>
          <li>Sustainability: Building a better, greener future.</li>
          <li>EdTech: Transforming education through technology.</li>
        </ul>
      </section>
      <section id="prizes" className="section">
        <h2>Prizes</h2>
        <p>
          Winners of Hackhound 3.0 will receive not only cash prizes but also
          opportunities to pitch their startups to leading venture capitalists
          and incubators. The top teams will have a chance to:
        </p>
        <ul>
          <li>Secure seed funding.</li>
          <li>Join a startup accelerator program.</li>
          <li>Receive mentorship from industry experts.</li>
        </ul>
      </section>
      <section id="sponsors" className="section">
        <h2>Sponsors</h2>
        <p>
          Hackhound 3.0 is proudly supported by top industry leaders and
          organizations committed to fostering innovation and entrepreneurship.
          Our sponsors include:
        </p>
        <ul>
          <li>ABC Ventures</li>
          <li>XYZ Incubators</li>
          <li>Global Tech Fund</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
