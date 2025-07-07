import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Bot, Phone, Zap } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const projects = [
    {
      title: 'Salary Prediction App',
      description: 'ML-powered application that predicts salaries based on various factors using advanced machine learning models and data analysis techniques.',
      icon: Bot,
      technologies: ['Python', 'Machine Learning', 'Streamlit', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/AnkitSoni8651',
      color: 'from-blue-500 to-purple-500',
      features: ['Data preprocessing', 'Model training', 'Interactive UI', 'Real-time predictions']
    },
    {
      title: 'Send SMS, Call, and Email with Python',
      description: 'Comprehensive automation tool for sending SMS, making calls, and sending emails using Twilio API and SMTP protocols.',
      icon: Phone,
      technologies: ['Python', 'Twilio', 'SMTP', 'Automation', 'API Integration'],
      github: 'https://github.com/AnkitSoni8651',
      color: 'from-green-500 to-teal-500',
      features: ['SMS automation', 'Voice calls', 'Email sending', 'Contact management']
    },
    {
      title: 'Automated Deployment using Jenkins',
      description: 'Complete CI/CD pipeline using Jenkins for automated deployment of ML models and web applications with containerization.',
      icon: Zap,
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'DevOps', 'CI/CD'],
      github: 'https://github.com/AnkitSoni8651',
      color: 'from-purple-500 to-pink-500',
      features: ['Automated testing', 'Container deployment', 'Pipeline monitoring', 'Rollback capabilities']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Some of my recent work in AI/ML and DevOps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl backdrop-blur-sm ${
                isDark 
                  ? 'bg-gray-800/50 border border-gray-700' 
                  : 'bg-white/50 border border-gray-200'
              } group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className={`mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    Key Features:
                  </h4>
                  <ul className={`text-sm space-y-1 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded-full text-xs ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      isDark 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;