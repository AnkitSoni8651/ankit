import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, GraduationCap, Download } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/AnkitSoni8651',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/ankit-verma-3b37a8296',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:av9835359@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ankit
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className={`text-xl md:text-2xl mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                AI/ML Engineer & DevOps Enthusiast
              </p>
            </motion.div>

            <motion.p 
              className={`text-lg mb-8 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Passionate about Generative AI, Machine Learning, and building scalable solutions with modern DevOps practices.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className={`flex items-center space-x-2 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <GraduationCap className="w-5 h-5" />
                <span>B.Tech CSE (AI/ML) • 7th Semester</span>
              </div>
              <div className={`flex items-center space-x-2 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <MapPin className="w-5 h-5" />
                <span>Sarala Birla University, Ranchi</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href="/Ankit_Verma_Resume.pdf"
                download
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
              
              <motion.button
                onClick={scrollToContact}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-800/50' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50'
                } transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  } transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Static photo container - no animations */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  <img
                    src="/ankit_hero.jpg"
                    alt="Ankit Verma"
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;