import React from 'react';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "ML Vehicle Damage Detection",
      category: "Machine Learning",
      image: "/assets/img/portfolio/app-1.jpg",
      url: "https://github.com/sibi15/ML-Vehicle-Damage-Detection-System-for-Insurance-Claims",
      description: "Automated vehicle damage detection system for insurance claims using CNN with 93.7% accuracy."
    },
    {
      id: 2,
      title: "Cloud Health Diagnostics",
      category: "Healthcare AI",
      image: "/assets/img/portfolio/app-2.jpg",
      url: "https://github.com/sibi15/Cloud-Health-Diagnostics",
      description: "Cloud-integrated health diagnostics system using DenseNet and VGG for medical imaging."
    },
    {
      id: 3,
      title: "EFL Championship Prediction Model",
      category: "Sports Analytics",
      image: "/assets/img/portfolio/app-3.jpg",
      url: "https://github.com/sibi15/2023-24-EFL-Prediction",
      description: "Prediction model leveraging Pythagorean Expectation to forecast match outcomes."
    },
    {
      id: 4,
      title: "Sequence Generator",
      category: "Mathematics",
      image: "/assets/img/portfolio/books-1.jpg",
      url: "https://github.com/sibi15/Sequence-Generator",
      description: "Interactive project showcasing famous mathematical number sequences."
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>My projects</p>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {portfolioItems.map((item) => (
            <div className="col-lg-6 col-md-6 portfolio-item" key={item.id}>
              <div className="portfolio-wrap">
                <div className="portfolio-image-container">
                  <img src={item.image} className="img-fluid portfolio-img" alt={item.title} />
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="github-link" title="View on GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <p className="portfolio-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 