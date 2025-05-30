import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>My professional journey</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Sibi Karthik</h4>
              <p>
                <em>Highly motivated and goal-oriented Computer Science student with expertise in Sports Data Analytics, AI/ML, and Data Science.</em>
              </p>
              <ul>
                <li>Demonstrated ability to leverage technical skills, including Python, machine learning frameworks, and data visualization tools</li>
                <li>A proactive learner committed to continuous self-development</li>
                <li>Contributing to organizational growth by applying analytical thinking and technical expertise to solve complex problems</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>B.Tech Computer Science and Engineering</h4>
              <h5>2021 - 2025</h5>
              <p><em>Vellore Institute of Technology, Vellore, India</em></p>
              <p>CGPA: 8.74</p>
            </div>
            <div className="resume-item">
              <h4>High School</h4>
              <h5>2017 - 2021</h5>
              <p><em>Asian International Pvt. School, Abu Dhabi, UAE</em></p>
              <p>10th Boards: 96.8% (CBSE)</p>
              <p>12th Boards: 93.4% (CBSE)</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Data Science and Machine Learning Project Intern</h4>
              <h5>June 2024 - September 2024</h5>
              <p><em>Common Sense Software Solutions | Remote</em></p>
              <p>Automated vehicle damage detection system</p>
              <ul>
                <li>Developed a machine learning project targeting the Middle East market to automate vehicle damage detection for insurance claims</li>
                <li>Designed and implemented a convolutional neural network (CNN) model achieving 93.7% accuracy in classifying damage types</li>
                <li>Optimized claims processing and reduced manual inspection costs</li>
                <li>Technologies: cv2, matplotlib, numpy, pandas, keras, seaborn, tensorflow, tqdm</li>
                <li>Github: sibi15/ML-Vehicle-Damage-Detection</li>
              </ul>
            </div>
            
            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h4>Cloud Health Diagnostics</h4>
              <p>Github: sibi15/Cloud-Health-Diagnostics</p>
              <ul>
                <li>Designed and implemented a cloud-integrated health diagnostics system leveraging machine learning models</li>
                <li>Used DenseNet and VGG to classify medical conditions from X-rays, MRIs, and CT scans</li>
                <li>Enabled scalable and real-time predictions for improved patient outcomes</li>
                <li>Technologies: boto3, matplotlib, pandas, sagemaker, scikit-learn, tensorflow</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Prediction Model for 2023/24 EFL Championship</h4>
              <p>Github: sibi15/2023-24-EFL-Prediction</p>
              <ul>
                <li>Trained a prediction model leveraging the concept of Pythagorean Expectation to forecast match outcomes</li>
                <li>Aided in strategic decision-making for football teams</li>
                <li>Technologies: matplotlib, numpy, pandas, seaborn, statsmodels</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Sequence Generator</h4>
              <p>Github: sibi15/Sequence-Generator</p>
              <ul>
                <li>Designed a project that provides a museum-like experience about famous mathematical number sequences</li>
                <li>Technologies: mysql.connector, pyttsx3, smtplib, time</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 