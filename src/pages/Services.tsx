import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCode, FaUserTie, FaLanguage, FaAward, FaTrophy, FaChartLine } from 'react-icons/fa';

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, children, isOpen, onToggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="accordion-header-content">
          <div className="accordion-icon-wrapper">
            {icon}
          </div>
          <h3>{title}</h3>
        </div>
        <span className="accordion-toggle">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="services fade-in">
      <h1 className="page-title">Skills & Certifications</h1>
      <p className="page-subtitle">My expertise and qualifications</p>
      
      <div className="accordion">
        <AccordionItem 
          title="Technical Skills" 
          icon={<FaCode />}
          isOpen={openSection === 'technical'} 
          onToggle={() => handleToggle('technical')}
        >
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-name">C/C++</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Cloud Computing</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Java</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Machine Learning</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Python</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">R/RStudio</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Sports Analytics</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">SQL</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Tableau</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Other Skills" 
          icon={<FaUserTie />}
          isOpen={openSection === 'other'} 
          onToggle={() => handleToggle('other')}
        >
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-name">Arithmetic</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Attention to Detail</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Communication</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Football Coaching</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Leadership</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Marketing</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <span className="skill-name">Tactical Analysis</span>
              <div className="skill-level">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Languages" 
          icon={<FaLanguage />}
          isOpen={openSection === 'languages'} 
          onToggle={() => handleToggle('languages')}
        >
          <div className="languages-grid">
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
            <div className="language-item">
              <span className="language-name">Tamil</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">Spanish</span>
              <span className="language-level">Intermediate</span>
            </div>
            <div className="language-item">
              <span className="language-name">Hindi</span>
              <span className="language-level">Intermediate</span>
            </div>
            <div className="language-item">
              <span className="language-name">French</span>
              <span className="language-level">Basic</span>
            </div>
            <div className="language-item">
              <span className="language-name">Arabic</span>
              <span className="language-level">Basic</span>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Certifications" 
          icon={<FaAward />}
          isOpen={openSection === 'certifications'} 
          onToggle={() => handleToggle('certifications')}
        >
          <div className="certifications-grid">
            <div className="certification-item">
              <div className="certification-icon">🏆</div>
              <div className="certification-content">
                <h4>AWS Certified Cloud Practitioner</h4>
                <p>Amazon Web Services</p>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-icon">🏆</div>
              <div className="certification-content">
                <h4>Solutions Architect Associate Intern</h4>
                <p>Amazon Web Services</p>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-icon">🏆</div>
              <div className="certification-content">
                <h4>Sports Performance Analytics Specialisation</h4>
                <p>University of Michigan</p>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-icon">🏆</div>
              <div className="certification-content">
                <h4>FA Level 1 & 2 in Coaching Football (UEFA 'C' License)</h4>
                <p>Football Association</p>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-icon">🏆</div>
              <div className="certification-content">
                <h4>Financial Analysis for Investing</h4>
                <p>University of Illinois</p>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-icon">🏆</div>
              <div className="certification-content">
                <h4>Sports Marketing</h4>
                <p>Northwestern University</p>
              </div>
            </div>
            <div className="certification-item">
              <div className="certification-icon">🏆</div>
              <div className="certification-content">
                <h4>NPTEL Public Speaking</h4>
                <p>Indian Institute of Technology</p>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Achievements" 
          icon={<FaTrophy />}
          isOpen={openSection === 'achievements'} 
          onToggle={() => handleToggle('achievements')}
        >
          <div className="achievements-list">
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>Assistant Coach and Player for VIT University's Football Team</h4>
                <p>2020 - Present</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>District Runners-up of CM Trophy Tournament</h4>
                <p>2024</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>Captained School Football Team to Quarter-Finals of National Level Inter-School Tournament</h4>
                <p>2019</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>93.60 percentile in NGSE Advanced</h4>
                <p>2018</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>92.34 percentile in NGSEMains</h4>
                <p>2018</p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4>3rd runner-up and 2nd position in National UCMAS competitions in UAE</h4>
                <p>2011 & 2012</p>
              </div>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem 
          title="Data Analysis" 
          icon={<FaChartLine />}
          isOpen={openSection === 'data'} 
          onToggle={() => handleToggle('data')}
        >
          <div className="data-analysis-content">
            <p>
              I specialize in sports data analysis, machine learning model development, and data visualization 
              for strategic decision-making. My approach combines technical expertise with domain knowledge 
              to extract meaningful insights from complex datasets.
            </p>
            <div className="data-analysis-highlights">
              <div className="highlight-item">
                <h4>Sports Analytics</h4>
                <p>Performance prediction, player evaluation, and tactical analysis</p>
              </div>
              <div className="highlight-item">
                <h4>Machine Learning</h4>
                <p>Developing models for real-world applications in sports and healthcare</p>
              </div>
              <div className="highlight-item">
                <h4>Data Visualization</h4>
                <p>Creating intuitive visualizations to communicate complex insights</p>
              </div>
            </div>
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Services; 