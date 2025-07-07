import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'av9835359@gmail.com',
      href: 'mailto:av9835359@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7488497949',
      href: 'tel:+917488497949'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ranchi, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20">
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
            Get In Touch
          </h2>
          <p className={`text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className={`flex items-center space-x-4 p-4 rounded-lg ${
                    isDark 
                      ? 'bg-gray-800/50 border border-gray-700 hover:bg-gray-800' 
                      : 'bg-white/50 border border-gray-200 hover:bg-white'
                  } transition-colors`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {info.title}
                    </h4>
                    <p className={`${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/AnkitSoni8651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  } transition-colors`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ankit-verma-3b37a8296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${
                    isDark 
                      ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  } transition-colors`}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700 text-white' 
                      : 'bg-white/50 border-gray-200 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;