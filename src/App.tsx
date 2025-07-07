import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarField from './components/StarField';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      <StarField isDark={isDark} />
      
      <div className="relative z-10">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Contact isDark={isDark} />
        </main>
        
        <footer className={`py-8 text-center ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <div className="container mx-auto px-4">
            <p>&copy; 2024 Ankit Verma. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;