// App.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from './components/CoverPage';
import NavBar from './components/NavBar';
import Introduction from './components/Introduction';
import Resume from './components/Resume';
import SkillsMatrix from './components/SkillsMatrix';
import Projects from './components/Projects';
import Assessments from './components/Assessments';
import FeedbackAndReflections from './components/FeedbackAndReflections';
import Goals from './components/Goals';
import { personalInfo, projects, skills, assessments, feedback, goals } from './components/data/data';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('intro');
  const [showCoverPage, setShowCoverPage] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark');
  };

  const handleGetStarted = () => {
    setShowCoverPage(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'intro':
        return <Introduction data={personalInfo} />;
      case 'resume':
        return <Resume data={personalInfo} />;
      case 'skills':
        return <SkillsMatrix data={skills} />;
      case 'projects':
        return <Projects data={projects} />;
      case 'assessments':
        return <Assessments data={assessments} />;
      case 'feedback':
        return <FeedbackAndReflections data={feedback} />;
      case 'goals':
        return <Goals data={goals} />;
      default:
        return <Introduction data={personalInfo} />;
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      {showCoverPage ? (
        <CoverPage onGetStarted={handleGetStarted} />
      ) : (
        <>
          <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
              }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
          {/* {renderPage()} */}
        </>
      )}
    </div>
  );
};

export default App;
