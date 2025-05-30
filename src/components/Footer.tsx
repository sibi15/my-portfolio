import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-content text-center">
              <h3>Sibi Karthik</h3>
              <p>Data Scientist & Machine Learning Engineer</p>
              <div className="social-links">
                <a href="https://www.instagram.com/sibunda_10/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/sibi-karthik-302a8224a/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/sibi15" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <p className="copyright">
                &copy; {new Date().getFullYear()} Sibi Karthik. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 