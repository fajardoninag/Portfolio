import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AcadProjects from './pages/Projects'; // Imported as AcadProjects
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Simple Navigation Bar */}
        <nav className="navbar">
          <Link to="/" className="nav-logo">Niña Fajardo</Link>
          <div className="nav-links">
          
          </div>
        </nav>

        {/* Page Switcher */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Changed element from <Projects /> to <AcadProjects /> to match your import */}
          <Route path="/project/analytics-app" element={<AcadProjects />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;