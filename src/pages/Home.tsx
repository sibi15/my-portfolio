import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home fade-in">
      <section className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <img src="/assets/img/profile-picture.jpg" alt="Sibi Karthik" />
          </div>
          <h1>Hi, I'm Sibi Karthik</h1>
          <h2>Final Year CSE Student | Sports Data Analyst | AI/ML and Data Analyst | Football Coach</h2>
          <p>
            I create innovative solutions using data analytics and machine learning.
            Passionate about sports analytics, AI/ML, and developing data-driven applications.
          </p>
          <div className="cta-buttons">
            <Link to="/portfolio" className="btn btn-primary">
              View My Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">What I Do</h2>
        <div className="features-grid">
          <div className="card">
            <div className="card-image">
              <img src="/assets/img/portfolio/machine-learning.jpeg" alt="Machine Learning Project" />
            </div>
            <h3>Data Science & Machine Learning</h3>
            <p>
              Developing machine learning models for real-world applications, including
              vehicle damage detection and healthcare diagnostics.
            </p>
            <Link to="/portfolio" className="btn btn-outline">Learn More</Link>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/assets/img/portfolio/analysis.jpg" alt="Sports Analytics Project" />
            </div>
            <h3>Sports Analytics</h3>
            <p>
              Creating prediction models for sports outcomes and analyzing performance data
              to aid in strategic decision-making.
            </p>
            <a href="https://www.samford.edu/sports-analytics/fans/2024/How-reliable-is-Pythagorean-Expectation-to-predict-the-result-of-the-202324-EFL-Soccer-Championship" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="/assets/img/portfolio/coaching.jpg" alt="Football Coaching" />
            </div>
            <h3>Football Coaching</h3>
            <p>
              FA Level 1 & 2 certified football coach with experience as Assistant Coach
              for VIT University's Football Team.
            </p>
            <Link to="/services" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a final year Computer Science student at VIT University, passionate about data science, 
            machine learning, and sports analytics. With a strong background in both technical and 
            athletic fields, I bring a unique perspective to problem-solving.
          </p>
          <Link to="/about" className="btn btn-primary">Read More</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 