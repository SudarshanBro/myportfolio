'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/SudarshanBro', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/sudarshan-acharya', icon: Linkedin },
  { name: 'Email', href: 'mailto:avilashisudarshan@gmail.com', icon: Mail },
];

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            {/* Profile Image Container */}
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Your Profile Image */}
              <img
                src="/profile.jpg"
                alt="Sudarshan Acharya"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a gradient background if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }}
              />
              
              {/* Fallback gradient background (shows if no image is provided) */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 flex items-center justify-center opacity-0">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-2">SA</div>
                  <div className="text-lg opacity-90">Add Your Photo</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements around the image */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card p-4 animate-float-delayed"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass-card p-4 animate-float"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">10+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 animate-float"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float-delayed"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Content - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 text-purple-600 dark:text-purple-400"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              <span className="text-sm font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="gradient-text">Sudarshan</span>
              <br />
              <span className="text-gray-800 dark:text-white">Acharya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-lg"
            >
              Electronics Engineer & Full Stack Developer specializing in React.js, AI/ML, and innovative mobile solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Pokhara, Nepal</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+977-9869083511</span>
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Work
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-10 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-3 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}