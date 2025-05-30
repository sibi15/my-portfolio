import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/assets/img/my-profile-img.jpg" className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0" data-aos="fade-left">
            <h3>Final Year CSE Student | Sports Data Analyst | AI/ML and Data Analyst | Football Coach</h3>
            <p className="fst-italic">
              Passionate about creating innovative solutions using data analytics and machine learning
            </p>
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-info">
                  <div className="info-item">
                    <span className="info-label">Birthday</span>
                    <span className="info-value">26th January, 2004</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Website</span>
                    <a href="https://github.com/sibi15" target="_blank" rel="noopener noreferrer" className="info-value">
                      github.com/sibi15
                    </a>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone</span>
                    <div className="info-value">
                      <a href="tel:+918807868458" className="phone-link">+91 880 786 8458</a>
                      <span className="separator">/</span>
                      <a href="tel:+971506814085" className="phone-link">+971 50 681 4085</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-label">City</span>
                    <span className="info-value">Vellore, India</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info">
                  <div className="info-item">
                    <span className="info-label">Age</span>
                    <span className="info-value">20</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Degree</span>
                    <span className="info-value">B.Tech Computer Science</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email</span>
                    <a href="mailto:sibikarthik1@gmail.com" className="info-value">
                      sibikarthik1@gmail.com
                    </a>
                  </div>
                  <div className="info-item">
                    <span className="info-label">LinkedIn</span>
                    <a href="https://linkedin.com/in/sibi-karthik" target="_blank" rel="noopener noreferrer" className="info-value">
                      linkedin.com/sibi-karthik
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p>
              I am a final year Computer Science student at Vellore Institute of Technology with a strong passion for Sports Data Analytics, 
              AI/ML, and Data Science. My goal is to leverage my technical skills to create innovative, data-driven solutions that solve 
              real-world problems. I have experience in developing machine learning models, analyzing sports data, and coaching football.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 