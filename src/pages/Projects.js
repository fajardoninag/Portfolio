import React from 'react';

function AcadProjects() {
  return (
    <div className="container case-study">
      <header className="case-header">
        <h1>Full Stack Development</h1>
        <p className="subtitle">Case Study: From Raw Data to Live Full-Stack Application</p>
        
        {/* GitHub Link Button */}
        <a href="https://github.com/your-username/your-repo" target="_blank" rel="noreferrer" className="btn github-btn">
          💻 View Production Code on GitHub
        </a>
      </header>

      {/* 1. FIGMA MOCKUPS */}
      <section className="case-section">
        <h2>🎨 1. UI/UX Design (Figma)</h2>
        <p>Before writing code, I mapped out the entire layout in Figma to ensure a seamless data reporting experience.</p>
        <div className="visual-container">
          {/* Put your exported Figma image inside your src/assets folder */}
          <img src="https://via.placeholder.com/800x450" alt="Figma High-Fidelity Mockups" className="case-img" />
        </div>
      </section>

      {/* 2. GOOGLE COLAB VISUALS */}
      <section className="case-section">
        <h2>📊 2. Data Analysis (Google Colab)</h2>
        <p>Using Python, Pandas, and Matplotlib, I processed the raw datasets. The resulting trends dictated the features built into the final app.</p>
        <div className="visual-container">
          {/* Put your exported Colab chart image inside your src/assets folder */}
          <img src="https://via.placeholder.com/800x450" alt="Google Colab Data Visualizations" className="case-img" />
        </div>
      </section>
    </div>
  );
}

export default AcadProjects;