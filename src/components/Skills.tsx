import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Bot, Cpu } from 'lucide-react';

interface SkillsProps {
  isDark: boolean;
}

const CSS3DCube: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="relative w-32 h-32" style={{ perspective: '1000px' }}>
        <div 
          className={`absolute w-full h-full transition-all duration-1000 ${
            isDark ? 'text-blue-400' : 'text-purple-600'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            animation: 'rotateCube 20s infinite linear'
          }}
        >
          {/* Cube faces */}
          <div className={`absolute w-full h-full border-2 ${
            isDark ? 'border-blue-400 bg-blue-400/10' : 'border-purple-600 bg-purple-600/10'
          } backdrop-blur-sm`} 
          style={{ transform: 'rotateY(0deg) translateZ(64px)' }}>
            <div className="flex items-center justify-center h-full">
              <Bot className="w-8 h-8" />
            </div>
          </div>
          <div className={`absolute w-full h-full border-2 ${
            isDark ? 'border-blue-400 bg-blue-400/10' : 'border-purple-600 bg-purple-600/10'
          } backdrop-blur-sm`} 
          style={{ transform: 'rotateY(90deg) translateZ(64px)' }}>
            <div className="flex items-center justify-center h-full">
              <Cloud className="w-8 h-8" />
            </div>
          </div>
          <div className={`absolute w-full h-full border-2 ${
            isDark ? 'border-blue-400 bg-blue-400/10' : 'border-purple-600 bg-purple-600/10'
          } backdrop-blur-sm`} 
          style={{ transform: 'rotateY(180deg) translateZ(64px)' }}>
            <div className="flex items-center justify-center h-full">
              <Code className="w-8 h-8" />
            </div>
          </div>
          <div className={`absolute w-full h-full border-2 ${
            isDark ? 'border-blue-400 bg-blue-400/10' : 'border-purple-600 bg-purple-600/10'
          } backdrop-blur-sm`} 
          style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}>
            <div className="flex items-center justify-center h-full">
              <Cpu className="w-8 h-8" />
            </div>
          </div>
          <div className={`absolute w-full h-full border-2 ${
            isDark ? 'border-blue-400 bg-blue-400/10' : 'border-purple-600 bg-purple-600/10'
          } backdrop-blur-sm`} 
          style={{ transform: 'rotateX(90deg) translateZ(64px)' }}>
            <div className="flex items-center justify-center h-full text-sm font-bold">AI</div>
          </div>
          <div className={`absolute w-full h-full border-2 ${
            isDark ? 'border-blue-400 bg-blue-400/10' : 'border-purple-600 bg-purple-600/10'
          } backdrop-blur-sm`} 
          style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}>
            <div className="flex items-center justify-center h-full text-sm font-bold">ML</div>
          </div>
        </div>
        
        {/* Wireframe overlay */}
        <div 
          className={`absolute w-40 h-40 -top-4 -left-4 border ${
            isDark ? 'border-cyan-400/30' : 'border-indigo-400/30'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            animation: 'rotateWireframe 15s infinite linear reverse'
          }}
        >
          <div className={`absolute w-full h-full border ${
            isDark ? 'border-cyan-400/20' : 'border-indigo-400/20'
          }`} 
          style={{ transform: 'rotateY(45deg) translateZ(80px)' }} />
          <div className={`absolute w-full h-full border ${
            isDark ? 'border-cyan-400/20' : 'border-indigo-400/20'
          }`} 
          style={{ transform: 'rotateY(-45deg) translateZ(80px)' }} />
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const skillCategories = [
    {
      title: 'AI/ML',
      icon: Bot,
      skills: ['Generative AI', 'Agentic AI', 'Machine Learning', 'Python', 'TensorFlow', 'PyTorch'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['Kubernetes', 'Jenkins', 'Docker', 'CI/CD', 'AWS', 'Linux'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Development',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Full Stack'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Experience',
      icon: Cpu,
      skills: ['DevOps Intern', 'Generative AIOps', 'ML Engineering', 'Python Development'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20">
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
            Skills & Expertise
          </h2>
          <p className={`text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies I work with and my professional experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-sm ${
                  isDark 
                    ? 'bg-gray-800/50 border border-gray-700' 
                    : 'bg-white/50 border border-gray-200'
                } hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } transition-colors cursor-default`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CSS3DCube isDark={isDark} />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotateCube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes rotateWireframe {
          0% { transform: rotateX(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateZ(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;