import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AcadProjects from './pages/Projects'; // Imported as AcadProjects
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Nav is rendered inside LandingPage (and should be added to any
            other page component) so the logo and links share a single row. */}

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