import React from 'react';
import { Sun, Moon, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${
        isDark ? 'bg-gray-900/90' : 'bg-white/90'
      } border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Ankit Verma
            </h1>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.a
              href="/Ankit_Verma_Resume.pdf"
              download
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </motion.a>
            
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-800'
              } hover:scale-110 transition-transform`}
              whileHover={{ rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;