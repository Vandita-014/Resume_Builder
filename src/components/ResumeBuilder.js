import React from 'react';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  return (
    <div className="resume-builder">
      <header className="header">
        <h1>Build Your Resume <span className="highlight">With AI</span></h1>
        <p className="subheader">
          Effortlessly Craft a Standout Resume with Our AI-Powered Builder
        </p>
        <p className="description">
          Land your next job with one of the best AI resume builders online.
          Choose from dozens of recruiter-approved templates and add ready-to-use
          skills and phrases in one click. Millions have trusted our resume maker —
          <span className="highlight"> and it’s free to use!</span>
        </p>
        <div className="cta-buttons">
          <button className="cta-button">Watch Video</button>
          <button className="cta-button primary">Create your resume</button>
        </div>
      </header>
      
      <section className="resume-preview">
        <img 
          src={`${process.env.PUBLIC_URL}/images/personal-resume-modern-t.webp`} 
          alt="Resume Preview" 
          className="resume-image"
        />
        <div className="ai-writing-help">
          <img 
          src={`${process.env.PUBLIC_URL}/images/resume1.jpeg`} 
          alt="AI Icon"
          style={{ width: 'auto', height: '450px' }} 
          
          />
          <p>
            Smart AI Writing Help
            <br />
            <small>With AI-enhanced writing phrases, you can match your letter to any job.</small>
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="trusted-logos">
        <img src={`${process.env.PUBLIC_URL}/images/5-star.jpg`} 
            alt="5 Star Rating" 
            style={{ width: '100px', height: 'auto', border: '1px solid pink' }} />
          <p>As featured in</p>
          <div className="logo-row">
            <img src={`${process.env.PUBLIC_URL}/images/Forbes-logo.png`} alt="Forbes" />
            <img src={`${process.env.PUBLIC_URL}/images/usa today.jpg`} alt="USA Today" />
            <img src={`${process.env.PUBLIC_URL}/images/cnbc logo.png`} alt="CNBC" />
            <img src={`${process.env.PUBLIC_URL}/images/nyt.png`} alt="The New York Times" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeBuilder;
